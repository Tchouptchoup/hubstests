import React, { Component } from "react";
import { Table, Icon } from "semantic-ui-react";
import { connect } from "react-redux";
import music from "../../utils/music.json";
import { playTitle } from "../../actions/music";
import { addToPlaylist } from "../../actions/playlist";

class MusicTab extends Component {
  constructor(props) {
    super(props);
    this.handlePlay = this.handlePlay.bind(this);
    this.handleAdd = this.handleAdd.bind(this);
  }

  handlePlay(title) {
    const { playTitle } = this.props;
    playTitle(title);
  }

  handleAdd(title) {
    const { addToPlaylist } = this.props;
    addToPlaylist(title);
  }

  render() {
    return (
      <Table basic="very" celled collapsing>
        <Table.Header>
          <Table.Row>
            <Table.HeaderCell>Music Title</Table.HeaderCell>
            <Table.HeaderCell>Play</Table.HeaderCell>
            <Table.HeaderCell>Add to my playlist</Table.HeaderCell>
          </Table.Row>
        </Table.Header>

        {music.map(title => (
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
                onClick={() => this.handleAdd(title)}
                style={{ cursor: "pointer" }}
                textAlign="center"
              >
                <Icon link disabled name="add" />
              </Table.Cell>
            </Table.Row>
          </Table.Body>
        ))}
      </Table>
    );
  }
}

const mapDispatchToProps = {
  playTitle,
  addToPlaylist
};

export default connect(
  null,
  mapDispatchToProps
)(MusicTab);
