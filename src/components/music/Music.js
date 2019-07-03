import React, { Component } from "react";
import { Container, Grid } from "semantic-ui-react";
import { connect } from "react-redux";
import MusicTab from "./MusicTab";
import PlaylistTab from "./PlaylistTab";

class Music extends Component {
  render() {
    const {
      music: { playingTitle, playingSlug, playingArtist }
    } = this.props;
    return (
      <Container>
        <Grid columns={1}>
          <Grid.Row>
            <Grid.Column>
              <figure>
                <figcaption>
                  Listen to {playingTitle} - {playingArtist}:
                </figcaption>
                <audio controls autoPlay src={`/songs/${playingSlug}.mp3`}>
                  Your browser does not support the
                  <code>audio</code> element.
                </audio>
              </figure>
              <MusicTab />
              <PlaylistTab />
            </Grid.Column>
          </Grid.Row>
        </Grid>
      </Container>
    );
  }
}

const mapStateToProps = state => ({
  music: state.music
});

export default connect(mapStateToProps)(Music);
