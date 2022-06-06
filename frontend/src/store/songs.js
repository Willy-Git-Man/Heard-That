import { csrfFetch } from "./csrf";

const GET_ALL_SONGS = "songs/GET_ALL_SONGS";
const ADD_SONG = "songs/ADD_SONG";
const UPDATE_SONG = "songs/UPDATE_SONG";
const DELETE_SONG = "songs/DELETE_SONGS";

const MOVE_SONG_ALBUM = 'albums/MOVE_SONG_ALBUM'

const getAllSongs = (allSongs) => ({
  type: GET_ALL_SONGS,
  payload: allSongs,
});

const addSong = (newSong) => ({
  type: ADD_SONG,
  payload: newSong,
});

const updateSong = (updatedSong) => ({
  type: UPDATE_SONG,
  payload: updatedSong,
});

const deleteSong = (songToDelete) => ({
  type: DELETE_SONG,
  payload: songToDelete,
});


const moveSongAlbum = (song) => ({
  type:MOVE_SONG_ALBUM,
  payload: song
})


export const getAllSongsThunk = () => async (dispatch) => {
  const response = await csrfFetch("/api/songs");

  if (response.ok) {
    const songs = await response.json();
    dispatch(getAllSongs(songs));
  }
  return response;
};

export const addSongThunk = (newSong) => async (dispatch) => {
  const response = await csrfFetch("/api/songs", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(newSong),
  });
  if (response.ok) {
    const songRequest = await response.json();
    dispatch(addSong(songRequest));
    return songRequest;
  }
};



export const addLikedSongThunk = (newSong) => async (dispatch) => {
  const response = await csrfFetch("/api/songs", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(newSong),
  });
  if (response.ok) {
    const songRequest = await response.json();
    dispatch(addSong(songRequest));
    return songRequest;
  }
};


export const updateSongThunk = (updatedSong) => async (dispatch) => {
  const response = await csrfFetch(`/api/songs/${+updatedSong.id}`, {
    method: "PUT",
    body: JSON.stringify(updatedSong),
  });
  if (response.ok) {
    const updatedSongRequest = await response.json();
    dispatch(updateSong(updatedSongRequest));
    return updatedSongRequest
  }
};


export const updateTestSongThunk = (updatedSong) => async (dispatch) => {
  const response = await csrfFetch(`/api/songs/${+updatedSong.id}`, {
    method: "PUT",
    body: JSON.stringify({ albumId: 1}),
  });
  if (response.ok) {
    const updatedSongRequest = await response.json();
    dispatch(updateSong(updatedSongRequest));
    return updatedSongRequest
  }
};


export const deleteSongThunk = (songIdToDelete) => async (dispatch) => {
  const response = await csrfFetch(`/api/songs/${songIdToDelete}`, {
    method: "DELETE",
  });
  if (response.ok) {
    dispatch(deleteSong(songIdToDelete));
  }
};

const initialState = {songs: {}};

const songsReducer = (state = initialState, action) => {
  let newState;

  switch (action.type) {
    case GET_ALL_SONGS:
      newState = {...state, songs: {}}
      action.payload.forEach((song) => newState.songs[song.id] = song)
      return newState;

    case ADD_SONG:
      newState= {...state, songs: {...state.songs}};
      newState.songs[action.payload.createSong.id] = {...action.payload.createSong}
      return newState;

    case DELETE_SONG:
      newState= {...state, songs: {...state.songs}};
      const id = action.payload
      delete newState.songs[id]
      return newState;

      case UPDATE_SONG:
      newState = {...state, songs: {...state.songs}};
      newState.songs[action.payload.id] = {...action.payload}
      return newState

    default:
      return state;
  }
};




export default songsReducer;
