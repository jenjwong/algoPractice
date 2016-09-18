'use strict';

const findMovieMatch = (flightTime, movies) => {
  const timeParser = {};
  let isMatch = false;
  movies.forEach(movieTime => {
    if (timeParser[movieTime]) {
      isMatch = true;
    }
    const matchingTime = flightTime - movieTime;
    timeParser[matchingTime] = true;
  });
  return isMatch;
};

module.exports = findMovieMatch;
