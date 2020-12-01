const textToWorkoutSchedule = require('../javascript/CalendarMaker');
const Workout = require('../javascript/Workout');

test('creates an array of workouts from an index and a string formatted title: description', () => {
    equivalentArr = [new Workout(1, 1, 'SWIM:',
        '600yds 4 x 50yds, 4 x 100yds'), new Workout(2, 1, 'BIKE:',
        '45 minutes'), new Workout(3, 1, 'RUN:',
        '15 minutes'), ];
    testString = '\n' +
        'WEEK 1\n' +
        '\n' +
        'SWIM: 600yds 4 x 50yds, 4 x 100yds\n' +
        '\n' +
        'BIKE: 45 minutes\n' +
        '\n' +
        'RUN: 15 minutes\n' +
        '\n' +
        ' \n';
    expect(textToWorkoutSchedule(testString)).toEqual(equivalentArr);
});