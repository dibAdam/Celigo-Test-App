'use client';

import React, { useState, useEffect } from 'react';
import { AnimatePresence } from 'framer-motion';
import { StartScreen } from './StartScreen';
import { QuestionScreen } from './QuestionScreen';
import { ResultScreen } from './ResultScreen';
import { allQuestions, type Question } from '../data/questions';

interface ShuffledOption {
    text: string;
    originalIndex: number;
}

interface ShuffledQuestion {
    question: string;
    options: ShuffledOption[];
    correct: number | number[];
}

const CeligoQuiz = () => {
    const [quizStarted, setQuizStarted] = useState(false);
    const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
    const [selectedAnswers, setSelectedAnswers] = useState<Record<number, number[]>>({});
    const [quizCompleted, setQuizCompleted] = useState(false);
    const [quizQuestions, setQuizQuestions] = useState<ShuffledQuestion[]>([]);
    const [questionsPerQuiz] = useState(60);
    const [timeElapsed, setTimeElapsed] = useState(0);

    // Timer effect
    useEffect(() => {
        let timer: NodeJS.Timeout;
        if (quizStarted && !quizCompleted) {
            timer = setInterval(() => {
                setTimeElapsed(prev => prev + 1);
            }, 1000);
        }
        return () => clearInterval(timer);
    }, [quizStarted, quizCompleted]);

    // Format time helper
    const formatTime = (seconds: number) => {
        const mins = Math.floor(seconds / 60);
        const secs = seconds % 60;
        return `${mins}:${secs.toString().padStart(2, '0')}`;
    };

    // Shuffle array function
    const shuffleArray = <T,>(array: T[]): T[] => {
        const shuffled = [...array];
        for (let i = shuffled.length - 1; i > 0; i--) {
            const j = Math.floor(Math.random() * (i + 1));
            [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
        }
        return shuffled;
    };

    // Start quiz
    const startQuiz = () => {
        const shuffledQuestions = shuffleArray(allQuestions)
            .slice(0, questionsPerQuiz)
            .map(q => ({
                ...q,
                options: shuffleArray(
                    q.options.map((opt: string, idx: number) => ({ text: opt, originalIndex: idx }))
                )
            }));

        setQuizQuestions(shuffledQuestions);
        setSelectedAnswers({});
        setCurrentQuestionIndex(0);
        setQuizCompleted(false);
        setQuizStarted(true);
        setTimeElapsed(0);
    };

    // Handle answer selection
    const handleAnswerSelect = (optionIndex: number) => {
        if (!quizCompleted) {
            const currentQuestion = quizQuestions[currentQuestionIndex];
            const isMultiSelect = Array.isArray(currentQuestion.correct);

            setSelectedAnswers(prev => {
                const currentSelected = prev[currentQuestionIndex] || [];

                if (isMultiSelect) {
                    if (currentSelected.includes(optionIndex)) {
                        return {
                            ...prev,
                            [currentQuestionIndex]: currentSelected.filter(i => i !== optionIndex)
                        };
                    } else {
                        return {
                            ...prev,
                            [currentQuestionIndex]: [...currentSelected, optionIndex]
                        };
                    }
                } else {
                    return {
                        ...prev,
                        [currentQuestionIndex]: [optionIndex]
                    };
                }
            });
        }
    };

    // Navigate to next question
    const handleNext = () => {
        if (currentQuestionIndex < quizQuestions.length - 1) {
            setCurrentQuestionIndex(currentQuestionIndex + 1);
        }
    };

    // Navigate to previous question
    const handlePrevious = () => {
        if (currentQuestionIndex > 0) {
            setCurrentQuestionIndex(currentQuestionIndex - 1);
        }
    };

    // Submit quiz
    const handleSubmit = () => {
        setQuizCompleted(true);
    };

    // Calculate score
    const calculateScore = () => {
        let correct = 0;
        quizQuestions.forEach((question, qIndex) => {
            const selectedOptions = selectedAnswers[qIndex];
            if (selectedOptions && selectedOptions.length > 0) {
                const selectedOriginalIndices = selectedOptions.map(idx => question.options[idx].originalIndex).sort((a, b) => a - b);

                if (Array.isArray(question.correct)) {
                    const correctIndices = [...question.correct].sort((a, b) => a - b);
                    if (JSON.stringify(selectedOriginalIndices) === JSON.stringify(correctIndices)) {
                        correct++;
                    }
                } else {
                    if (selectedOriginalIndices.length === 1 && selectedOriginalIndices[0] === question.correct) {
                        correct++;
                    }
                }
            }
        });
        return correct;
    };

    // Reset quiz
    const resetQuiz = () => {
        setQuizStarted(false);
        setQuizCompleted(false);
        setSelectedAnswers({});
        setCurrentQuestionIndex(0);
        setTimeElapsed(0);
    };

    // Render appropriate screen
    return (
        <AnimatePresence mode="wait">
            {!quizStarted ? (
                <StartScreen
                    key="start"
                    questionsPerQuiz={questionsPerQuiz}
                    onStart={startQuiz}
                />
            ) : quizCompleted ? (
                <ResultScreen
                    key="result"
                    score={calculateScore()}
                    totalQuestions={quizQuestions.length}
                    percentage={((calculateScore() / quizQuestions.length) * 100).toFixed(1)}
                    passed={parseFloat(((calculateScore() / quizQuestions.length) * 100).toFixed(1)) >= 80}
                    timeElapsed={timeElapsed}
                    quizQuestions={quizQuestions}
                    selectedAnswers={selectedAnswers}
                    onReset={resetQuiz}
                    formatTime={formatTime}
                />
            ) : (
                <QuestionScreen
                    key={`question-${currentQuestionIndex}`}
                    currentQuestionIndex={currentQuestionIndex}
                    totalQuestions={quizQuestions.length}
                    answeredCount={Object.keys(selectedAnswers).length}
                    timeElapsed={timeElapsed}
                    question={quizQuestions[currentQuestionIndex].question}
                    options={quizQuestions[currentQuestionIndex].options}
                    selectedOptions={selectedAnswers[currentQuestionIndex] || []}
                    isMultiSelect={Array.isArray(quizQuestions[currentQuestionIndex].correct)}
                    onAnswerSelect={handleAnswerSelect}
                    onPrevious={handlePrevious}
                    onNext={handleNext}
                    onSubmit={handleSubmit}
                    allQuestionsAnswered={Object.keys(selectedAnswers).length === quizQuestions.length}
                    formatTime={formatTime}
                />
            )}
        </AnimatePresence>
    );
};

export default CeligoQuiz;
