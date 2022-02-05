import { csrfFetch } from "./csrf";

const GET_ALL_SONGS = "songs/GET_ALL_SONGS";
const ADD_SONG = "songs/ADD_SONG";
const UPDATE_SONG = "songs/UPDATE_SONG";
const DELETE_SONG = "songs/DELETE_SONGS";

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

export const getAllSongsThunk = () => async (dispatch) => {
  const response = await csrfFetch("/api/songs");

  if (response.ok) {
    const songs = await response.json();
    dispatch(getAllSongs(songs.songs));
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

export const updateSongThunk = (updatedSong) => async (dispatch) => {
  const response = await csrfFetch(`/api/songs/${+updatedSong.id}`, {
    method: "PUT",
    body: JSON.stringify(updatedSong),
  });
  if (response.ok) {
    const updatedSongRequest = await response.json();
    dispatch(updateSong(updatedSongRequest));
  }
};

export const deleteSongThunk = (songIdToDelete) => async (dispatch) => {
  const response = await csrfFetch(`/api/events/${songIdToDelete}`, {
    methood: "DELETE",
  });
  if (response.ok) {
    dispatch(deleteSong(songIdToDelete));
  }
};
//seems like I need to grab the id from the argument not the whole thing
