import React from 'react';

class RandomIntegers extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      integers: [31, 23, 5, 13, 99, 13, 16, 75, 44, 56, 31]
    }
    this.fetchRandomInteger = this.fetchRandomInteger.bind(this);
    this.updateIntegers = this.updateIntegers.bind(this);
  }

  componentDidMount() {
    this.fetchRandomInteger();
  }

  updateIntegers(integer) {
    const integers = this.state.integers;
    integers.push(integer);
    this.setState({
      integers
    }, () => {console.log(this.state.integers)});
  }

  fetchRandomInteger() {
    fetch('/api/number')
      .then(response => response.text())
      .then(integer => this.updateIntegers(Number(integer)))
      .catch(err => console.log(err));
  }

  render() {
    return (
      <div>Random Integers</div>
    )
  }
}

export default RandomIntegers