import React from 'react';
import { motion } from 'framer-motion';
import { useDispatch } from 'react-redux';
import { clearFormData } from '../redux/form/formActions';

const ModalWithButton = ({ visible, message, messageButton, onClose }) => {
    const dispatch = useDispatch();
    
    if (!visible) {
        return null;
    }

    const handleButtonClick = () => {
        dispatch(clearFormData());
        onClose();
    }

    return (
        <div className="modal-overlay">
            <motion.div
                className="notification-success"
                initial={{opacity: 0, y: -20}}
                animate={{opacity: 1, y: 0}}
                transition={{duration: 0.5}}
            >
            <div>
                <p>{message}</p>
                <button
                    onClick={handleButtonClick}>
                        {messageButton}
                </button>
            </div>
            <button 
                className="close-btn-success"
                onClick={onClose}>
                X    
            </button>
            </motion.div>
        </div>
    );
};

export default ModalWithButton;