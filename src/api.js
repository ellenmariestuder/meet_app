// take an events array, use map to create a new array with only locations
// remove all duplicates --> 
//      create other new array using spread operator and spreading a set
//      the set will remove all dups from the array

export const extractLocations = (events) => {
  var extractLocations = events.map((event) => event.location);
  var locations = [...new Set(extractLocations)];
  return locations;
};
