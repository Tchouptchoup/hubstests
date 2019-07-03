export const ADD_TO_PLAYLIST = "ADD_TO_PLAYLIST";
export const REMOVE_TO_PLAYLIST = "REMOVE_TO_PLAYLIST";
export const UPDATE_PLAYLIST = "UPDATE_PLAYLIST";

export const addToPlaylist = song => ({
  type: ADD_TO_PLAYLIST,
  song
});

export const removeToPlaylist = song => ({
  type: REMOVE_TO_PLAYLIST,
  song
});

export const updatePlaylist = playlist => ({
  type: UPDATE_PLAYLIST,
  playlist
});
