import { PLAY_TITLE } from "../actions/music";

const initialState = {
  playingSlug: null,
  playingTitle: null,
  playingArtist: null
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case PLAY_TITLE:
      return {
        ...state,
        playingTitle: action.song.title,
        playingSlug: action.song.slug,
        playingArtist: action.song.artist
      };
    default:
      return state;
  }
};

export default reducer;
