//import {textToWorkoutSchedule} from './CalendarMaker';
//TODO - investigate jest testing js as front end & importing front end JS.
//TODO = need tests for index.js
//import {Workout} from 'Workout';

const pasteBox = document.getElementById("pasteText");
const viewWindow = document.getElementById('data-window');
let workoutArray = [];
const processText = (text) => {
    // TODO pastedData.sanitize();
    workoutArray = textToWorkoutSchedule(pastedData);
    let workoutArrayStr;
    //TODO - check for correct formatting for tests to ensure that the return string is processable again
    workoutArrayStr.concat(workoutArray.map((workout) => {
        return workout.toString() + "\n";
    }));
    return workoutArrayStr;
}

const checkData = (e) => {
    e.preventDefault();
    let value;
    if (pasteBox.value) {
        let pastedData = pasteBox.value;
        pasteBox.value = processText(pastedData);
    }
};

const uploadData = (e) => {
    e.preventDefault();
    let file = document.getElementById('uploadText').files[0];
    let fileReader = new FileReader();
    let textFromFile = fileReader.readAsText(file);
    processText(textFromFile);
}

const createCalDay = (dateOfMonth, workoutNum, title, description) => {
    //TODO need bootstrap formatting
    const calDay = document.createElement("div");
    const dateLabel = document.createElement("h2");
    dateLabel.innerText = dateOfMonth;
    const workoutNumLabel = document.createElement("h3");
    workoutNumLabel.innerText = workoutNum;
    const titleLabel = document.createElement("h3");
    titleLabel.innerText = title;
    const descriptionLabel = document.createElement("p");
    descriptionLabel.innerText = description;

    calDay.appendChild(dateLabel);
    calDay.appendChild(workoutNumLabel);
    calDay.appendChild(titleLabel);
    calDay.appendChild(descriptionLabel);

    return calDay;
}

const createCalWeek = (firstDate, arrayOfWorkouts) => {
    const calWeek = document.createElement("div");
    const daysOfWeek = ['sun', 'mon', 'tue', 'wed', 'thu', 'fri', 'sat'];

    //create an empty div set with div for each day of the week
    for (let day in daysOfWeek) {
        const dayDiv = document.createElement("div");
        dayDiv.setAttribute("class", day);
        dayDiv.setAttribute("class", 'day');
        calWeek.appendChild(dayDiv);
    }

    //add workout info to Div Set
    for (let workout in arrayOfWorkouts) {
        //TODO -need error checking on workout type;
        const dayDiv = calWeek.getElementsByClassName(daysOfWeek[workout.workoutDate.getDay()])[0];
        const newDay = createCalDay(workout.workoutDate.getDate(),
            workout.workoutNum, workout.title, workout.description);
        dayDiv.appendChild(newDay);
    }

    //add Date labels to empty divs
    const days = calWeek.getElementsByClassName('day');
    let i = 0;
    for (let day in days) {
        const dateNum = firstDate.getDate() + i;
        const monthsList = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul',
            'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
        if (!day.innerHTML) {
            const dateLabel = document.createElement("h2");
            if (dateNum === 1) {
                dateLabel.innerText = monthsList[firstDate.getMonth()] + " " + dateNum.toString();
            } else {
                dateLabel.innerText = dateNum.toString();
            }
            day.appendChild(dateLabel);
        }
        i++;
    }

    return calWeek;
}

const createCalendar = (workoutArray) => {
    let workoutArraysByWeek = [];
    let weekOfWorkouts = [];
    let lastWeekNum = 0;
    for (let workout in workoutArray) {
        if (workout.weekNum !== lastWeekNum) {
            if (lastWeekNum !== 0) {
                workoutArraysByWeek.push(weekOfWorkouts);
            }
            weekOfWorkouts = [];
            lastWeekNum = workout.weekNum;
        }
        weekOfWorkouts.push(workout);
    }

    let calendarDiv = document.createElement('div');
    for (let workoutWeek in workoutArraysByWeek) {

        //get date of sunday of that week
        let firstEntryDate = workoutWeek[0].workoutDate;
        let firstDateOfWeek = firstEntryDate;
        let dateDiff = firstEntryDate.getDay();
        firstDateOfWeek.setDate(firstEntryDate.getDate() - dateDiff);

        let newWeek = createCalWeek(firstDateOfWeek, workoutWeek);
        calendarDiv.appendChild(newWeek);
    }
    return calendarDiv;
}

const submitCalOptions = (event) => {
    //TODO need to collect data and pass to functions
    //event.preventDefault();

    //run check
    processText(pasteBox.value);
    hideReplaceCalculate();

    viewWindow.appendChild(createCalendar(workoutArray));

    //manual test data for createCalendar function
    let equivalentArr = [new Workout(1, 1, 'Day 1:',
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
        'Rest or 30-minute walk'), ];
    insertWindow.appendChild(createCalendar(equivalentArr));
    alert('submit button pushed');
}

const hideReplaceCalculate = (event) => {
    //TODO - need to hide and replace upon calculate
    const resetButton = new HTMLButtonElement();
    resetButton.
}

const hideReplaceReset = (event) => {
    //TODO - need to hide and replace upon reset
    //TODO = need to hook hideReplaceReset up to eventlistener
}

//event listeners

//TODO - need to fix default for .txt files selectable in file browser
const uploadButton = document.getElementById('uploadText');
uploadButton.addEventListener("change", (event) => alert('uploadText')); //uploadData(event));

const checkTextButton = document.getElementById("checkText");
checkTextButton.addEventListener("click", (event) => alert('checkDataButton')); //checkData(event));

const submitButton = document.getElementById('CMsubmit');
submitButton.addEventListener("click", (event) => {
    submitCalOptions(event);
});