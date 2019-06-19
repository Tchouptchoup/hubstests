import React, { Component } from "react";
import { Table } from "semantic-ui-react";

class Music extends Component {
  render() {
    return (
      <div>
        <figure>
          <figcaption>Listen to the T-Rex:</figcaption>
          <audio controls src="/media/examples/t-rex-roar.mp3">
            Your browser does not support the
            <code>audio</code> element.
          </audio>
        </figure>
        <Table basic="very" celled collapsing>
          <Table.Header>
            <Table.Row>
              <Table.HeaderCell>Music Title</Table.HeaderCell>
              <Table.HeaderCell>Play</Table.HeaderCell>
              <Table.HeaderCell>Add to my playlist</Table.HeaderCell>
            </Table.Row>
          </Table.Header>

          <Table.Body>
            <Table.Row>
              <Table.Cell>Titre</Table.Cell>
              <Table.Cell>Play</Table.Cell>
              <Table.Cell>Add</Table.Cell>
            </Table.Row>
          </Table.Body>
        </Table>
      </div>
    );
  }
}

export default Music;
