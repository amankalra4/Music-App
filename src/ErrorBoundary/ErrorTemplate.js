import React from 'react';
import styles from './ErrorTemplate.module.css';

const ErroTemplate = () => {
    return (
        <div className = {styles.ErrorTemplate}>
            An error was encountered.<br/>
            Please try refreshing the page or revisit us again.
        </div>
    )
}

export default ErroTemplate;
