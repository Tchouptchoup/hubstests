import React, { Component } from "react";
import { Table, Icon, Header } from "semantic-ui-react";
import { connect } from "react-redux";

class MusicTab extends Component {
  render() {
    const {
      playlist: { playlistSongs }
    } = this.props;
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
            playlistSongs.map(song => (
              <Table.Body>
                <Table.Row key={song.id}>
                  <Table.Cell>{song.title}</Table.Cell>
                  <Table.Cell>
                    <Icon disabled name="play" />
                  </Table.Cell>
                  <Table.Cell>
                    <Icon disabled name="trash" />
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
  playlist: state.playlist
});

export default connect(mapStateToProps)(MusicTab);
