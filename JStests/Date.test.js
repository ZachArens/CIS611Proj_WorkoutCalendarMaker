const getDateDaysFrom = require('../javascript/Date');

test('gets a Date numDays from inputDate', () => {
    expect(getDateDaysFrom(3, new Date(2018, 8, 13)))
        .toEqual(new Date(2018,8,16));
});

test('gets a Date -numDays from inputDate', () => {
    expect(getDateDaysFrom(-20, new Date(2018, 8, 13)))
        .toEqual(new Date(2018,7,24));
});