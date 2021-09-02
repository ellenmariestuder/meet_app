import React from 'react';
import { shallow } from 'enzyme';
import Event from '../Event';
import { mockData } from '../mock-data';

describe('<Event /> component', () => {
  let EventWrapper;
  beforeAll(() => {
    EventWrapper = shallow(<Event event={mockData[1]} />);
  });

  test('render event summary', () => {
    expect(EventWrapper.find('.EventSummary')).toHaveLength(1);
  });

  test('render event date/time', () => {
    expect(EventWrapper.find('.EventDate')).toHaveLength(1);
  });

  test('render event location', () => {
    expect(EventWrapper.find('.EventLocation')).toHaveLength(1);
  });

  test('render showDeatils button', () => {
    expect(EventWrapper.find('.showDetails')).toHaveLength(1);
  });

  test('change state when showDeatils button is clicked', () => {
    EventWrapper.setState({ show: false });
    EventWrapper.find('.showDetails').simulate('click');
    expect(EventWrapper.state('show')).toBe(true);
  });

  test('display additional details after button click', () => {
    EventWrapper.setState({ show: true });
    expect(EventWrapper.find('.EventDescription')).toHaveLength(1);
  });

  test('change state when hideDeatils button is clicked', () => {
    EventWrapper.setState({ show: true });
    EventWrapper.find('.hideDetails').simulate('click');
    expect(EventWrapper.state('show')).toBe(false);
  });

});
