import React from 'react';
import RandomIntegersChart from './RandomIntegersChart';

class RandomIntegers extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      integer: '',
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
    this.setState({ integer }, () => {console.log(this.state.integer)});
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
      <div>
        <h2>Random Integers</h2>
        <RandomIntegersChart />
      </div>
      
    )
  }
}

export default RandomIntegers;