import { SET_FORM_DATA, SET_PASSWORD, CLEAR_FORM_DATA } from './formTypes';

export const saveFormData = (formData) => {
    return {
        type: SET_FORM_DATA,
        payload: {
            username: formData.username,
            email: formData.email,
            password: SET_PASSWORD,
        },
    }
}

export const clearFormData = () => {
    return {
        type: CLEAR_FORM_DATA, 
    }
}