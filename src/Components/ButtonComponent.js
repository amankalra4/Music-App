import React from 'react';
import styles from './ButtonComponent.module.css';
import {PropTypes} from 'prop-types';

const ButtonComponent = (props) => (
    <div className = {styles.buttonContainer}>
        <button className = {styles.button} onClick = {() => props.handleChange()}>
            {props.name}
        </button>
    </div>
)

ButtonComponent.propTypes = {
    name: PropTypes.string,
    handleChange: PropTypes.func
}

export default ButtonComponent;
