import useForm from "../../hooks/useForm";
import { useSelector, useDispatch } from 'react-redux';
import { saveFormData } from "../../redux/form/formActions";
import ModalInfo from "../../components/ModalInfo";
import ModalWithButton from "../../components/ModalWithButton";
import { useState } from "react";
import { motion } from 'framer-motion';
import { SET_PASSWORD } from "../../redux/form/formTypes";
import { Link } from 'react-router-dom';

const LoginForm = () => {
    const [values, handleChange] = useForm({ username: '', email: '', password: '' });
    const [showModal, setShowModal] = useState(false);
    const [showModalWithButton, setShowModalWithButton] = useState(false);
    const [message, setMessage] = useState("");
    const [messageButton, setMessageButton] = useState(""); 
    const [showPassword, setShowPassword] = useState(false);
    const form = useSelector(state => state.form);
    const dispatch = useDispatch();

    const handleSubmit = (event) => {
        event.preventDefault();
        if (values.password === SET_PASSWORD) {
            console.log(values);
            dispatch(saveFormData(values));
        } else {
            setMessage("Password incorrecto");
            setShowModal(true);
        }
    };

    const hideModal = () => {
        setShowModal(false);
        setShowModalWithButton(false);
    };

    const PasswordVisibility = () => {
        setShowPassword(!showPassword); 
    };

    return (
        <motion.div
            initial={{ opacity: 0, y: -70 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
        >
            <div className="container">
                <ModalInfo 
                    visible={showModal && !showModalWithButton} 
                    message={message}
                    onClose={hideModal}   
                />
                <ModalWithButton 
                    visible={showModalWithButton} 
                    message={message}
                    messageButton={messageButton}
                    onClose={hideModal}
                />
                <form onSubmit={handleSubmit}>
                    <h2>Login Form</h2>
                    <h5>Username: {form.formData.username}</h5>
                    <div>
                        <label htmlFor="username">Username</label>
                        <input 
                            type="text"
                            id="username"
                            name="username"
                            value={values.username}
                            onChange={handleChange}
                        />
                    </div>
                    <div>
                        <label htmlFor="email">Email</label>
                        <input 
                            type="text"
                            id="email"
                            name="email"
                            value={values.email}
                            onChange={handleChange}
                        />
                    </div>
                    <div>
                        <label htmlFor="password">Password</label>
                        <input 
                            type={showPassword ? 'text' : 'password'}
                            id="password"
                            name="password"
                            value={values.password}
                            onChange={handleChange}
                        />
                        <button type="button" onClick={PasswordVisibility}>
                            {showPassword ? 'Hide' : 'Show'} 
                        </button>
                    </div>
                    <div className="button-container">
                        <button type="submit">Submit</button>
                        <Link 
                            className="logout"
                            to="/login"
                            onClick={(e) => {
                                e.preventDefault();
                                setMessage("¿Estás seguro de que quieres cerrar sesión?");
                                setMessageButton("Presionar para salir");
                                setShowModalWithButton(true);
                            }}
                        >
                            Logout
                        </Link>
                    </div>
                </form>
            </div>
        </motion.div>
    );
};

export default LoginForm;
