'use client';

import React from 'react';
import { CheckCircle, XCircle, RotateCcw, Timer } from 'lucide-react';
import { motion } from 'framer-motion';
import Footer from './Footer';

interface ShuffledOption {
    text: string;
    originalIndex: number;
}

interface QuizQuestion {
    question: string;
    options: ShuffledOption[];
    correct: number | number[];
}

interface ResultScreenProps {
    score: number;
    totalQuestions: number;
    percentage: string;
    passed: boolean;
    timeElapsed: number;
    quizQuestions: QuizQuestion[];
    selectedAnswers: Record<number, number[]>;
    onReset: () => void;
    formatTime: (seconds: number) => string;
}

export const ResultScreen: React.FC<ResultScreenProps> = ({
    score,
    totalQuestions,
    percentage,
    passed,
    timeElapsed,
    quizQuestions,
    selectedAnswers,
    onReset,
    formatTime,
}) => {
    return (
        <div className="min-h-screen bg-linear-to-br from-gray-900 via-gray-800 to-gray-900 p-4">
            <div className="max-w-4xl mx-auto glass-panel rounded-2xl shadow-2xl p-8">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="text-center mb-8"
                >
                    <h1 className="text-3xl font-bold text-white mb-4">Quiz Results</h1>
                    <motion.div
                        initial={{ scale: 0 }}
                        animate={{ scale: 1 }}
                        transition={{ delay: 0.2, type: "spring", stiffness: 200 }}
                        className={`text-6xl font-bold mb-2 ${passed ? 'text-green-400' : 'text-red-400'
                            }`}
                    >
                        {percentage}%
                    </motion.div>
                    <p className="text-xl text-gray-300">
                        {score} out of {totalQuestions} correct
                    </p>
                    <motion.div
                        initial={{ opacity: 0, scale: 0.8 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ delay: 0.4 }}
                        className={`inline-block mt-4 px-6 py-2 rounded-full ${passed
                            ? 'bg-green-500/20 text-green-300 border border-green-500/50'
                            : 'bg-red-500/20 text-red-300 border border-red-500/50'
                            }`}
                    >
                        {passed ? '✓ Passed' : '✗ Failed'}
                    </motion.div>
                    <div className="mt-4 flex items-center justify-center gap-2 text-gray-300">
                        <Timer className="w-5 h-5" />
                        <span className="text-lg font-medium">Time Taken: {formatTime(timeElapsed)}</span>
                    </div>
                </motion.div>

                <div className="space-y-6 mb-8">
                    {quizQuestions.map((question, qIndex) => {
                        const selectedOptions = selectedAnswers[qIndex] || [];
                        const selectedOriginalIndices = selectedOptions
                            .map((idx) => question.options[idx].originalIndex)
                            .sort((a, b) => a - b);

                        let isCorrect = false;
                        if (Array.isArray(question.correct)) {
                            const correctIndices = [...question.correct].sort((a, b) => a - b);
                            isCorrect =
                                JSON.stringify(selectedOriginalIndices) ===
                                JSON.stringify(correctIndices);
                        } else {
                            isCorrect =
                                selectedOriginalIndices.length === 1 &&
                                selectedOriginalIndices[0] === question.correct;
                        }

                        const correctOptionIndices = Array.isArray(question.correct)
                            ? question.correct
                            : [question.correct];
                        const correctOptionsText = question.options
                            .filter((opt) => correctOptionIndices.includes(opt.originalIndex))
                            .map((opt) => opt.text)
                            .join(', ');

                        return (
                            <motion.div
                                key={qIndex}
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ delay: qIndex * 0.05 }}
                                className={`border-2 rounded-lg p-6 ${isCorrect
                                    ? 'border-green-500/50 bg-green-500/10'
                                    : 'border-red-500/50 bg-red-500/10'
                                    }`}
                            >
                                <div className="flex items-start gap-3 mb-4">
                                    {isCorrect ? (
                                        <CheckCircle className="w-6 h-6 text-green-400 shrink-0 mt-1" />
                                    ) : (
                                        <XCircle className="w-6 h-6 text-red-400 shrink-0 mt-1" />
                                    )}
                                    <div className="flex-1">
                                        <h3 className="font-semibold text-white mb-3">
                                            Question {qIndex + 1}: {question.question}
                                        </h3>

                                        {selectedOptions.length > 0 && (
                                            <div className="mb-2">
                                                <span className="font-medium text-gray-300">Your answer: </span>
                                                <span className={isCorrect ? 'text-green-300' : 'text-red-300'}>
                                                    {selectedOptions
                                                        .map((optIdx) => question.options[optIdx].text)
                                                        .join(', ')}
                                                </span>
                                            </div>
                                        )}

                                        {!isCorrect && (
                                            <div>
                                                <span className="font-medium text-gray-300">Correct answer: </span>
                                                <span className="text-green-300 font-medium">
                                                    {correctOptionsText}
                                                </span>
                                            </div>
                                        )}
                                    </div>
                                </div>
                            </motion.div>
                        );
                    })}
                </div>

                <div className="flex gap-4 justify-center">
                    <motion.button
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        onClick={onReset}
                        className="glass-button text-white font-semibold py-3 px-8 rounded-lg transition-all flex items-center gap-2 shadow-lg"
                    >
                        <RotateCcw className="w-5 h-5" />
                        Take New Quiz
                    </motion.button>
                </div>
            </div>

            {/* Footer */}
            <Footer />
        </div>
    );
};
