import React, { Component } from 'react';
import { connect } from 'react-redux';
import ButtonComponent from '../Components/ButtonComponent';
import PlayListComponent from '../Components/PlayListComponent';
import { CREATE_LIST_BUTTON_CLICK, PLAYLIST_COUNTER, SAVE_TIME } from '../Constants/Actions';

class PlayList extends Component {

    createPlayList = () => {
        this.props.handleClick();
        this.props.handleCounter();
        this.props.saveTime();
    }

    addToPlayListButtonClicked = (el) => {
        this.props.history.push({ pathname: `/playlist/${el + 1}` });
    }

    render() {
        return (
            <div>
                <ButtonComponent name = {`Create a PlayList`} handleChange = {this.createPlayList}/>
                {this.props.clickState && <PlayListComponent clickMe = {this.addToPlayListButtonClicked}/>}
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        clickState: state.playList.createButtonClicked
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        handleClick: () => dispatch({type: CREATE_LIST_BUTTON_CLICK, payload: true}),
        handleCounter: () => dispatch({type: PLAYLIST_COUNTER}),
        saveTime: () => dispatch({type: SAVE_TIME, payload: new Date().toLocaleTimeString()}),
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(PlayList);
