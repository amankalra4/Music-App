import React from 'react';
import { connect } from 'react-redux';
import { INPUT_TEXT } from '../Constants/Actions';
import styles from './InputComponent.module.css';
import {PropTypes} from 'prop-types';

const InputComponent = (props) => {
    const handleChange = (e) => {
        props.setInputText(e.target.value);
    }
    return (
        <div style = {{textAlign: 'center'}}>
            <input 
            placeholder = 'Search for songs' 
            type = 'search' 
            value = {props.inputText} 
            onChange = {(e) => handleChange(e)}
            className = {styles.inputText} />
        </div>
    )
}

const mapStateToProps = (state) => {
    return {
      inputText: state.songs.inputText
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
      setInputText: (str) => dispatch({type: INPUT_TEXT, payload: str})
    }
}

InputComponent.propTypes = {
    inputText: PropTypes.string,
    setInputText: PropTypes.func
}

export default connect(mapStateToProps, mapDispatchToProps)(InputComponent);
