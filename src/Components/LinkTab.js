import React from 'react';
import styles from './LinkTab.module.css';
import { NavLink } from 'react-router-dom';

const LinkTab = (props) => (
    <li className = {styles.LinkTab}>
        <NavLink 
            exact = {props.exact}
            activeClassName = {styles.active}
            to = {props.link}>
        {props.children}
        </NavLink>
    </li>
)

export default LinkTab;
