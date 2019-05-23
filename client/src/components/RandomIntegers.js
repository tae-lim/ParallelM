import React from 'react';

class RandomIntegers extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      integers: [],
      date: ''
    }
  }

  componentDidMount() {
    this.randomIntegerTimer = setInterval(() => {
      this.fetchRandomInteger();
    }, 2000);
  }

  getCurrentDate() {
    const date = new Date();
    this.setState({ date }, () => {console.log(this.state.date)});
  }

  updateIntegers(integer) {
    const integers = this.state.integers;
    integers.push(integer);
    this.setState({ integers }, () => {console.log(this.state.integers)});
  }

  fetchRandomInteger() {
    fetch('/api/number')
      .then(response => response.text())
      .then(integer => this.updateIntegers(Number(integer)))
      .then(() => this.getCurrentDate())
      .catch(err => console.log(err));
  }

  render() {
    return (
      <div>Random Integers</div>
    )
  }
}

export default RandomIntegers