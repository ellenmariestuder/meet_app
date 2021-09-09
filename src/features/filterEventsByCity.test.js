import { loadFeature, defineFeature } from 'jest-cucumber';
import { mount, shallow } from 'enzyme';
import App from '../App';
import CitySearch from '../CitySearch';
import { mockData } from '../mock-data';
import { extractLocations } from '../api';

const feature = loadFeature('./src/features/filterEventsByCity.feature');

defineFeature(feature, test => {
  test("When user hasn't searched for a city, show upcoming events from all cities.",
    ({ given, when, then }) => {
      given("user hasn't searched for any city", () => {
      });

      let AppWrapper;
      when("user opens the app", () => {
        AppWrapper = mount(<App />);
      });

      then("user should see list of all upcoming events", () => {
        AppWrapper.update();
        expect(AppWrapper.find('.Event')).toHaveLength(mockData.length);
      });
    });

  test("User should see list of suggestions when they search for a city",
    ({ given, when, then }) => {
      let CitySearchWrapper, locations;

      given("the main page is open", () => {
        locations = extractLocations(mockData);
        CitySearchWrapper = shallow(<CitySearch updateEvents={() => { }} locations={locations} />)
      });

      when("user starts typing in the city textbox", () => {
        CitySearchWrapper.find('.city').simulate('change', { target: { value: 'Berlin' } });
      });

      then("user should receive list of suggested citiesthat match what they've typed", () => {
        expect(CitySearchWrapper.find('.suggestions li')).toHaveLength(2);
      });
    });

  test("User can select city from suggested list",
    ({ given, and, when, then }) => {
      let AppWrapper;

      given("user is typing 'Berlin' into text box", async () => {
        AppWrapper = await mount(<App />);
        AppWrapper.find('.city').simulate('change', { target: { value: 'Berlin' } });
      });

      and("list of suggested cities is showing", () => {
        AppWrapper.update();
        expect(AppWrapper.find('.suggestions li')).toHaveLength(2);
      });

      when("user selects a city (i.e., 'Berlin, Germany') from the list", () => {
        AppWrapper.find('.suggestions li').at(0).simulate('click');
      });

      then("the selected city should be changed to that city (i.e., 'Berlin, Germany')", () => {
        const CitySearchWrapper = AppWrapper.find(CitySearch);
        expect(CitySearchWrapper.state('query')).toBe('Berlin, Germany');
      });

      and("user should receive list of upcoming events in that city", () => {
        expect(AppWrapper.find('.Event')).toHaveLength(mockData.length);
      });
    });

});