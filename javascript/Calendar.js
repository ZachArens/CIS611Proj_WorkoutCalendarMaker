const getDateDaysFrom = require('../javascript/Date');

const getStartDate = (numDays, raceDate) => {
    let startDate = getDateDaysFrom(numDays, dateFromString(raceDate));
    return startDate;
};

const getCalArray = (startDate, workoutSchArr) = {
    for (workout of workoutSchArr) {
        console.log(workout);
    };

    //some changes - test git
};

const dateFromString = (inputDate) => {
    const dateArr = inputDate.split('-');

    const m = dateArr[0];
    const d = dateArr[1];
    const y = dateArr[2];

    return new Date(y, m-1, d, 0, 0, 0, 0);
};

module.exports = getStartDate, getCalArray;
