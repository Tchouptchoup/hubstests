import React, { Component } from "react";
import { Table, Icon, Header } from "semantic-ui-react";

class MusicTab extends Component {
  render() {
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

          {/* {music.map(title => (
          <Table.Body>
            <Table.Row key={title.id}>
              <Table.Cell>{title.title}</Table.Cell>
              <Table.Cell>
                <Icon disabled name="play" />
              </Table.Cell>
              <Table.Cell>
                <Icon disabled name="trash" />
              </Table.Cell>
            </Table.Row>
          </Table.Body>
        ))} */}
        </Table>
      </div>
    );
  }
}

export default MusicTab;
