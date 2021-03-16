import { applyMiddleware, combineReducers, compose, createStore } from "redux";
import thunk from "redux-thunk";
import playListReducer from "./playListReducer";
import songsReducer from "./songsReducer";

export default function configureStore(initialState) {
    let reducer = combineReducers({
        songs: songsReducer,
        playList: playListReducer
    });

    let enhancements = [applyMiddleware(thunk)];

    if(typeof window !== undefined && window.__REDUX_DEVTOOLS_EXTENSION__) {
        enhancements.push(window.__REDUX_DEVTOOLS_EXTENSION__())
    }

    return createStore(reducer, initialState, compose(...enhancements));
}
