import { ADD_TO_PLAYLIST } from "../actions/playlist";

const initialState = {
  playlistSongs: []
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_TO_PLAYLIST:
      return {
        ...state,
        playlistSongs: [...state.playlistSongs, action.song]
      };
    default:
      return state;
  }
};

export default reducer;
