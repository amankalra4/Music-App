import { SONGS_DISPLAY, SONGS_ERROR } from "../Constants/Actions";
import { getAlbums, getSongs } from "../API Data/getAPIData";

const singers = ['Ram', 'John' ,'Jubin', 'Arijit', 'Justin', 'Selena', 'Taylor', 'Atif', 'Dua Lipa', 'Shawn'];
const playTime = ['4:00', '3:30', '2:30', '3:55', '2:15', '3:20', '4:20', '2:20', '3:00', '2:45'];

export function requestSongsAPI() {
    return dispatch => {
        return Promise.all([getAlbums, getSongs])
        .then(res => {
          let newArr0 = res[0].data.map(el => {
            let albumId = el['id'], albumTitle = el['title']
            return [albumId, albumTitle]
          });
          let obj0 = Object.assign({}, newArr0);
  
          let data = res[1].data.slice(0, 100);
          let newArr1 = data.map(el => {
            let albumName;
            if(obj0.hasOwnProperty(el['albumId'] - 1)) {
              albumName = obj0[el['albumId'] - 1][1]
            }
            let albumId = el['albumId'], songTitle = el['title'], uniqueID = el['id'];
            return {
              'albumId': albumId, 
              'songTitle': songTitle,
              'albumName': albumName,
              'uniqueID': uniqueID,
              'singer': singers[Math.floor(Math.random() * singers.length)],
              'playTime': playTime[Math.floor(Math.random() * playTime.length)]
            }
          })
          dispatch(songsSuccess(newArr1));
        })
        .catch(e => {
          if(e.response === undefined) {
            dispatch(songsError(`Below Error was encountered:\n${e}`))
          }
          else {
            dispatch(songsError(`An error with ${e.response.status} status code was returned`))
          }
        })
    }
}

function songsSuccess(response) {
    return {
        type: SONGS_DISPLAY,
        payload: response
    }
}

function songsError(response) {
    return {
        type: SONGS_ERROR,
        payload: response
    }
}
