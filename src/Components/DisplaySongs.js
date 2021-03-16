import React from 'react';
import { connect } from 'react-redux';
import styles from './DisplaySongs.module.css';
import Spinner from './Spinner';
import {PropTypes} from 'prop-types';

const DisplaySongs = (props) => (
    <div className = {styles.parentContainer}>
      {
        !props.loading 
          ?
            props.displayArray[0]
            .filter(el => el['songTitle'].toLowerCase().split('').join().includes(props.inputText.trim().toLowerCase().split('').join()))
            .map(el => (
              <div className = {styles.childContainer} key = {el.uniqueID}>
                  <p><strong>Song Title:</strong> {el.songTitle}</p>
                  <p><strong>Singer:</strong> {el.singer}</p>
                  <p><strong>Album:</strong> {el.albumName}</p>
                  {props.addButton && <button className = {styles.AddButton} onClick = {() => props.handleAdd(el.uniqueID)}>Add to list</button>}
                  <span style = {{float: 'right'}}><strong>Play Time:</strong> {el.playTime}</span>
              </div>
              ))
          :
            <Spinner />
      }
      {props.error && console.error(props.error)}
    </div>
)

const mapStateToProps = (state) => {
  return {
    inputText: state.songs.inputText,
    displayArray: state.songs.displayArray,
    loading: state.songs.isLoading,
    error: state.songs.error,
  }
}

DisplaySongs.propTypes = {
  inputText: PropTypes.string,
  displayArray: PropTypes.array,
  loading: PropTypes.bool,
  error: PropTypes.string,
  handleAdd: PropTypes.func
}

export default connect(mapStateToProps)(DisplaySongs);
