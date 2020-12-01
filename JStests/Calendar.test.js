const getStartDate = require('../javascript/Calendar');
const getCalArray = require('../javascript/Calendar');

test('gets a startDate from a raceDate', () => {
    expect(getStartDate(3, '09-13-2018'))
        .toEqual(new Date(2018,8,16));
});

test('returns an array of dates for the workout plan', () => {
    expect(getStartDate(3, '09-13-2018'))
        .toEqual(new Date(2018,8,16));
});