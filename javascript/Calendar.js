const getDateDaysFrom = require('../javascript/Date');

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
            workoutCalArr.append(workoutSchArr.addDate(getDateDaysFrom((currentWeek-1)*7+1, startDate)));
        } else if (!mon) {
            workoutCalArr.append(workoutSchArr.addDate(getDateDaysFrom((currentWeek-1)*7+2, startDate)));
        } else if (!tue) {
            workoutCalArr.append(workoutSchArr.addDate(getDateDaysFrom((currentWeek-1)*7+3, startDate)));
        } else if (!wed) {
            workoutCalArr.append(workoutSchArr.addDate(getDateDaysFrom((currentWeek-1)*7+4, startDate)));
        } else if (!thu) {
            workoutCalArr.append(workoutSchArr.addDate(getDateDaysFrom((currentWeek-1)*7+5, startDate)));
        } else if (!fri) {
            workoutCalArr.append(workoutSchArr.addDate(getDateDaysFrom((currentWeek-1)*7+6, startDate)));
        } else if (!sat) {
            workoutCalArr.append(workoutSchArr.addDate(getDateDaysFrom((currentWeek-1)*7+7, startDate)));
        }
            lastWeekNum = currentWeek;
    }

    return workoutCalArr;

};

const dateFromString = (inputDate) => {
    const dateArr = inputDate.split('-');

    const m = dateArr[0];
    const d = dateArr[1];
    const y = dateArr[2];

    return new Date(y, m-1, d, 0, 0, 0, 0);
};

module.exports = getStartDate, getCalArray;
