const getDateDaysFrom = require('../javascript/MyDate');

test('gets a Date numDays from inputDate', () => {
    expect(getDateDaysFrom(3, new Date(2018, 8, 13)))
        .toEqual(new Date(2018,8,16));
});

test('gets a Date -numDays from inputDate', () => {
    expect(getDateDaysFrom(-20, new Date(2018, 8, 13)))
        .toEqual(new Date(2018,7,24));
});

test('gets a Date 0 from inputDate', () => {
    expect(getDateDaysFrom(0, new Date(2018, 8, 13)))
        .toEqual(new Date(2018,8,13));
});

test('test add into new month', () => {
    expect(getDateDaysFrom(6, new Date(2018, 8, 28)))
        .toEqual(new Date(2018,9,4));
});