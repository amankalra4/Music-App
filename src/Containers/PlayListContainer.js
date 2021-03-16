import React, { Component } from 'react';
import { connect } from 'react-redux';
import ButtonComponent from '../Components/ButtonComponent';
import styles from './PlayListContainer.module.css';

class PlayListContainer extends Component {

    state = {
        shuffle: false
    }

    handleShuffle = () => {
        this.setState({shuffle: true})
    }

    render() {
        let data = [];
        if(Object.keys(this.props.playListObject).length !== 0 && this.state.shuffle) {
            let randomArray = [...Object.values(this.props.playListObject[this.props.location.state])];
            for (var i = randomArray.length - 1; i > 0; i--) {
                var j = Math.floor(Math.random() * (i + 1));
                var temp = randomArray[i];
                randomArray[i] = randomArray[j];
                randomArray[j] = temp;
            }
            data = randomArray;
        }
        else if(Object.keys(this.props.playListObject).length !== 0 && !this.state.shuffle) {
            data = Object.values(this.props.playListObject[this.props.location.state]);
        }
        return (
            <div>
                {
                    Object.keys(this.props.playListObject).length !== 0
                        ?
                    <div className = {styles.parentContainer}>
                        <ButtonComponent name = {`Shuffle PlayList`} handleChange = {this.handleShuffle} />
                        {
                            data.map(el => (
                                <div className = {styles.childContainer} key = {el.uniqueID}>
                                    <p><strong>Song Title:</strong> {el.songTitle}</p>
                                    <p><strong>Singer:</strong> {el.singer}</p>
                                    <p><strong>Album:</strong> {el.albumName}</p>
                                    <p><strong>Song Added Time:</strong> {el.addedAt}</p>
                                    <span style = {{float: 'right'}}>
                                        <strong>Play Time:</strong> {el.playTime}
                                    </span>
                                </div>
                            ))
                        }
                    </div>
                        :
                    <h2 className = {styles.pageHeading}>Please Go back to create a list first</h2>
                }
                <ButtonComponent name = {`Previous Page`} handleChange = {this.props.history.goBack} />
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        playListObject: state.playList.playList
    }
}

export default connect(mapStateToProps)(PlayListContainer);
