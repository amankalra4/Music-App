import React from 'react';
import styles from './NavigationList.module.css';
import LinkTab from './LinkTab';

const NavigationList = () => (
    <ul className = {styles.NavigationList}>
        <LinkTab link = '/' exact>All Songs</LinkTab>
        <LinkTab link = '/playlist'>PlayLists</LinkTab>
    </ul>
)

export default NavigationList;
