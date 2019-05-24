import React from 'react';
import regeneratorRuntime from "regenerator-runtime";
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
    this.updateIntegerAndDate()
      .then(() => {this.updateIntegerAndDateEveryTwoSeconds()})
  }

  async updateIntegerAndDate() {
    try {
      const integer = await this.fetchRandomInteger();
      this.updateInteger(Number(integer))
      this.updateDate();
    } catch (err) {
      console.log(err);
    }
  }

  updateIntegerAndDateEveryTwoSeconds() {
    this.randomIntegerTimer = setInterval(() => {
      this.updateIntegerAndDate();
    }, 2000);
  }

  async fetchRandomInteger() {
    try {
      const response = await fetch('/api/number')
      const integer = await response.text();
      return integer;
    } catch (err) {
      console.log(err);
    }
  }

  updateInteger(integer) {
    this.setState({ integer });
  }

  updateDate() {
    const date = new Date();
    this.setState({ date });
  }

  componentWillUnmount() {
    clearInterval(this.randomIntegerTimer);
  }

  render() {
    const { date, integer } = this.state;
    return (
      <div>
        <RandomIntegersChart 
           integer={integer} 
           date={date}
        />
      </div>
    )
  }
}

export default RandomIntegers;