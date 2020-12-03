const getStartDate = require('../javascript/Calendar');
const getCalArray = require('../javascript/Calendar');
const Workout = require('../javascript/Workout');


test('gets a startDate from a raceDate', () => {
    expect(getStartDate(3, '09-13-2018'))
        .toEqual(new Date(2018,8,16));
});

test('returns an array of dates for the workout plan', () => {
    expect(getStartDate(3, '09-13-2018'))
        .toEqual(new Date(2018,8,16));
});

test('adds a date to an array of workouts - including jumping to next week', () => {
    let inputArray = [new Workout(1, 1, 'SWIM:',
        '600yds 4 x 50yds, 4 x 100yds'), new Workout(2, 1, 'BIKE:',
        '45 minutes'), new Workout(3, 1, 'RUN:',
        '15 minutes'), new Workout(4, 2, 'SWIM:',
        '700yds 6 x 50yds, 4 x 100yds'), new Workout(5, 2, 'BIKE:',
        '45 minutes'), new Workout(6, 2, 'RUN:',
        '20 minutes'), ];
    let startDate = '09-01-2020';
    let outputArray = [new Workout(1, 1, 'SWIM:',
        '600yds 4 x 50yds, 4 x 100yds', new Date(2020, 9, 2)), new Workout(2, 1, 'BIKE:',
        '45 minutes', new Date(2020, 9, 3)), new Workout(3, 1, 'RUN:',
        '15 minutes', new Date(2020, 9, 8)), new Workout(4, 2, 'SWIM:',
        '700yds 6 x 50yds, 4 x 100yds', new Date(2020, 9, 9)), new Workout(5, 2, 'BIKE:',
        '45 minutes'), new Workout(6, 2, 'RUN:',
        '20 minutes', new Date(2020, 9, 10)), ];


    expect(getCalArray(startDate, inputArray)).toEqual(outputArray);
});