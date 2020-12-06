//const textToWorkoutSchedule = require('../javascript/CalendarMaker');
import {textToWorkoutSchedule} from '../javascript/CalendarMaker';

const Workout = require('../javascript/Workout');

test('creates an array of workouts from an index and a string formatted title: description', () => {
    let equivalentArr = [new Workout(1, 1, 'SWIM:',
        '600yds 4 x 50yds, 4 x 100yds'), new Workout(2, 1, 'BIKE:',
        '45 minutes'), new Workout(3, 1, 'RUN:',
        '15 minutes'), new Workout(4, 2, 'SWIM:',
        '700yds 6 x 50yds, 4 x 100yds'), new Workout(5, 2, 'BIKE:',
        '45 minutes'), new Workout(6, 2, 'RUN:',
        '20 minutes'), ];
    let testString = '\n' +
        'WEEK 1\n' +
        '\n' +
        'SWIM: 600yds 4 x 50yds, 4 x 100yds\n' +
        '\n' +
        'BIKE: 45 minutes\n' +
        '\n' +
        'RUN: 15 minutes\n' +
        '\n' +
        ' \n' +
        '\n' +
        'WEEK 2\n' +
        '\n' +
        'SWIM: 700yds 6 x 50yds, 4 x 100yds\n' +
        '\n' +
        'BIKE: 45 minutes\n' +
        '\n' +
        'RUN: 20 minutes\n' +
        '\n' +
        ' \n'  ;
    expect(textToWorkoutSchedule(testString)).toEqual(equivalentArr);
});

test('creates a different array of workouts', () => {
    let equivalentArr = [new Workout(1, 1, 'Day 1:',
        'Run easy for 1 mile (1.6 K)'), new Workout(2, 1, 'Day 2:',
        'Rest'), new Workout(3, 1, 'Day 3:',
        'Run easy for 1 mile (1.6 K)'), new Workout(4, 1, 'Day 4:',
        '40-45 minutes of cross-training'), new Workout(5, 1, 'Day 5:',
        'Rest'), new Workout(6, 1, 'Day 6:',
        'Run easy for 1.5 miles (2.4 K)'), new Workout(7, 1, 'Day 7:',
        'Rest or 30-minute walk'), new Workout(8, 2, 'Day 1:',
        'Run easy for 1.5 miles (2.4 K)'), new Workout(9, 2, 'Day 2:',
        'Rest'), new Workout(10, 2, 'Day 3:',
        'Run easy for 1 mile (1.6 K)'), new Workout(11, 2, 'Day 4:',
        '40-45 minutes of cross-training'), new Workout(12, 2, 'Day 5:',
        'Rest'), new Workout(13, 2, 'Day 6:',
        'Run easy for 1.5 miles (2.4 K)'), new Workout(14, 2, 'Day 7:',
        'Rest or 30-minute walk'), ];
    let testString = 'Week 1\n' +
        'Day 1: Run easy for 1 mile (1.6 K)\n' +
        'Day 2: Rest\n' +
        'Day 3: Run easy for 1 mile (1.6 K)\n' +
        'Day 4: 40-45 minutes of cross-training\n' +
        'Day 5: Rest\n' +
        'Day 6: Run easy for 1.5 miles (2.4 K)\n' +
        'Day 7: Rest or 30-minute walk\n' +
        '\n' +
        '\n' +
        'Week 2\n' +
        'Day 1: Run easy for 1.5 miles (2.4 K)\n' +
        'Day 2: Rest\n' +
        'Day 3: Run easy for 1 mile (1.6 K)\n' +
        'Day 4: 40-45 minutes of cross-training\n' +
        'Day 5: Rest\n' +
        'Day 6: Run easy for 1.5 miles (2.4 K)\n' +
        'Day 7: Rest or 30-minute walk\n' +
        '\n' +
        '\n' ;
    expect(textToWorkoutSchedule(testString)).toEqual(equivalentArr);
});