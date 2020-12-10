//TODO = need tests for index.js
"use strict";

const Workout = require('./Workout.js');
const {printWorkoutSchedule, createCalendar, textToWorkoutSchedule} = require("./CalendarMaker");


const pasteBox = document.getElementById("pasteText");
const viewWindow = document.getElementById('data-window');
let workoutArray = [];
let textFromFile = "";

const processText = (text) => {
    // TODO text.sanitize();
    //alert('processing text: ' + text);
    workoutArray = textToWorkoutSchedule(text);
    return printWorkoutSchedule(workoutArray);
}

const checkData = (e) => {
    let buttonClicked = e.target;
    let pastedData;
    if (pasteBox.value && buttonClicked.id ==='checkPasteText') {
        //alert('check paste Text clicked');
        pastedData = pasteBox.value;

        pasteBox.value = processText(pastedData);
    } else if (buttonClicked.id === 'checkUploadText') {
        let file = document.getElementById('uploadText').files[0];

        if (file.type === "text/plain" ) {
            let fr = new FileReader();
            fr.onload = function() {
                textFromFile = fr.result;
                pasteBox.value = processText(textFromFile);
            }
            fr.readAsText(file);
        } else {
            alert('upload files must be of the type .txt');
        }

    } else {
        alert('Please paste your workout schedule or select a file for upload.')
    }
};

const submitCalOptions = (event) => {
    //TODO need to collect data and pass to functions
    //event.preventDefault();

    //run check
    processText(pasteBox.value);
    hideReplaceCalculate();

    viewWindow.appendChild(createCalendar(workoutArray));

    alert('submit button pushed2');
}

const hideReplaceCalculate = (event) => {
    //TODO - need to hide and replace upon calculate
    const calOptions = document.getElementById('calendarOptions');
    calOptions.hidden = false;
    submitButton.hidden = true;
    const outputBox = document.createElement('div');
    outputBox.innerHTML = '<p>Here is where the calendar will be</p>';
    document.getElementsByTagName('body')[0].insertBefore(outputBox, calOptions);
    const form = document.getElementById('CalendarMakerForm')
    form.hidden = true;
}

const hideReplaceReset = (event) => {
    //TODO - need to hide and replace upon reset
    //TODO = need to hook hideReplaceReset up to eventlistener
}

//event listeners

const checkPasteTextButton = document.getElementById("checkPasteText");
checkPasteTextButton.addEventListener("click", (event) => checkData(event)); //checkData(event));

const checkUploadTextButton = document.getElementById("checkUploadText");
checkUploadTextButton.addEventListener("click", (event) => checkData(event)); //checkData(event));

const submitButton = document.getElementById('CMsubmit');
submitButton.addEventListener("click", (event) => {
    //submitCalOptions(event);
    hideReplaceCalculate()
});