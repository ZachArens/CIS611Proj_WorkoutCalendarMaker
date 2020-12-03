const getDateDaysFrom = require('../javascript/Date');
const Workout = require('../javascript/Workout');

const getStartDate = (numDays, raceDate) => {
    return getDateDaysFrom(numDays, dateFromString(raceDate));
};

const getCalArray = (startDate, workoutSchArr) => {
    let i;
    let sun, mon, tue, wed, thu, fri, sat;
    let currentWeek;
    let workoutCalArr = [];
    let lastWeekNum = 0;

    for (i=0; i<workoutSchArr.length; i++) {
        //if (i=0) {lastWeekNum = workoutSchArr[i].weekNum;}
        workoutSchArr[i]
        currentWeek = workoutSchArr[i].weekNum;

        if (currentWeek !== lastWeekNum) {
            //for each day if true, then booked.  if false, then available
            sun = false;
            mon = false;
            tue = false;
            wed = false;
            thu = false;
            fri = false;
            sat = false;
        }

        if (!sun) {
            workoutSchArr[i].addDate(getDateDaysFrom((currentWeek-1)*7, dateFromString(startDate)));
            sun = true;
        } else if (!mon) {
            workoutSchArr[i].addDate(getDateDaysFrom((currentWeek-1)*7+1, dateFromString(startDate)));
            mon = true;
        } else if (!tue) {
            workoutSchArr[i].addDate(getDateDaysFrom((currentWeek-1)*7+2, dateFromString(startDate)));
            tue = true;
        } else if (!wed) {
            workoutSchArr[i].addDate(getDateDaysFrom((currentWeek-1)*7+3, dateFromString(startDate)));
            wed = true;
        } else if (!thu) {
            workoutSchArr[i].addDate(getDateDaysFrom((currentWeek-1)*7+4, dateFromString(startDate)));
            thu = true;
        } else if (!fri) {
            workoutSchArr[i].addDate(getDateDaysFrom((currentWeek-1)*7+5 dateFromString(startDate)));
            fri = true;
        } else if (!sat) {
            workoutSchArr[i].addDate(getDateDaysFrom((currentWeek-1)*7+6, dateFromString(startDate)));
            sat = true;
        }
            lastWeekNum = currentWeek;
    }

    return workoutSchArr;

};

const dateFromString = (inputDate) => {
    const dateArr = inputDate.split('-');

    const m = dateArr[0];
    const d = dateArr[1];
    const y = dateArr[2];

    return new Date(y, m-1, d, 0, 0, 0, 0);
};
module.exports = getStartDate;
module.exports = getCalArray;
