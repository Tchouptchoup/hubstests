import {
  ADD_TO_PLAYLIST,
  REMOVE_TO_PLAYLIST,
  UPDATE_PLAYLIST
} from "../actions/playlist";

const initialState = {
  playlistSongs: []
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_TO_PLAYLIST: {
      if (state.playlistSongs.includes(action.song)) {
        return state;
      }
      return {
        ...state,
        playlistSongs: [...state.playlistSongs, action.song]
      };
    }
    case REMOVE_TO_PLAYLIST: {
      const playlistSongs = state.playlistSongs.filter(
        song => song.slug !== action.song.slug
      );
      return {
        ...state,
        playlistSongs
      };
    }
    case UPDATE_PLAYLIST:
      return { ...state, playlistSongs: action.playlist };
    default:
      return state;
  }
};

export default reducer;
