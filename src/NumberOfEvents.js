import React, { Component } from 'react';

class NumberOfEvents extends Component {
  state = {
    numberOfEvents: 32
  }

  handleInputChanged = (event) => {
    const value = event.target.value;
    this.setState({ numberOfEvents: value });
    // this.props.updateEvents(null, value);
  }

  render() {

    return (
      <div className="NumberOfEvents">
        <p>Number of Events: </p>
        <input type="text" id="number" className="number"
          value={this.state.numberOfEvents}
          onChange={this.handleInputChanged}></input>
      </div>
    );
  }

};

export default NumberOfEvents;