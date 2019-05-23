import React, { Component } from 'react';

import RandomIntegers from './RandomIntegers';

class App extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div>
        <RandomIntegers />
      </div>
    )
  }
}

export default App;