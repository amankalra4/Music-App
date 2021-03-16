import React, { Component } from 'react';
import { connect } from 'react-redux';
import { requestSongsAPI } from '../Actions/requestSongsAPI';
import DisplaySongs from '../Components/DisplaySongs';
import InputComponent from '../Components/InputComponent';
import {PropTypes} from 'prop-types';

class SongsList extends Component {
  
  componentDidMount() {
    this.props.callSongsAPI();
  }

  render() {
    return (
      <React.Fragment>
        <InputComponent />
        <DisplaySongs />
      </React.Fragment>
    );
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    callSongsAPI: () => dispatch(requestSongsAPI()),
  }
}

SongsList.propTypes = {
  callSongsAPI: PropTypes.func 
}

export default connect(undefined, mapDispatchToProps)(SongsList);
