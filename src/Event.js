import React, { Component } from 'react';

class Event extends Component {
  state = {
    show: false,
  };

  handleClick = () => {
    this.setState((prevState) => ({ show: !prevState.show }));
  };

  render() {
    let event = this.props.event;

    return (
      <div className="Event">
        <div className="EventSummary">{event.summary}</div>
        <div className="EventDate">{event.start.dateTime}</div>
        <div className="EventLocation">{event.location}</div>
        {this.state.show === false && (
          <button className="showDetails" onClick={() => this.handleClick()}>
            Show Details</button>
        )}
        {this.state.show === true && (
          <div className="EventDescription">{event.description}</div>
        )}
        {this.state.show === true && (
          <button className="hideDetails" onClick={() => this.handleClick()}>
            Hide Details</button>
        )}
      </div>
    );
  }
}

export default Event;