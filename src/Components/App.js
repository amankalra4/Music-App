import React from 'react';
import { connect } from 'react-redux';
import { Route, Switch } from 'react-router';
import PlayList from '../Containers/PlayList';
import PlayListContainer from '../Containers/PlayListContainer';
import PlayListID from '../Containers/PlayListID';
import SongsList from '../Containers/SongsList';
import ErrorBoundary from '../ErrorBoundary/ErrorBoundary';
import ErroTemplate from '../ErrorBoundary/ErrorTemplate';
import NavigationList from './NavigationList';
import { PropTypes } from 'prop-types';
import styles from './App.module.css';

function App(props) {
  return (
    <React.Fragment>
      <ErrorBoundary>
        <div className = {styles.App}>VBI Music App</div>
          {
            props.error
              ?
                <ErroTemplate />
              :
                <React.Fragment>
                  <NavigationList />
                  <Switch>
                    <Route path = '/' exact component = {SongsList} />
                    <Route path = '/playlist' exact component = {PlayList} />
                    <Switch>
                      <Route path = '/playlist/showPlayList/' exact component = {PlayListContainer} />
                      <Route path = '/playlist/:playlistId' exact component = {PlayListID} />
                    </Switch>
                  </Switch>
                </React.Fragment>
          }
      </ErrorBoundary>
    </React.Fragment>
  );
}

const mapStateToProps = (state) => {
  return {
    error: state.songs.error
  }
}

App.propTypes = {
  error: PropTypes.string
}

export default connect(mapStateToProps)(App);
