import useForm from "../../hooks/useForm";
import { useSelector, useDispatch } from 'react-redux';
import { saveFormData } from "../../redux/form/formActions";
import ModalInfo from "../../components/ModalInfo";
import { useState } from "react";
import { motion } from 'framer-motion';
import { SET_PASSWORD } from "../../redux/form/formTypes";

const LoginForm = () => {
    const [values, handleChange] = useForm({ username: '', email: '', password: '' });
    const [showModal, setShowModal] = useState(false);
    const [message, setMessage] = useState("");
    const [modalType, setModalType] = useState(""); 
    const form = useSelector(state => state.form);
    const dispatch = useDispatch();

    const handleSubmit = (event) => {
        event.preventDefault();
        if (values.password === SET_PASSWORD) {
            console.log(values);
            dispatch(saveFormData(values));
        } else {
            setMessage("Password incorrecto");
            setModalType("error");
            setShowModal(true);
        }
    };

    const hideModal = () => {
        setShowModal(false);
    };

    return (
        <motion.div
            initial={{ opacity: 0, y: -70 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
        >
            <div className="container">
                <ModalInfo 
                    visible={showModal} 
                    message={message}
                    onClose={hideModal}
                    type={modalType}    
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
                            type="password"
                            id="password"
                            name="password"
                            value={values.password}
                            onChange={handleChange}
                        />
                    </div>
                    <div className="button-container">
                        <button type="submit">Submit</button>
                        <button type="button" onClick={() => {
                            setMessage("Bienvenidos al módulo 7");
                            setModalType("info");
                            setShowModal(true);
                        }}>Mostrar Modal</button>
                    </div>
                </form>
            </div>
        </motion.div>
    );
};

export default LoginForm;
