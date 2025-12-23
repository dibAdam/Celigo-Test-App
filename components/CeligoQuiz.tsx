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
    const [isTabVisible, setIsTabVisible] = useState(true);
    const [isBlackedOut, setIsBlackedOut] = useState(false);

    // Use ref for immediate key tracking (state updates are async)
    const pressedKeysRef = React.useRef<Set<string>>(new Set());

    // Page Visibility API - detect when tab loses focus
    useEffect(() => {
        const handleVisibilityChange = () => {
            setIsTabVisible(!document.hidden);

            if (document.hidden) {
                console.log('Tab lost focus - timer paused');
                // Black out screen when tab loses focus
                setIsBlackedOut(true);
                setTimeout(() => setIsBlackedOut(false), 2000);
            } else {
                console.log('Tab gained focus - timer resumed');
            }
        };

        document.addEventListener('visibilitychange', handleVisibilityChange);

        return () => {
            document.removeEventListener('visibilitychange', handleVisibilityChange);
        };
    }, []);

    // Detect keyboard combinations
    useEffect(() => {
        if (!quizStarted || quizCompleted) return;

        const handleKeyDown = (e: KeyboardEvent) => {
            // Add key to ref for immediate tracking
            pressedKeysRef.current.add(e.key);

            // Detect if 2 or more keys are pressed simultaneously
            if (pressedKeysRef.current.size >= 2) {
                e.preventDefault();
                setIsBlackedOut(true);
                navigator.clipboard.writeText('');
                console.log('Multiple keys detected:', Array.from(pressedKeysRef.current).join(' + '));

                // Show warning
                setTimeout(() => {
                    alert('Keyboard shortcuts are disabled during the quiz to maintain content integrity.');
                    setIsBlackedOut(false);
                }, 1000);
            }

            console.log('Keys pressed:', Array.from(pressedKeysRef.current));

            // Specifically block common screenshot combinations FIRST
            if (
                e.key === 'PrintScreen' ||
                (e.key === 's' && e.shiftKey && (e.metaKey || e.ctrlKey)) || // Win + Shift + S
                ((e.key === '3' || e.key === '4' || e.key === '5') && e.shiftKey && e.metaKey) || // Mac screenshots
                (e.key === 'p' && e.ctrlKey) || // Ctrl + P (print)
                (e.key === 's' && e.ctrlKey) // Ctrl + S (save)
            ) {
                e.preventDefault();
                setIsBlackedOut(true);
                navigator.clipboard.writeText('');

                setTimeout(() => {
                    alert('This action is disabled during the quiz to maintain content integrity.');
                    setIsBlackedOut(false);
                }, 1000);
                return;
            }
        };

        const handleKeyUp = (e: KeyboardEvent) => {
            // Remove key from ref
            pressedKeysRef.current.delete(e.key);
            console.log('Keys still pressed:', Array.from(pressedKeysRef.current));
        };

        // Prevent right-click context menu
        const preventContextMenu = (e: MouseEvent) => {
            e.preventDefault();
            setIsBlackedOut(true);
            setTimeout(() => {
                alert('Right-click is disabled during the quiz to maintain content integrity.');
                setIsBlackedOut(false);
            }, 500);
        };

        // Detect when window loses focus (might indicate screenshot tool)
        const handleBlur = () => {
            setIsBlackedOut(true);
            setTimeout(() => setIsBlackedOut(false), 1000);
        };

        document.addEventListener('keydown', handleKeyDown);
        document.addEventListener('keyup', handleKeyUp);
        document.addEventListener('contextmenu', preventContextMenu);
        window.addEventListener('blur', handleBlur);

        return () => {
            document.removeEventListener('keydown', handleKeyDown);
            document.removeEventListener('keyup', handleKeyUp);
            document.removeEventListener('contextmenu', preventContextMenu);
            window.removeEventListener('blur', handleBlur);
        };
    }, [quizStarted, quizCompleted]);

    // Timer effect - only runs when tab is visible
    useEffect(() => {
        let timer: NodeJS.Timeout;
        if (quizStarted && !quizCompleted && isTabVisible) {
            timer = setInterval(() => {
                setTimeElapsed(prev => prev + 1);
            }, 1000);
        }
        return () => clearInterval(timer);
    }, [quizStarted, quizCompleted, isTabVisible]);

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
        <div className="screenshot-protected relative">
            {/* Black overlay when suspicious activity detected */}
            {isBlackedOut && (
                <div className="fixed inset-0 bg-black z-[9999] flex items-center justify-center">
                    <div className="text-white text-2xl font-bold">
                        ⚠️ Screenshot Detection Active
                    </div>
                </div>
            )}

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

            <style jsx>{`
                .screenshot-protected {
                    -webkit-touch-callout: none;
                    -webkit-user-select: none;
                    -khtml-user-select: none;
                    -moz-user-select: none;
                    -ms-user-select: none;
                    user-select: none;
                }
                
                @media print {
                    .screenshot-protected * {
                        display: none !important;
                    }
                }
            `}</style>
        </div>
    );
};

export default CeligoQuiz;