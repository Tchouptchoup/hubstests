import React, { Component } from "react";
import { Header, Button, Form } from "semantic-ui-react";

function isPrime(x) {
  for (let j = 2; j < x; j += 1) {
    if (x % j === 0) {
      return false;
    }
  }
  return true;
}

function findThePrime(number) {
  let primeTab = [];
  for (let i = 2; primeTab.length < parseInt(number); i += 1) {
    if (isPrime(i)) {
      primeTab.push(i);
    }
  }
  return primeTab[parseInt(number) - 1];
}

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

  updateField(event) {
    this.setState({ [event.target.name]: event.target.value });
  }

  sumbmitNumber() {
    const { number, history } = this.state;
    const thePrime = findThePrime(number);
    this.setState({ prime: thePrime });
    const historyList = JSON.parse(localStorage.getItem("history"));
    if (!historyList) {
      this.setState({ history: history.push(number) });
      localStorage.setItem("history", JSON.stringify(history));
    } else {
      this.setState({ history: [...this.state.history, number] });
      localStorage.setItem("history", JSON.stringify(history));
    }
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
