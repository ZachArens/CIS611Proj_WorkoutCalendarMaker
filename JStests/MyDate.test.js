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
    expect(getDateDaysFrom(2, new Date(2020, 7, 30)))
        .toEqual(new Date(2020,8,1));
});

test('gDDF should return a new Date instance and not alter the date passed', () => {
    let date1 = new Date(2020, 7, 30)
    let date2 = getDateDaysFrom(2, date1);
    let date3 = getDateDaysFrom(-2, date2);

    expect(date1).toEqual(date3);
    expect(date1).not.toBe(date3);
})