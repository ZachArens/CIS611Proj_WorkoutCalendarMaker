const Calendar = require('../javascript/Calendar');

const getStartDate = Calendar.getStartDate;
const getCalArray = Calendar.getCalArray;
const Workout = require('../javascript/Workout');
let inputArray;
let startDate;
let outputArray;
beforeAll(() => {
    inputArray = [new Workout(1, 1, 'SWIM:',
        '600yds 4 x 50yds, 4 x 100yds'), new Workout(2, 1, 'BIKE:',
        '45 minutes'), new Workout(3, 1, 'RUN:',
        '15 minutes'), new Workout(4, 2, 'SWIM:',
        '700yds 6 x 50yds, 4 x 100yds'), new Workout(5, 2, 'BIKE:',
        '45 minutes'), new Workout(6, 2, 'RUN:',
        '20 minutes'), new Workout(7, 3, 'Day 1:',
        'Run easy for 1 mile (1.6 K)'), new Workout(8, 3, 'Day 2:',
        'Rest'), new Workout(9, 3, 'Day 3:',
        'Run easy for 1 mile (1.6 K)'), new Workout(10, 3, 'Day 4:',
        '40-45 minutes of cross-training'), new Workout(11, 3, 'Day 5:',
        'Rest'), new Workout(12, 3, 'Day 6:',
        'Run easy for 1.5 miles (2.4 K)'), new Workout(13, 3, 'Day 7:',
        'Rest or 30-minute walk'), new Workout(14, 4, 'Day 1:',
        'Run easy for 1.5 miles (2.4 K)'), new Workout(15, 4, 'Day 2:',
        'Rest'), new Workout(16, 4, 'Day 3:',
        'Run easy for 1 mile (1.6 K)'), new Workout(17, 5, 'Day 4:',
        '40-45 minutes of cross-training'), new Workout(18, 5, 'Day 5:',
        'Rest'), new Workout(19, 5, 'Day 6:',
        'Run easy for 1.5 miles (2.4 K)'), new Workout(20, 5, 'Day 7:',
        'Rest or 30-minute walk'),];
    startDate = new Date(2020, 8,1);

    outputArray = getCalArray(startDate, inputArray);
})

test('gets a startDate from a raceDate', () => {
    expect(getStartDate(42, '2018-09-13'))
        .toEqual(new Date(2018,6,29));
});

test('returns an array of dates for the workout plan', () => {
    expect(getStartDate(21, '2020-09-18'))
        .toEqual(new Date(2020,7,23));
});

test('Should create an array for each week of workouts within an array', () => {

    expect(outputArray.length).toEqual(5);

});

test('the first array created should have 3 workouts', () => {
    expect(outputArray[0].length).toEqual(3);
});

test('the second array created should have 3 workouts', () => {
    expect(outputArray[1].length).toEqual(3);
});
test('the third array created should have 7 workouts', () => {
    expect(outputArray[2].length).toEqual(7);
});
test('the fourth array created should have 3 workouts', () => {
    expect(outputArray[3].length).toEqual(3);
});
test('the fifth array created should have 3 workouts', () => {
    expect(outputArray[4].length).toEqual(4);
});


test('adds a date to an array of workouts - including jumping to next week', () => {
    let inputArray = [new Workout(1, 1, 'SWIM:',
        '600yds 4 x 50yds, 4 x 100yds'), new Workout(2, 1, 'BIKE:',
        '45 minutes'), new Workout(3, 1, 'RUN:',
        '15 minutes'), new Workout(4, 2, 'SWIM:',
        '700yds 6 x 50yds, 4 x 100yds'), new Workout(5, 2, 'BIKE:',
        '45 minutes'), new Workout(6, 2, 'RUN:',
        '20 minutes'), ];
    let startDate = new Date(2020, 7,30);
    let exampleArray = [[new Workout(1, 1, 'SWIM:',
        '600yds 4 x 50yds, 4 x 100yds', new Date(2020, 7, 30)), new Workout(2, 1, 'BIKE:',
        '45 minutes', new Date(2020, 7, 31)), new Workout(3, 1, 'RUN:',
        '15 minutes', new Date(2020, 8, 1))], [new Workout(4, 2, 'SWIM:',
        '700yds 6 x 50yds, 4 x 100yds', new Date(2020, 8, 6)), new Workout(5, 2, 'BIKE:',
        '45 minutes', new Date(2020, 8, 7)), new Workout(6, 2, 'RUN:',
        '20 minutes', new Date(2020, 8, 8)), ]];

    let outputArray = getCalArray(startDate, inputArray)

    expect(outputArray).toEqual(exampleArray);
});

