import { SONGS_ERROR, SONGS_DISPLAY, INPUT_TEXT } from "../Constants/Actions";

const initialState = {
    isLoading: true,
    inputText: '',
    displayArray: [],
    error: ''
}

const songsReducer = (state = initialState, action) => {
    switch (action.type) {
        case SONGS_DISPLAY:
            if(state.displayArray.length === 0) {
                return {
                    ...state,
                    isLoading: false,
                    displayArray: [...state.displayArray, action.payload],
                }
            }
            else {
                return state;
            }
        case SONGS_ERROR:
            return {
                ...state,
                error: action.payload
            }
        case INPUT_TEXT:
            return {
                ...state,
                inputText: action.payload,
            }
        default: 
            return state;
    }
}

export default songsReducer;
