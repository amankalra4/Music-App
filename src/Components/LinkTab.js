import React from 'react';
import styles from './LinkTab.module.css';
import { NavLink } from 'react-router-dom';
import {PropTypes} from 'prop-types';

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

LinkTab.propTypes = {
    exact: PropTypes.bool,
    link: PropTypes.string,
    children: PropTypes.node
}

export default LinkTab;
