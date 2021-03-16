import { ADD_TO_PLAYLIST, CREATE_LIST_BUTTON_CLICK, PLAYLIST_COUNTER, SAVE_TIME, SHOW_LIST } from "../Constants/Actions";

const initialState = {
    createButtonClicked: false,
    playListCounter: 0,
    time: [],
    playList: {},
    showList: {}
}

const playListReducer = (state = initialState, action) => {
    switch (action.type) {
        case CREATE_LIST_BUTTON_CLICK:
            return {
                ...state,
                createButtonClicked: action.payload
            }
        case PLAYLIST_COUNTER: 
            return {
                ...state,
                playListCounter: state.playListCounter + 1
            }
        case SAVE_TIME: 
            return {
                ...state,
                time: [...state.time, action.payload]
            }
        case ADD_TO_PLAYLIST:
            return {
                ...state,
                playList: {...state.playList, [action.payload.id]: action.payload.data}
            }
        case SHOW_LIST:
            return {
                ...state,
                showList: {...state.showList, [action.payload.objName]: action.payload.value}
            }
        default:
            return state;
    }
}

export default playListReducer;
