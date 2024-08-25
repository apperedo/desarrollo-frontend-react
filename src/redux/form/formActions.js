import { SET_FORM_DATA } from './formTypes';
import { SET_PASSWORD } from './formTypes';

//const DEFAULT_PASSWORD = SET_PASSWORD;

export const saveFormData = (formData) => {
    return (dispatch) => {
        if (formData.passwrod === SET_PASSWORD) {
        dispatch({ 
            type: SET_FORM_DATA, 
            payload: formData, 
        });
    } else {
        console.log('Invalid password');
    }
    };
};