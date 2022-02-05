import { csrfFetch } from "./csrf";

const GET_ALL_SONGS = 'songs/GET_ALL_SONGS'


const getAllSongs = (allSongs) => ({
  type: GET_ALL_SONGS,
  payload: allSongs
})


export const getAllEventsThunk = () => async (dispatch) => {
  const response = await csrfFetch("/api/events");

  if (response.ok) {
    const songs = await response.json();
    dispatch(getAllSongs(songs.songs));
  }
  return response;
};


