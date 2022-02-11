import { useParams } from "react-router-dom";
import { csrfFetch } from "./csrf";

const GET_ALL_ALBUMS = 'albums/GET_ALL_ALBUMS'
const ADD_ALBUM = 'albums/ADD_ALBUM'
const UPDATE_ALBUM = 'albums/UPDATE_ALBUM'
const DELETE_ALBUM = 'albums/DELETE_ALBUM'
const GET_ALBUM_SONGS = 'albums/GET_ALBUM_SONGS'

const getAllAlbums = (allAlbums) => ({
  type: GET_ALL_ALBUMS,
  payload: allAlbums
})

const getAlbumSongs = (albumSongs) => ({
  type: GET_ALBUM_SONGS,
  payload: albumSongs
})

const addAlbum = (newAlbum) => ({
  type: ADD_ALBUM,
  payload: newAlbum
})

const updateAlbum = (albumToUpdate) => ({
  type: UPDATE_ALBUM,
  payload: albumToUpdate
})

const deleteAlbum = (albumToDelete) => ({
  type: DELETE_ALBUM,
  payload: albumToDelete
})

export const getAllAlbumsThunk = () => async (dispatch) => {
  const albumResponse = await csrfFetch('/api/albums')

  if (albumResponse.ok) {
    const albums = await albumResponse.json()

    dispatch(getAllAlbums(albums))
  }
  return albumResponse
}

export const getAllAlbumSongsThunk = () => async (dispatch) => {
  const id = useParams()
  const albumSongResponse = await csrfFetch(`/api/Albums/${id}`)

  if (albumSongResponse.ok) {
    const albumSongs = await albumSongResponse.json()
    dispatch(getAlbumSongs(albumSongs))
  }
  return albumSongResponse
}

export const addAlbumThunk = (newAlbum) => async (dispatch) => {
  const addAlbumResponse = await csrfFetch('/api/albums', {
    method: "POST",
    headers: { 'Content-Type': 'application/json'}["Content-Type"],
    body: JSON.stringify(newAlbum)
  })
  if (addAlbumResponse.ok) {
    const albumPostRequest = await addAlbumResponse.json()
    dispatch(addAlbum(albumPostRequest))
    return albumPostRequest
  }
}

export const updateAlbumThunk = (updatedAlbum) => async (dispatch) => {
  const updatedAlbumResponse = await csrfFetch(`/api/albums/${+updatedAlbum.id}`, {
    method: "PUT",
    body: JSON.stringify(updatedAlbum),
  });
  if (updatedAlbumResponse.ok) {
    const updatedAlbumRequest = await updatedAlbumResponse.json();
    dispatch(updateAlbum(updatedAlbumRequest));
    return updatedAlbumRequest
  }
};

export const deleteAlbumThunk = (albumToDelete) => async (dispatch) => {
  const deleteAlbumResponse = await csrfFetch(`/api/songs/${albumToDelete}`, {
    method: 'DELETE'
  })
  if (deleteAlbumResponse.ok) {
    dispatch(deleteAlbum(albumToDelete))
  }
}

const initialState = {albums: {}}

const albumsReducer = (state = initialState, action) => {
  let newState;

  switch (action.type) {
    case GET_ALL_ALBUMS:
      newState = {...state}
      action.payload.forEach((album) => newState.albums[album.id] = album)
      return newState


    default:
      return initialState
  }
}

export default albumsReducer
