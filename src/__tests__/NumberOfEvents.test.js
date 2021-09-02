import React from 'react';
import { shallow } from 'enzyme';
import NumberOfEvents from '../NumberOfEvents';
// import { mockData } from '../mock-data';

describe('<NumberOfEvents /> component', () => {
  let NumberOfEventsWrapper;
  beforeAll(() => {
    NumberOfEventsWrapper = shallow(<NumberOfEvents />);
  });

  test('render text input', () => {
    expect(NumberOfEventsWrapper.find('.number')).toHaveLength(1);
  });

  test('renders text input correctly', () => {
    const numberOfEvents = NumberOfEventsWrapper.state('numberOfEvents');
    expect(NumberOfEventsWrapper.find('.number').prop('value')).toBe(numberOfEvents);
  });

  // test('change state when text input changes', () => {
  //   NumberOfEventsWrapper.setState({ numberOfEvents: 32 });
  //   const eventObject = { target: { value: 12 } };
  //   NumberOfEventsWrapper.find('.number').simulate('change', eventObject);
  //   expect(NumberOfEventsWrapper.state('numberofevents')).toBe(12);
  // });

});