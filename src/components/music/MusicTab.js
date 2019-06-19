import React, { Component } from "react";
import { Table, Icon } from "semantic-ui-react";
import music from "../../utils/music.json";
import { connect } from "react-redux";
import { playTitle } from "../../actions/music";

class MusicTab extends Component {
  constructor(props) {
    super(props);
    this.handlePlay = this.handlePlay.bind(this);
  }

  handlePlay(title) {
    const { playTitle } = this.props;
    playTitle(title);
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
          <Table.Body>
            <Table.Row key={title.id}>
              <Table.Cell>{title.title}</Table.Cell>
              <Table.Cell onClick={() => this.handlePlay(title)}>
                <Icon disabled name="play" />
              </Table.Cell>
              <Table.Cell>
                <Icon disabled name="add" />
              </Table.Cell>
            </Table.Row>
          </Table.Body>
        ))}
      </Table>
    );
  }
}

const mapDispatchToProps = {
  playTitle
};

export default connect(
  null,
  mapDispatchToProps
)(MusicTab);
