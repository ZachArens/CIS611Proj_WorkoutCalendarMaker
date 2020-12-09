//TODO - investigate jest testing js as front end & importing front end JS.
//TODO = need tests for index.js
const CalendarMaker = require('./CalendarMaker.js');
const textToWorkoutSchedule = CalendarMaker.textToWorkoutSchedule;
const createCalendar = CalendarMaker.createCalendar;
const Workout = require('./Workout.js');


const pasteBox = document.getElementById("pasteText");
const viewWindow = document.getElementById('data-window');
let workoutArray = [];
const processText = (text) => {
    // TODO pastedData.sanitize();
    workoutArray = textToWorkoutSchedule(text);
    //TODO - check for correct formatting for tests to ensure that the return string is processable again
    return JSON.stringify(workoutArray);
}

const checkData = (e) => {
    e.preventDefault();
    let pastedData;
    if (pasteBox.value) {
        pastedData = pasteBox.value;
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

const submitCalOptions = (event) => {
    //TODO need to collect data and pass to functions
    //event.preventDefault();

    //run check
    processText(pasteBox.value);
    hideReplaceCalculate();

    viewWindow.appendChild(createCalendar(workoutArray));

    alert('submit button pushed');
}

const hideReplaceCalculate = (event) => {
    //TODO - need to hide and replace upon calculate
    // const resetButton = new HTMLButtonElement();
    // resetButton.
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
checkTextButton.addEventListener("click", (event) => checkData(event)); //checkData(event));

const submitButton = document.getElementById('CMsubmit');
submitButton.addEventListener("click", (event) => {
    submitCalOptions(event);
});