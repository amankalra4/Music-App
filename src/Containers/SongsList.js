import React, { Component } from 'react';
import { connect } from 'react-redux';
import { requestSongsAPI } from '../Actions/requestSongsAPI';
import DisplaySongs from '../Components/DisplaySongs';
import InputComponent from '../Components/InputComponent';

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

export default connect(undefined, mapDispatchToProps)(SongsList);
