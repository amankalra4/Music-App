import React from 'react';
import styles from './ButtonComponent.module.css';

const ButtonComponent = (props) => (
    <div className = {styles.buttonContainer}>
        <button className = {styles.button} onClick = {() => props.handleChange()}>
            {props.name}
        </button>
    </div>
)

export default ButtonComponent;
