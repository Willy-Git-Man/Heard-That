import { csrfFetch } from "./csrf";

const GET_ALL_ALBUMS = "albums/GET_ALL_ALBUMS";
const ADD_ALBUM = "albums/ADD_ALBUM";
const UPDATE_ALBUM = "albums/UPDATE_ALBUM";
const DELETE_ALBUM = "albums/DELETE_ALBUM";



const getAllAlbums = (allAlbums) => ({
  type: GET_ALL_ALBUMS,
  payload: allAlbums,
});

const addAlbum = (newAlbum) => ({
  type: ADD_ALBUM,
  payload: newAlbum,
});

const updateAlbum = (albumToUpdate) => ({
  type: UPDATE_ALBUM,
  payload: albumToUpdate,
});

const deleteAlbum = (albumToDelete) => ({
  type: DELETE_ALBUM,
  payload: albumToDelete,
});

export const getAllAlbumsThunk = () => async (dispatch) => {
  const response = await csrfFetch("/api/albums");

  if (response.ok) {
    const albums = await response.json();
    dispatch(getAllAlbums(albums));
  }
  return response;
};

export const addAlbumThunk = (newAlbum) => async (dispatch) => {
  const addAlbumResponse = await csrfFetch("/api/albums", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(newAlbum),
  });
  if (addAlbumResponse.ok) {
    const albumPostRequest = await addAlbumResponse.json();
    dispatch(addAlbum(albumPostRequest));
    return albumPostRequest;
  }
};

export const updateAlbumThunk = (updatedAlbum) => async (dispatch) => {
  const updatedAlbumResponse = await csrfFetch(
    `/api/albums/${+updatedAlbum.id}`,
    {
      method: "PUT",
      body: JSON.stringify(updatedAlbum),
    }
  );
  if (updatedAlbumResponse.ok) {
    const updatedAlbumRequest = await updatedAlbumResponse.json();
    dispatch(updateAlbum(updatedAlbumRequest));
    return updatedAlbumRequest;
  }
};

export const deleteAlbumThunk = (albumToDelete) => async (dispatch) => {
  const deleteAlbumResponse = await csrfFetch(`/api/albums/${albumToDelete}`, {
    method: "DELETE",
  });
  if (deleteAlbumResponse.ok) {
    dispatch(deleteAlbum(albumToDelete));
  }
};


const initialState = { albums: {} };

const albumsReducer = (state = initialState, action) => {
  let newState;

  switch (action.type) {
    case GET_ALL_ALBUMS:
      newState = { ...state };
      action.payload.forEach((album) => (newState.albums[album.id] = album));
      return newState;

    case ADD_ALBUM:
      newState = { ...state, albums: { ...state.albums } };
      newState.albums[action.payload.createAlbum.id] = {
        ...action.payload.createAlbum,
      };
      return newState;

    case DELETE_ALBUM:
      newState = { ...state, albums: { ...state.albums } };
      delete newState.albums[action.payload];
      return newState;

    case UPDATE_ALBUM:
      newState = { ...state, albums: { ...state.albums } };
      newState.albums[action.payload.id] = { ...action.payload };
      return newState;

    default:
      return state;
  }
};

export default albumsReducer;
