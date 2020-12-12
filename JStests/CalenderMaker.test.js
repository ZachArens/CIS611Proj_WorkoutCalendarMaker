const {textToWorkoutSchedule, printWorkoutSchedule,
    createCalDay, createCalWeek, createCalendar} = require('../javascript/CalendarMaker');
const tTWS = textToWorkoutSchedule;
const Workout = require('../javascript/Workout');
const Calendar = require('../javascript/Calendar');
const getCalArray = Calendar.getCalArray;


let testArray1, testArray2, testArray4;
let returnedHTML, returnedHTML2;

beforeAll(() => {
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

    testArray4 = [[new Workout(1, 1, 'SWIM:',
        '600yds 4 x 50yds, 4 x 100yds', new Date(2020,7, 30)), new Workout(2, 1, 'BIKE:',
        '45 minutes', new Date(2020,7, 31)), new Workout(3, 1, 'RUN:',
        '15 minutes', new Date(2020,8, 1)),], [new Workout(4, 2, 'SWIM:',
        '700yds 6 x 50yds, 4 x 100yds',new Date(2020,8, 6)), new Workout(5, 2, 'BIKE:',
        '45 minutes', new Date(2020,8, 7)), new Workout(6, 2, 'RUN:',
        '20 minutes', new Date(2020,8, 8)),]];

    returnedHTML = '<th class=\"day sun\">'+
        '<h2 class=\"date\">30</h2>' +
        '<div>' +
        '<h3>#1</h3>' +
        '<h3>SWIM:</h3>' +
        '<p>600yds 4 x 50yds, 4 x 100yds</p>' +
        '</div>' +
        '</th>' +
        '<th class=\"day mon\">'+
        '<h2 class=\"date\">31</h2>' +
        '<div>' +
        '<h3>#2</h3>' +
        '<h3>BIKE:</h3>' +
        '<p>45 minutes</p>' +
        '</div>' +
        '</th>' +
        '<th class=\"day tue\">'+
        '<h2 class=\"date\">Aug 1</h2>' +
        '<div>' +
        '<h3>#3</h3>' +
        '<h3>RUN:</h3>' +
        '<p>15 minutes</p>' +
        '</div>' +
        '</th>' +
        '<th class=\"day wed\">'+
        '<h2 class=\"date\">2</h2>' +
        '</th>' +
        '<th class=\"day thu\">'+
        '<h2 class=\"date\">3</h2>' +
        '</th>' +
        '<th class=\"day fri\">'+
        '<h2 class=\"date\">4</h2>' +
        '</th>' +
        '<th class=\"day sat\">'+
        '<h2 class=\"date\">5</h2>' +
        '</th>';

    returnedHTML2 = '<th class=\"day sun\">'+
        '<h2 class=\"date\">Aug 30</h2>' +
        '<div>' +
        '<h3>#1</h3>' +
        '<h3>SWIM:</h3>' +
        '<p>600yds 4 x 50yds, 4 x 100yds</p>' +
        '</div>' +
        '</th>' +
        '<th class=\"day mon\">'+
        '<h2 class=\"date\">31</h2>' +
        '<div>' +
        '<h3>#2</h3>' +
        '<h3>BIKE:</h3>' +
        '<p>45 minutes</p>' +
        '</div>' +
        '</th>' +
        '<th class=\"day tue\">'+
        '<h2 class=\"date\">Aug 1</h2>' +
        '<div>' +
        '<h3>#3</h3>' +
        '<h3>RUN:</h3>' +
        '<p>15 minutes</p>' +
        '</div>' +
        '</th>' +
        '<th class=\"day wed\">'+
        '<h2 class=\"date\">2</h2>' +
        '</th>' +
        '<th class=\"day thu\">'+
        '<h2 class=\"date\">3</h2>' +
        '</th>' +
        '<th class=\"day fri\">'+
        '<h2 class=\"date\">4</h2>' +
        '</th>' +
        '<th class=\"day sat\">'+
        '<h2 class=\"date\">5</h2>' +
        '</th>';
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

test('textToWorkoutArray creates a different array of workouts', () => {

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

const pWS = printWorkoutSchedule;

test('output string of printWorkoutSchedule should be formatted correctly', () => {
    console.log(pWS(testArray1));
});


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

test('createCalWeek returns several divs with a date Number, workout number, title, and description', () => {
    let startDate = new Date(2020, 7, 30);
    let testArray3 = getCalArray(startDate, testArray1);
    let finalHTML = createCalWeek(startDate, testArray3[0]);

    expect(finalHTML.getElementsByClassName('day').length).toEqual(7);
    expect(finalHTML.getElementsByClassName('date').length).toEqual(7);
    expect(finalHTML.innerHTML).toEqual(returnedHTML);
    expect(finalHTML.getElementsByTagName('p').length).toEqual(3);


});


test('createCalendar return should be a div with id="calendar"' , () => {
    let startDateStr = '2020-08-30';

    let finalHTML = createCalendar(startDateStr, true, testArray1);
    let calendarDivExample = document.createElement('div');
    calendarDivExample.setAttribute('id', 'calendar');

    expect(finalHTML.getAttribute('id')).toEqual('calendar');
});

test('createCalendars return should have 2 child divs with class="week"' , () => {
    let startDateStr = '2020-08-30';

    let finalHTML = createCalendar(startDateStr, true, testArray1);
    //console.log(finalHTML.innerHTML);
    expect(finalHTML.getElementsByClassName('week').length).toEqual(2);
});


test('createCalendars return 1st element with class week should have innerHTML that matches returnedHTML' , () => {
    let startDateStr = '2020-08-30';

    let finalHTML = createCalendar(startDateStr, true, testArray1);
    //console.log(finalHTML.innerHTML);
    expect(finalHTML.getElementsByClassName('week')[0].innerHTML).toEqual(returnedHTML2);
});

test('createCalendar returns 14 day elements' , () => {
    let startDateStr = '2020-08-30'

    let finalHTML = createCalendar(startDateStr, true, testArray1);
    //console.log(finalHTML.innerHTML);
    expect(finalHTML.getElementsByClassName('day').length).toEqual(14);
});

test('createCalendar return should be a div with id="calendar" when race date' , () => {
    let startDateStr = '2020-08-30';

    let finalHTML = createCalendar(startDateStr, false, testArray1);
    let calendarDivExample = document.createElement('div');
    calendarDivExample.setAttribute('id', 'calendar');

    expect(finalHTML.getAttribute('id')).toEqual('calendar');
});

test('createCalendars return should have 2 child divs with class="week" when race date' , () => {
    let startDateStr = '2020-08-30';

    let finalHTML = createCalendar(startDateStr, false, testArray1);
    //console.log(finalHTML.innerHTML);
    expect(finalHTML.getElementsByClassName('week').length).toEqual(2);
});

test('createCalendar returns 14 day elements when race date' , () => {
    let startDateStr = '2020-08-30'

    let finalHTML = createCalendar(startDateStr, false, testArray1);
    //console.log(finalHTML.innerHTML);
    expect(finalHTML.getElementsByClassName('day').length).toEqual(14);
});

test('createCalendars return should have 2 child divs with class="week" when race date' , () => {
    let startDateStr = '2020-08-30';

    let finalHTML = createCalendar(startDateStr, false, testArray1);
    //console.log(finalHTML.innerHTML);
    expect(finalHTML.getElementsByClassName('week').length).toEqual(2);
});