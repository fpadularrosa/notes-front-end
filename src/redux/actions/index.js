import { ADD_NOTE, DELETE_NOTE, LOGIN, LOGOUT, GET_NOTES } from './constants.js';
import Swal from 'sweetalert2';
import axios from 'axios';

export const notesDatabase = () => {
    return async (dispatch) => {
        const {data} = await axios.get('http://localhost:3001/api/notes');

        data.success && dispatch({ type: GET_NOTES, payload: data.response });
        !data.success && Swal.fire('Something went wrong', data.error, 'error');
    };
};

export const postRegister = async (newUser) => {
    try {
        const {data} = await axios.post('http://localhost:3001/api/auth/register', newUser);

        data.success && Swal.fire('Well done', data.message, 'success');
    } catch (error) {
        if(error.response)
        {
            Swal.fire('Something went wrong', `ERROR #${error.response.data.status} - Message:${error.response.data.message}`, 'error');
        };
        if(error.response.data.details)
        {
            Swal.fire('Something went wrong', `ERROR #${error.response.status} - Message:${error.response.data.details[0].message}`, 'error');
        };
    }
};

export const addNote = ({userId, note}) => {
    return async (dispatch) => {
        try {
            const {data} = await axios.post('http://localhost:3001/api/notes/add', {userId, note});

            if(data.success)
            {
                dispatch({ type: ADD_NOTE, payload: data.response });
                Swal.fire('Well done', 'New note added', 'success');
            };
            !data.success && Swal.fire('Well done', data.error, 'error');
        } catch (error) {
            Swal.fire('Something went wrong', error.message, 'error');
        }
    };
};

export const deleteNote = ({id}) => {
    return async (dispatch) => {
        try {
            const { data } = await axios.delete(`http://localhost:3001/api/notes/${id}`);

            if(data.success) 
            {
                dispatch({ type: DELETE_NOTE, payload: id });
                Swal.fire('Well done.', data.response, 'success');
            };
                
            !data.success && Swal.fire('Something went wrong.', data.error, 'error');
        } catch (error) {
            Swal.fire('Something went wrong', error.message, 'error');
        }
    };
};

export const userLogin = ({user}) => {
    return async (dispatch) => 
    {
        try {
            const {data} = await axios.post('http://localhost:3001/api/auth/login', user);

            if(data.success)
            {
                dispatch({ type: LOGIN, payload: data.user });

                localStorage['loggedUser'] = JSON.stringify(data.user);
                window.location.reload(true);
            };
        } catch (error) {
            Swal.fire('Something went wrong.', `ERROR #${error.response.status} - Message:${error.response.data.message}`, 'error');
        }
    };
};

export const userLogout = () => {
    return (dispatch) => {
        dispatch({ type: LOGOUT });
    };
};