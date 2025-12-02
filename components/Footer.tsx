import { motion } from 'framer-motion';

const Footer = () => {
    return (
        <motion.footer
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.8 }}
            className="mt-8 text-center text-gray-400 text-sm"
        >
            Made with ❤️ by Adam
        </motion.footer>
    );
};

export default Footer;