import { loadFeature, defineFeature } from 'jest-cucumber';
import { mount, shallow } from 'enzyme';
import App from '../App';
import Event from '../Event';
import { mockData } from '../mock-data';
// import EventList from '../EventList';
// import { getEvents } from '../api';

const feature = loadFeature('./src/features/showHideEventDetails.feature');

defineFeature(feature, test => {
  let AppWrapper, EventWrapper;

  test('An event element is collapsed by default',
    ({ given, when, then }) => {
      given('the main page is open', () => {
        AppWrapper = mount(<App />);
      });

      when('user is viewing a list of events', () => {
        AppWrapper.update();
        expect(AppWrapper.find('.Event')).toHaveLength(mockData.length);
      });

      then('event elements are collapsed', () => {
        expect(AppWrapper.find('.EventDescription')).toHaveLength(0);
      });
    });

  test('User can expand an event to see its details',
    ({ given, when, then }) => {
      given('user is viewing a list of events', () => {
        AppWrapper.update();
        expect(AppWrapper.find('.Event')).toHaveLength(mockData.length);
      });

      when('user clicks on an event element', () => {
        EventWrapper = shallow(<Event event={mockData[1]} />);
        EventWrapper.find('.showDetails').simulate('click');
      });

      then('the element expands to show event details', () => {
        expect(EventWrapper.find('.EventDescription')).toHaveLength(1);
      });
    });

  test('User can collapse an event to hide its details',
    ({ given, when, then }) => {
      given('user is viewing expanded event element showing event details', () => {
        expect(EventWrapper.find('.EventDescription')).toHaveLength(1);
      });

      when('user clicks a button to collapse event details', () => {
        EventWrapper.find('.hideDetails').simulate('click');
      });

      then('event details are hidden and a list of events (with details hidden) is shown', () => {
        expect(EventWrapper.find('.EventDescription')).toHaveLength(0);
      });
    });
});