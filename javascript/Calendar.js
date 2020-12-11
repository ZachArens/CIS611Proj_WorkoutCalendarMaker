const getDateDaysFrom = require('./MyDate');
const Workout = require('../javascript/Workout');

const dateFromString = (inputDate) => {

    const dateArr = inputDate.split('-');

    const m = dateArr[0];
    const d = dateArr[1];
    const y = dateArr[2];

    return new Date(y, m-1, d, 0, 0, 0, 0);
};

const getStartDate = (numDaysOfWorkoutSchedule, raceDate) => {
    let startDate = getDateDaysFrom(-numDaysOfWorkoutSchedule, dateFromString(raceDate));

    while (startDate.getDay() !== 0) {
        startDate = getDateDaysFrom(-1, startDate);
    }
    return startDate;
};

const getCalArray = (startDate, workoutSchArr) => {
    let i;
    let daysAvailable;
    let currentWeek;
    let lastWeekNum = 0;
    let calendarArray = [];
    let calWeekArray = [];

    //let startDate = getStartDate(0, startDateStr);

    for (i=0; i<workoutSchArr.length; i++) {

        currentWeek = workoutSchArr[i].weekNum;

        if (currentWeek !== lastWeekNum) {
            //for each day if true, then available.  if false, then booked
            daysAvailable = [true, true, true, true, true, true, true];
            if (lastWeekNum > 0) {
                calendarArray.push(calWeekArray) ;
                calWeekArray = [];
            }
        }
        let newDate;
        //find first available day and set date based on day and weeknum
        if (daysAvailable[0]) {
            newDate = getDateDaysFrom((currentWeek-1)*7, startDate)
            daysAvailable[0] = false;
        } else if (daysAvailable[1]) {
            newDate = getDateDaysFrom((currentWeek-1)*7+1, startDate)
            daysAvailable[1] = false;
        } else if (daysAvailable[2]) {
            newDate = getDateDaysFrom((currentWeek-1)*7+2, startDate)
            daysAvailable[2] = false;
        } else if (daysAvailable[3]) {
            newDate = getDateDaysFrom((currentWeek-1)*7+3, startDate)
            daysAvailable[3] = false;
        } else if (daysAvailable[4]) {
            newDate = getDateDaysFrom((currentWeek-1)*7+4, startDate)
            daysAvailable[4] = false;
        } else if (daysAvailable[5]) {
            newDate = getDateDaysFrom((currentWeek-1)*7+5, startDate)
            daysAvailable[5] = false;
        } else if (daysAvailable[6]) {
            newDate = getDateDaysFrom((currentWeek-1)*7+6, startDate)
            daysAvailable[6] = false;
        }

        let newWorkout = Object.assign(Object.create(Object.getPrototypeOf(workoutSchArr[i])), workoutSchArr[i]);
        newWorkout.workoutDate = newDate;

        calWeekArray.push(newWorkout);
        lastWeekNum = currentWeek;
    }
    calendarArray.push(calWeekArray);

    return calendarArray;

};


module.exports = {getStartDate: getStartDate, getCalArray: getCalArray};