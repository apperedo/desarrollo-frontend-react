import { SET_FORM_DATA } from './formTypes';
import { SET_PASSWORD } from './formTypes';

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