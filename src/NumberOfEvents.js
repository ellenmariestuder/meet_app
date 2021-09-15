import React, { Component } from 'react';
import { ErrorAlert } from './Alert';

class NumberOfEvents extends Component {
  state = {
    numberOfEvents: 32
  }

  handleInputChanged = (event) => {
    const value = event.target.value;

    if (value < 1 || value > 32) {
      this.setState({
        numberOfEvents: "",
        infoText: "Please enter a number between 1 and 32."
      });
    }
    else {
      this.setState({
        numberOfEvents: value,
        infoText: ""
      });
      this.props.updateEvents(null, value);
    }
  }

  render() {

    return (
      <div className="NumberOfEvents">
        <p>Number of Events: </p>
        <input type="text" id="number" className="number"
          value={this.state.numberOfEvents}
          onChange={this.handleInputChanged}></input>
        <ErrorAlert text={this.state.infoText} />
      </div>
    );
  }

};

export default NumberOfEvents;