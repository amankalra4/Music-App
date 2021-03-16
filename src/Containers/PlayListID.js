import React, { Component } from 'react';
import { connect } from 'react-redux';
import { requestSongsAPI } from '../Actions/requestSongsAPI';
import ButtonComponent from '../Components/ButtonComponent';
import DisplaySongs from '../Components/DisplaySongs';
import InputComponent from '../Components/InputComponent';
import { ADD_TO_PLAYLIST, SHOW_LIST } from '../Constants/Actions';
import styles from './PlayListContainer.module.css';

class PlayListID extends Component {

    componentDidMount() {
        if(this.props.timeArray.length !== 0) {
            this.props.callSongsAPI();
        }
    }

    handleAdd = (id) => {
        let foundElement = this.props.displayArray[0].find(el => el.uniqueID === id);
        let playlistName = this.props.location.pathname.replaceAll(`/`, '');
        let obj;
        if(this.props.playListObject.hasOwnProperty(playlistName)) {
            obj = {...this.props.playListObject[playlistName], [id]: {...foundElement, addedAt: new Date().toLocaleTimeString()}}
        }
        else {
            obj = {[id]: {...foundElement, addedAt: new Date().toLocaleTimeString()}}
        }

        if(!{...this.props.playListObject[playlistName]}.hasOwnProperty(id)) {
            this.props.saveSongs(obj, playlistName);
            this.props.showListMethod(playlistName, true)
            alert('Added to PlayList');
        }
        else {
            alert('Already in PlayList');
        }
    }

    handleShow = () => {
        this.props.history.push({pathname: `/playlist/showPlayList/`}, [this.props.location.pathname.replaceAll(`/`, '')])
    }

    render() {
        let name = this.props.location.pathname.replaceAll(`/`, '');
        return (
            <div>
                {this.props.timeArray.length !== 0 
                    ? 
                        <React.Fragment>
                            <div className = {styles.header}>
                                <h2 className = {styles.pageHeading}>{name}</h2>
                                <ButtonComponent name = {`Previous Page`} handleChange = {this.props.history.goBack} />
                            </div>
                            <InputComponent />
                            {
                                this.props.showListState[name] 
                                    && 
                                <ButtonComponent name = {`Show ${name}`} handleChange = {this.handleShow} />
                            }
                            <DisplaySongs addButton handleAdd = {this.handleAdd}/>
                        </React.Fragment>
                    : 
                        <React.Fragment>
                            <h2 className = {styles.pageHeading}>Please Go back and create a list first</h2>
                            <ButtonComponent name = {`Previous Page`} handleChange = {this.props.history.goBack} />
                        </React.Fragment>
                }
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        displayArray: state.songs.displayArray,
        playListObject: state.playList.playList,
        timeArray: state.playList.time,
        showListState: state.playList.showList
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
      callSongsAPI: () => dispatch(requestSongsAPI()),
      saveSongs: (data, id) => dispatch({type: ADD_TO_PLAYLIST, payload: {data, id}}),
      showListMethod: (objName, value) => dispatch({type: SHOW_LIST, payload: {objName, value}}),
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(PlayListID);
