import React from 'react';
import { connect } from 'react-redux';
import { CREATE_LIST_BUTTON_CLICK } from '../Constants/Actions';
import styles from './PlayListComponent.module.css'

const PlayListComponent = (props) => {
    let elem = [];
    for(let i = 0; i < props.playListCounter; i++) {
        elem.push(i);
    }
    return (
        <React.Fragment>
            {elem.map((el, i) => (
                <div key = {i} className = {styles.parentContainer}>
                    <div className = {styles.childContainer} onClick = {() => props.clickMe(el)}>
                        <p className = {styles.title}>Play List {el + 1}</p>
                        <p className = {styles.showTime}>Created At: {props.getTime[el]}</p>
                    </div>
                </div>
            ))}
        </React.Fragment>
    )
}

const mapStateToProps = (state) => {
    return {
        getTime: state.playList.time,
        playListCounter: state.playList.playListCounter
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        handleClick: () => dispatch({type: CREATE_LIST_BUTTON_CLICK, payload: false})
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(PlayListComponent);
