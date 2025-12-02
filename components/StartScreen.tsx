'use client';

import React from 'react';
import { Shuffle } from 'lucide-react';
import { motion } from 'framer-motion';
import Footer from './Footer';

interface StartScreenProps {
    questionsPerQuiz: number;
    onStart: () => void;
}

export const StartScreen: React.FC<StartScreenProps> = ({ questionsPerQuiz, onStart }) => {
    return (
        <div className="min-h-screen bg-linear-to-br from-gray-900 via-gray-800 to-gray-900 p-4">
            <div className="flex items-center justify-center">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                    className="glass-panel rounded-2xl shadow-2xl p-8 max-w-2xl w-full"
                >
                    <div className="text-center">
                        <motion.div
                            initial={{ scale: 0 }}
                            animate={{ scale: 1 }}
                            transition={{ delay: 0.2, type: "spring", stiffness: 200 }}
                        >
                            <Shuffle className="w-16 h-16 text-indigo-400 mx-auto mb-4" />
                        </motion.div>

                        <motion.h1
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            transition={{ delay: 0.3 }}
                            className="text-4xl font-bold text-white mb-4 text-glow"
                        >
                            Celigo Builder Core Certification Quiz
                        </motion.h1>

                        <motion.p
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            transition={{ delay: 0.4 }}
                            className="text-gray-300 mb-6 text-lg"
                        >
                            Test your knowledge with {questionsPerQuiz} randomly selected questions.
                        </motion.p>

                        <motion.div
                            initial={{ opacity: 0, y: 10 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.5 }}
                            className="bg-white/5 backdrop-blur-sm rounded-lg p-6 mb-6 border border-white/10"
                        >
                            <h2 className="font-semibold text-gray-200 mb-3">Quiz Features:</h2>
                            <ul className="text-left text-gray-300 space-y-2">
                                <motion.li
                                    initial={{ opacity: 0, x: -10 }}
                                    animate={{ opacity: 1, x: 0 }}
                                    transition={{ delay: 0.6 }}
                                >
                                    ✓ {questionsPerQuiz} random questions per session
                                </motion.li>
                                <motion.li
                                    initial={{ opacity: 0, x: -10 }}
                                    animate={{ opacity: 1, x: 0 }}
                                    transition={{ delay: 0.7 }}
                                >
                                    ✓ Shuffled answer choices
                                </motion.li>
                                <motion.li
                                    initial={{ opacity: 0, x: -10 }}
                                    animate={{ opacity: 1, x: 0 }}
                                    transition={{ delay: 0.8 }}
                                >
                                    ✓ Immediate feedback on completion
                                </motion.li>
                                <motion.li
                                    initial={{ opacity: 0, x: -10 }}
                                    animate={{ opacity: 1, x: 0 }}
                                    transition={{ delay: 0.9 }}
                                >
                                    ✓ Review correct answers
                                </motion.li>
                            </ul>
                        </motion.div>

                        <motion.button
                            initial={{ opacity: 0, scale: 0.9 }}
                            animate={{ opacity: 1, scale: 1 }}
                            transition={{ delay: 1 }}
                            whileHover={{ scale: 1.05, boxShadow: "0 0 30px rgba(99, 102, 241, 0.6)" }}
                            whileTap={{ scale: 0.95 }}
                            onClick={onStart}
                            className="glass-button text-white font-semibold py-4 px-8 rounded-lg text-lg shadow-lg"
                        >
                            Start Quiz
                        </motion.button>
                    </div>
                </motion.div>

            </div>
            {/* Footer */}
            <Footer />
        </div>
    );
};
