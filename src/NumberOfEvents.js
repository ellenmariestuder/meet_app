import React, { Component } from 'react';

class NumberOfEvents extends Component {
  state = {
    numberOfEvents: 32
  }

  handleInputChanged = (event) => {
    const value = event.target.value;
    this.setState({ numberOfEvents: value });
  }

  render() {
    const numberOfEvents = this.state.numberOfEvents;

    return (
      <div className="NumberOfEvents">
        <input type="text" className="number"
          value={numberOfEvents}
          onChange={(e) => this.handleInputChanged(e)}></input>
      </div>
    );
  }

};

export default NumberOfEvents;