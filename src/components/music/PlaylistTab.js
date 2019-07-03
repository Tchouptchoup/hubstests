import React, { Component } from "react";
import { Table, Icon, Header } from "semantic-ui-react";
import { connect } from "react-redux";
import { playTitle } from "../../actions/music";
import { removeToPlaylist, updatePlaylist } from "../../actions/playlist";

class MusicTab extends Component {
  constructor(props) {
    super(props);
    this.handlePlay = this.handlePlay.bind(this);
    this.handleRemove = this.handleRemove.bind(this);
  }

  componentDidMount() {
    const { updatePlaylist } = this.props;
    const playlist = JSON.parse(localStorage.getItem("playlist"));
    if (playlist) {
      updatePlaylist(playlist);
    }
  }

  componentDidUpdate(prevProps) {
    const { playlistSongs } = this.props;
    if (prevProps.playlistSongs !== playlistSongs) {
      localStorage.setItem("playlist", JSON.stringify(playlistSongs));
    }
  }

  handlePlay(title) {
    const { playTitle } = this.props;
    playTitle(title);
  }

  handleRemove(title) {
    const { removeToPlaylist } = this.props;
    removeToPlaylist(title);
  }

  render() {
    const { playlistSongs } = this.props;
    return (
      <div>
        <Header as="h3" className="title">
          My playlist
        </Header>
        <Table basic="very" celled collapsing>
          <Table.Header>
            <Table.Row>
              <Table.HeaderCell>Music Title</Table.HeaderCell>
              <Table.HeaderCell>Play</Table.HeaderCell>
              <Table.HeaderCell>Remove to my playlist</Table.HeaderCell>
            </Table.Row>
          </Table.Header>

          {playlistSongs &&
            playlistSongs.map(title => (
              <Table.Body key={title.id}>
                <Table.Row>
                  <Table.Cell>{title.title}</Table.Cell>
                  <Table.Cell
                    onClick={() => this.handlePlay(title)}
                    textAlign="center"
                  >
                    <Icon link disabled name="play" />
                  </Table.Cell>
                  <Table.Cell
                    onClick={() => this.handleRemove(title)}
                    textAlign="center"
                  >
                    <Icon link disabled name="trash" />
                  </Table.Cell>
                </Table.Row>
              </Table.Body>
            ))}
        </Table>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  playlistSongs: state.playlist.playlistSongs
});

const mapDispatchToProps = {
  playTitle,
  removeToPlaylist,
  updatePlaylist
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(MusicTab);
