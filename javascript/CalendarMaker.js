const Workout = require('../javascript/Workout');
const getDateDaysFrom = require('../javascript/MyDate');
const {getStartDate, getCalArray} = require("./Calendar");

const textToWorkoutSchedule = (workoutPlanText) => {
    let workoutSchedule;
    let splitText = workoutPlanText.split('\n');

    let removeBlanks = (item) => {
        return item !== "" || item.match(/[^\n\r]/);
    };

    let filteredText = splitText.filter(removeBlanks);

    let weekNum = 0;
    let workoutNum = 0;
    let createWorkout = (item) => {
        let workout;
        let indexColon = item.indexOf(':') + 1;
        let title;
        let description;
        if (indexColon > 0) {
            title = item.substring(0, indexColon).trim();
            description = item.substring(indexColon, item.length).trim();
        } else {
            title = item.trim();
            description = '';
        }

        if (item.match(/week/i)) {
            weekNum ++;
            return "";
        } else if (item === " ") { //replace with regex to filter out any blank or incorrectly formatted lines
            return "";
        } else {
            workoutNum ++;
            workout = new Workout(workoutNum, weekNum, title, description);
        }
        return workout;
    };

    workoutSchedule = filteredText.map(createWorkout);

    //remove additional lines from entries from week indicator
    workoutSchedule = workoutSchedule.filter(removeBlanks);

    return workoutSchedule;
};

let printWorkoutSchedule = (workoutSchedule) => {
    let outputString = "";
    let i;
    for (i=0; i<workoutSchedule.length; i++) {
        const workout = workoutSchedule[i];
        const workoutString = `Workout ${workout.workoutNum} - 
        Week ${workout.weekNum} - ${workout.title} ${workout.description}`;
        outputString += workoutString + '\n';
    }

    return outputString;
};

const createCalDay = (workoutNum, title, description) => {
    //TODO need bootstrap formatting
    const calDay = document.createElement("div");

    if (workoutNum || title || description ) {
        const workoutNumLabel = document.createElement("h3");
        workoutNumLabel.innerHTML = `#` + workoutNum;
        const titleLabel = document.createElement("h3");
        titleLabel.innerHTML = title;
        const descriptionLabel = document.createElement("p");
        descriptionLabel.innerHTML = description;

        calDay.appendChild(workoutNumLabel);
        calDay.appendChild(titleLabel);
        calDay.appendChild(descriptionLabel);
    }

    return calDay;
}

const createCalWeek = (firstDate, arrayOfWorkouts) => {

    const calWeek = document.createElement("div");
    calWeek.setAttribute("class", 'week');
    const daysOfWeek = ['sun', 'mon', 'tue', 'wed', 'thu', 'fri', 'sat'];
    if (firstDate.getDay() !== 0) {
        throw 'firstDate of week must be a Sunday'
    }
    //     //create an empty div set with div for each day of the week
    // for (let day in daysOfWeek) {
    //     const dayDiv = document.createElement("div");
    //     dayDiv.setAttribute("class", 'day');
    //     calWeek.appendChild(dayDiv);
    // }

    // //add Date labels to divs
    // const days = calWeek.getElementsByClassName('day');

    let i;
    for (i=0; i < daysOfWeek.length; i++) {
        //create a day div and set class to day and the day of the week
        const dayDiv = document.createElement("div");
        dayDiv.setAttribute("class", 'day ' + daysOfWeek[i]);

        const activeDayDate = getDateDaysFrom(i, firstDate)
        const dateNum = activeDayDate.getDate();
        const monthsList = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul',
            'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];

        const dateLabel = document.createElement("h2");
        dateLabel.setAttribute('class', 'date');

        if (dateNum === 1) {
            dateLabel.innerHTML = monthsList[firstDate.getMonth()] + " " + dateNum.toString();
        } else {
            dateLabel.innerHTML = dateNum.toString();
        }
        dayDiv.appendChild(dateLabel);

        const wotd = arrayOfWorkouts.findIndex(workout => workout.workoutDate.getTime() === activeDayDate.getTime());
        if (wotd >= 0) {
            const newDay = createCalDay(arrayOfWorkouts[wotd].workoutNum,
                arrayOfWorkouts[wotd].title, arrayOfWorkouts[wotd].description);
            dayDiv.appendChild(newDay);
        }


        calWeek.appendChild(dayDiv);
    }



    return calWeek;
}

const createCalendar = (dateStr, dateIsStart, workoutArray) => {

    let calendarDiv = document.createElement('div');
    calendarDiv.setAttribute('id', 'calendar');
    let getMaxWeeks = (inputArray) => {
        let maxWeeksNum = 0;
        let i, j;
        for (i=0; i<inputArray.length; i++) {
            for (j=0; j<inputArray[i].length; j++) {
                if (maxWeeksNum < inputArray[i][j].weekNum) {maxWeeksNum = inputArray[i][j].weekNum}
            }
        }
        return maxWeeksNum;
    }

    let startDate;

    if (dateIsStart) {
        //getStartDate will calc days back to start and also find previous sunday
        startDate = getStartDate(0, dateStr);
    } else {
        let weeksNum = getMaxWeeks(workoutArray);
        startDate = getStartDate(weeksNum * 7, dateStr);
    }


    const calArray = getCalArray(startDate, workoutArray);
    console.log(typeof calArray)
    let newWeek;
    for (let k=0; k<calArray.length; k++) {
        //get date of sunday of that week
        // console.log('k: ', k, 'startDate: ', startDate);
        newWeek = createCalWeek(getDateDaysFrom(k*7, startDate), calArray[k]);
        // console.log(newWeek.innerHTML);
        calendarDiv.appendChild(newWeek);
        // console.log('appending week ', k);
    }
    return calendarDiv;





}

module.exports = { textToWorkoutSchedule: textToWorkoutSchedule, createCalDay: createCalDay,
    createCalWeek: createCalWeek, createCalendar: createCalendar, printWorkoutSchedule: printWorkoutSchedule};


