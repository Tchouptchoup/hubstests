import React, { Component } from "react";
import { Header, Button, Form } from "semantic-ui-react";
import { findThePrime } from "../../utils/helpers";

class Prime extends Component {
  constructor(props) {
    super(props);
    this.state = {
      number: "",
      prime: "",
      history: []
    };
    this.updateField = this.updateField.bind(this);
    this.sumbmitNumber = this.sumbmitNumber.bind(this);
  }

  componentDidMount() {
    const historyList = JSON.parse(localStorage.getItem("history"));
    if (historyList) {
      this.setState({ history: historyList });
    }
  }

  componentDidUpdate(prevProps, prevState) {
    const { history } = this.state;
    if (prevState.history !== history) {
      localStorage.setItem("history", JSON.stringify(history));
    }
  }

  updateField(event) {
    this.setState({ [event.target.name]: event.target.value });
  }

  sumbmitNumber() {
    const { number, history } = this.state;
    const thePrime = findThePrime(number);
    this.setState({ prime: thePrime });
    this.setState({ history: [...history, number] });
  }

  render() {
    const { number, prime, history } = this.state;
    return (
      <div>
        <Header as="h2" className="title">
          Find the prime number
        </Header>
        <Form onSubmit={this.sumbmitNumber}>
          <Form.Field width={4}>
            <input
              placeholder="Number"
              name="number"
              control="input"
              type="number"
              value={number}
              onChange={this.updateField}
            />
          </Form.Field>
          <Button type="submit">Submit</Button>
        </Form>
        {prime}
        <Header as="h2" className="title">
          Search history
        </Header>
        {history.length > 0 ? history.join(", ") : ""}
      </div>
    );
  }
}

export default Prime;
