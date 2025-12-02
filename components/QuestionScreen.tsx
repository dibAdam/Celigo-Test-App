'use client';

import React from 'react';
import { Timer, CheckCircle } from 'lucide-react';
import { motion } from 'framer-motion';

interface ShuffledOption {
    text: string;
    originalIndex: number;
}

interface QuestionScreenProps {
    currentQuestionIndex: number;
    totalQuestions: number;
    answeredCount: number;
    timeElapsed: number;
    question: string;
    options: ShuffledOption[];
    selectedOptions: number[];
    isMultiSelect: boolean;
    onAnswerSelect: (index: number) => void;
    onPrevious: () => void;
    onNext: () => void;
    onSubmit: () => void;
    allQuestionsAnswered: boolean;
    formatTime: (seconds: number) => string;
}

export const QuestionScreen: React.FC<QuestionScreenProps> = ({
    currentQuestionIndex,
    totalQuestions,
    answeredCount,
    timeElapsed,
    question,
    options,
    selectedOptions,
    isMultiSelect,
    onAnswerSelect,
    onPrevious,
    onNext,
    onSubmit,
    allQuestionsAnswered,
    formatTime,
}) => {
    const isLastQuestion = currentQuestionIndex === totalQuestions - 1;

    return (
        <div className="min-h-screen bg-linear-to-br from-gray-900 via-gray-800 to-gray-900 p-4">
            <div className="max-w-3xl mx-auto">
                {/* Progress bar */}
                <motion.div
                    initial={{ opacity: 0, y: -20 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="glass-panel rounded-lg shadow-md p-4 mb-4"
                >
                    <div className="flex justify-between items-center mb-2">
                        <span className="text-sm font-medium text-gray-300">
                            Question {currentQuestionIndex + 1} of {totalQuestions}
                        </span>
                        <span className="text-sm font-medium text-gray-300">
                            Answered: {answeredCount}/{totalQuestions}
                        </span>
                        <div className="flex items-center gap-2 text-indigo-400 bg-indigo-500/10 px-3 py-1 rounded-full">
                            <Timer className="w-4 h-4" />
                            <span className="font-mono font-medium">{formatTime(timeElapsed)}</span>
                        </div>
                    </div>
                    <div className="w-full bg-gray-700/50 rounded-full h-2">
                        <motion.div
                            initial={{ width: 0 }}
                            animate={{ width: `${((currentQuestionIndex + 1) / totalQuestions) * 100}%` }}
                            transition={{ duration: 0.5, ease: "easeOut" }}
                            className="bg-linear-to-r from-indigo-500 to-purple-500 h-2 rounded-full"
                        />
                    </div>
                </motion.div>

                {/* Question card */}
                <motion.div
                    key={currentQuestionIndex}
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: -20 }}
                    transition={{ duration: 0.3 }}
                    className="glass-panel rounded-2xl shadow-2xl p-8"
                >
                    <h2 className="text-2xl font-bold text-white mb-2">
                        {question}
                    </h2>
                    {isMultiSelect && (
                        <p className="text-sm text-indigo-400 font-medium mb-4">
                            (Select all that apply)
                        </p>
                    )}
                    {!isMultiSelect && (
                        <div className="mb-6"></div>
                    )}

                    <div className="space-y-3 mb-8">
                        {options.map((option, index) => {
                            const isSelected = selectedOptions.includes(index);
                            return (
                                <motion.button
                                    key={index}
                                    initial={{ opacity: 0, y: 10 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    transition={{ delay: index * 0.05 }}
                                    whileHover={{ scale: 1.02, x: 4 }}
                                    whileTap={{ scale: 0.98 }}
                                    onClick={() => onAnswerSelect(index)}
                                    className={`w-full text-left p-4 rounded-lg border-2 transition-all ${isSelected
                                        ? 'border-indigo-500 bg-indigo-500/20 shadow-lg shadow-indigo-500/20'
                                        : 'border-gray-600/50 bg-gray-800/30 hover:border-indigo-400/50 hover:bg-gray-700/30'
                                        }`}
                                >
                                    <div className="flex items-center gap-3">
                                        <div
                                            className={`w-6 h-6 ${isMultiSelect ? 'rounded-md' : 'rounded-full'
                                                } border-2 flex items-center justify-center transition-all ${isSelected
                                                    ? 'border-indigo-400 bg-indigo-500'
                                                    : 'border-gray-500'
                                                }`}
                                        >
                                            {isSelected && (
                                                isMultiSelect ? (
                                                    <CheckCircle className="w-4 h-4 text-white" />
                                                ) : (
                                                    <div className="w-3 h-3 bg-white rounded-full" />
                                                )
                                            )}
                                        </div>
                                        <span className="text-gray-200">{option.text}</span>
                                    </div>
                                </motion.button>
                            );
                        })}
                    </div>

                    {/* Navigation buttons */}
                    <div className="flex justify-between items-center">
                        <motion.button
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                            onClick={onPrevious}
                            disabled={currentQuestionIndex === 0}
                            className="px-6 py-3 rounded-lg font-semibold transition-all disabled:opacity-50 disabled:cursor-not-allowed bg-gray-700/50 hover:bg-gray-600/50 text-gray-200 border border-gray-600/50"
                        >
                            Previous
                        </motion.button>

                        <div className="flex gap-3">
                            {!isLastQuestion ? (
                                <motion.button
                                    whileHover={{ scale: 1.05 }}
                                    whileTap={{ scale: 0.95 }}
                                    onClick={onNext}
                                    className="px-6 py-3 rounded-lg font-semibold transition-all bg-linear-to-r from-indigo-600 to-purple-600 hover:from-indigo-500 hover:to-purple-500 text-white shadow-lg"
                                >
                                    Next
                                </motion.button>
                            ) : (
                                <motion.button
                                    whileHover={{ scale: allQuestionsAnswered ? 1.05 : 1 }}
                                    whileTap={{ scale: allQuestionsAnswered ? 0.95 : 1 }}
                                    onClick={onSubmit}
                                    disabled={!allQuestionsAnswered}
                                    className="px-6 py-3 rounded-lg font-semibold transition-all disabled:opacity-50 disabled:cursor-not-allowed bg-linear-to-r from-green-600 to-emerald-600 hover:from-green-500 hover:to-emerald-500 text-white shadow-lg"
                                >
                                    Submit Quiz
                                </motion.button>
                            )}
                        </div>
                    </div>

                    {!allQuestionsAnswered && isLastQuestion && (
                        <motion.p
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            className="text-center text-amber-400 mt-4 text-sm"
                        >
                            Please answer all questions before submitting
                        </motion.p>
                    )}
                </motion.div>
            </div>
        </div>
    );
};
