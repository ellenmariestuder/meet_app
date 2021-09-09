import { loadFeature, defineFeature } from 'jest-cucumber';
import { mount, shallow } from 'enzyme';
import App from '../App';
import NumberOfEvents from '../NumberOfEvents';

const feature = loadFeature('./src/features/specifyNumberOfEvents.feature');

defineFeature(feature, test => {
  test('When user hasn’t specified a number, 32 is the default number',
    ({ given, when, then }) => {
      let AppWrapper;

      given('user is viewing a list of events', () => {
        AppWrapper = mount(<App />);
      });

      when('user does not specify a number of events to view', () => {
      });

      then('32 events are displayed for user to view', () => {
        expect(AppWrapper.state('numberOfEvents')).toBe(32);

      });

      test('User can change the number of events they want to see',
        ({ given, when, then }) => {
          given('user is viewing a list of events', () => {
            AppWrapper = mount(<App />);
          });

          let NumberOfEventsWrapper;
          when('user enters desired number of events to view into specified text box', () => {
            NumberOfEventsWrapper = shallow(<NumberOfEvents updateEvents={() => { }} />);
            const eventObject = { target: { value: 10 } };
            NumberOfEventsWrapper.find('.number').simulate('change', eventObject);
          });

          then('the number of events shown is equal to the user-specified number', () => {
            expect(NumberOfEventsWrapper.state('numberOfEvents')).toBe(10);
          });
        });
    });

});