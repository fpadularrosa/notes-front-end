import {
    LOGIN,
    LOGOUT,
    ADD_NOTE,
    DELETE_NOTE,
    UPDATE_NOTE,
    GET_NOTES
} from '../actions/constants.js';

const initialState = {
    notes: [],
    user: null
};

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case GET_NOTES:
            return {
                ...state,
                notes: action.payload
            };
        case LOGIN:
            return {
                ...state,
                user: action.payload
            };
        case LOGOUT:
            return {
                ...state,
                user: null
            };
        case ADD_NOTE:
            return {
                ...state,
                notes: state.notes.concat(action.payload)
            };
        case DELETE_NOTE:
            return {
                ...state,
                notes: state.notes.filter(note => note.id !== action.payload)
            };
        case UPDATE_NOTE:
            return {
                ...state,
                notes: state.notes.map(note => note.id !== action.payload.id).concat(action.payload)
            };
        default:
            break;
    }
};

export default reducer;