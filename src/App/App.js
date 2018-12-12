import React, { Component } from 'react';
import { Button } from 'reactstrap';

import './App.scss';

class App extends Component {
  render() {
    console.log(this);
    return (
      <div className="App">
        <button className="btn btn-danger">HELP!!!</button>
        <Button
            tag="a"
            color="info"
            size="large"
            href="http://google.com"
            target="_blank"
          >Reactstrap</Button>
      </div>
    );
  }
}

export default App;
