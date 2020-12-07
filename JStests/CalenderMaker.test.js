const CalendarMaker = require('../javascript/CalendarMaker');
const tTWS = CalendarMaker.textToWorkoutSchedule;
const Workout = require('../javascript/Workout');
const Calendar = require('../javascript/Calendar');
const getCalArray = Calendar.getCalArray;

let testArray1, testArray2;

beforeEach(() => {
    testArray1 = [new Workout(1, 1, 'SWIM:',
        '600yds 4 x 50yds, 4 x 100yds'), new Workout(2, 1, 'BIKE:',
        '45 minutes'), new Workout(3, 1, 'RUN:',
        '15 minutes'), new Workout(4, 2, 'SWIM:',
        '700yds 6 x 50yds, 4 x 100yds'), new Workout(5, 2, 'BIKE:',
        '45 minutes'), new Workout(6, 2, 'RUN:',
        '20 minutes'),];

    testArray2 = [new Workout(1, 1, 'Day 1:',
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
        'Rest or 30-minute walk'),];
})

test('creates an array of workouts from an index and a string formatted title: description', () => {
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
    expect(tTWS(testString)).toEqual(testArray1);
});

test('creates a different array of workouts', () => {

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
    expect(tTWS(testString)).toEqual(testArray2);
});

const createCalDay = CalendarMaker.createCalDay;

test('createCalDay returns a div with a date Number, workout number, title, and description', () => {

    let returnedHTML =
        '<div>' +
        '<h3>#3</h3>' +
        '<h3>Day 3:</h3>' +
        '<p>Run an easy 5 miles</p>' +
        '</div>';

    let testFunction = createCalDay(3,'Day 3:', 'Run an easy 5 miles');

    expect(testFunction.outerHTML).toEqual(returnedHTML);
});

const createCalWeek = CalendarMaker.createCalWeek;

test('createWeekDay returns several divs with a date Number, workout number, title, and description', () => {
    let startDate = new Date(2020, 8, 1);
    let testArray3 = getCalArray('09-01-2020', testArray1);

    let returnedHTML = '<div class=\"day\">'+
            '<h2>Sep 1</h2>' +
        '</div>' +
        '<div class=\"day\">'+
            '<h2>2</h2>' +
        '</div>' +
        '<div class=\"day\">'+
            '<h2>3</h2>' +
            '<div>' +
            '<h3>#1</h3>' +
            '<h3>SWIM:</h3>' +
            '<p>600yds 4 x 50yds, 4 x 100yds</p>' +
            '</div>' +
        '</div>' +
        '<div class=\"day\">'+
            '<h2>4</h2>' +
            '<div>' +
            '<h3>#2</h3>' +
            '<h3>BIKE:</h3>' +
            '<p>45 minutes</p>' +
            '</div>' +
        '</div>' +
        '<div class=\"day\">'+
            '<h2>5</h2>' +
            '<div>' +
            '<h3>#4</h3>' +
            '<h3>RUN:</h3>' +
            '<p>15 minutes/p>' +
            '</div>' +
        '</div>' +
        '<div class=\"day\">'+
            '<h2>6</h2>' +
        '</div>' +
        '<div class=\"day\">'+
            '<h2>7</h2>' +
        '</div>' +
        '<div class=\"day\">'+
            '<h2>8</h2>' +
        '</div>' +
        '<div class=\"day\">'+
            '<h2>9</h2>' +
        '</div>' +
        '<div class=\"day\">'+
            '<h2>10</h2>' +
            '<div>' +
            '<h3>#4</h3>' +
            '<h3>SWIM:</h3>' +
            '<p>700yds 6 x 50yds, 4 x 100yds</p>' +
            '</div>' +
        '</div>' +
        '<div class=\"day\">'+
            '<h2>11</h2>' +
            '<div>' +
            '<h3>#5</h3>' +
            '<h3>BIKE:</h3>' +
            '<p>45 minutes</p>' +
            '</div>' +
        '</div>' +
        '<div class=\"day\">'+
            '<h2>12</h2>' +
            '<div>' +
            '<h3>#6</h3>' +
            '<h3>RUN:</h3>' +
            '<p>20 minutes</p>' +
            '</div>' +
        '</div>' +
        '<div class=\"day\">'+
            '<h2>13</h2>' +
        '</div>' +
        '<div class=\"day\">'+
            '<h2>14</h2>' +
        '</div>';




    let testFunction = createCalWeek(startDate, testArray3);


    expect(testFunction.innerHTML).toEqual(returnedHTML);
});
