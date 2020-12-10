const Calendar = require('../javascript/Calendar');

const getStartDate = Calendar.getStartDate;
const getCalArray = Calendar.getCalArray;
const Workout = require('../javascript/Workout');


test('gets a startDate from a raceDate', () => {
    expect(getStartDate(42, '09-13-2018'))
        .toEqual(new Date(2018,6,29));
});

test('returns an array of dates for the workout plan', () => {
    expect(getStartDate(21, '09-18-2020'))
        .toEqual(new Date(2020,7,23));
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
    let outputArray = [[new Workout(1, 1, 'SWIM:',
        '600yds 4 x 50yds, 4 x 100yds', new Date(2020, 7, 30)), new Workout(2, 1, 'BIKE:',
        '45 minutes', new Date(2020, 7, 31)), new Workout(3, 1, 'RUN:',
        '15 minutes', new Date(2020, 8, 1))], [new Workout(4, 2, 'SWIM:',
        '700yds 6 x 50yds, 4 x 100yds', new Date(2020, 8, 6)), new Workout(5, 2, 'BIKE:',
        '45 minutes', new Date(2020, 8, 7)), new Workout(6, 2, 'RUN:',
        '20 minutes', new Date(2020, 8, 8)), ]];

    expect(getCalArray(startDate, inputArray)).toEqual(outputArray);
});