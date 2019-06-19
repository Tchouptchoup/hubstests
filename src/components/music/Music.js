import React, { Component } from "react";
import MusicTab from "./MusicTab";
import PlaylistTab from "./PlaylistTab";
import { connect } from "react-redux";

class Music extends Component {
  render() {
    const {
      music: { playingTitle, playingSlug, playingArtist }
    } = this.props;
    return (
      <div>
        <figure>
          <figcaption>
            Listen to {playingTitle} - {playingArtist}:
          </figcaption>
          <audio controls autoplay src={`/songs/${playingSlug}.mp3`}>
            Your browser does not support the
            <code>audio</code> element.
          </audio>
        </figure>
        <MusicTab />
        <PlaylistTab />Ò
      </div>
    );
  }
}

const mapStateToProps = state => ({
  music: state.music
});

export default connect(mapStateToProps)(Music);
