import { applyMiddleware } from "redux";
import { csrfFetch } from "./csrf";

const GET_ALL_ALBUMS = 'albums/GET_ALL_ALBUMS'
const ADD_ALBUM = 'albums/ADD_ALBUM'
const UPDATE_ALBUM = 'albums/UPDATE_ALBUM'
const DELETE_ALBUM = 'albums/DELETE_ALBUM'

const getAllAlbums = (allAlbums) => ({
  type: GET_ALL_ALBUMS,
  payload: allAlbums
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

export const getAllAlbumsThink = () => async (dispatch) => {
  const albumResponse = await csrfFetch('/api/albums')

  if (albumResponse.ok) {
    const albums = await albumResponse.json()

    dispatch(getAllAlbums(albums))
  }
  return albumResponse
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

export const updateAlbumThink = (updatedAlbum) => async (dispatch) => {
  const updatedAlbumResponse = await csrfFetch(`/api/songs/${+updatedAlbum.id}`, {
    method: "PUT",
    body: JSON.stringify(updatedAlbum),
  });
  if (updatedAlbumResponse.ok) {
    const updatedAlbumRequest = await updatedAlbumResponse.json();
    dispatch(updateAlbum(updatedAlbumRequest));
    return updatedAlbumRequest
  }
};

export const deleteAlbumThink = (albumToDelete) => async (dispatch) => {
  const deleteAlbumResponse = await csrfFetch(`/api/songs/${albumToDelete}`, {
    method: 'DELETE'
  })
  if (deleteAlbumResponse.ok) {
    dispatch(deleteAlbum(albumToDelete))
  }
}
