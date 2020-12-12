//TODO = need tests for index.js
"use strict";

const Workout = require('./Workout.js');
const {printWorkoutSchedule, createCalendar, textToWorkoutSchedule} = require("./CalendarMaker");
const DOMPurify = require('dompurify');

const pasteBox = document.getElementById("pasteText");

let workoutArray = [];
let textFromFile = "";
let pasteNotUpload = true;
let checkedDataPresent = false;

const processText = (text) => {
    let cleanText = DOMPurify.sanitize(text);
    //alert('processing text: ' + cleanText);
    workoutArray = textToWorkoutSchedule(cleanText);

    checkedDataPresent = true;
    return printWorkoutSchedule(workoutArray);
}

const checkData = (e) => {
    let buttonClicked = e.target;
    let pastedData;
    if (pasteBox.value && buttonClicked.getAttribute('id') === 'checkPasteText') {
        //alert('check paste Text clicked');
        pastedData = pasteBox.value;
        pasteBox.value = processText(pastedData);

    } else if (buttonClicked.getAttribute('id') === 'checkUploadText') {
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
    //TODO - run final check
    hideReplaceCalculate();

    const dateIsStart = () => {
        if (document.getElementById('start').value === 'start') {
            //alert('start');
            return true;

        } else if (document.getElementById('race').value === 'race') {
            //alert('race');
            return false;

        } else {
            throw 'Race or Start Date selection is missing'
        }
    }

    const inputDate = () => {
        if (document.getElementById('calcDate').value) {
            return document.getElementById('calcDate').value;
        } else {
            throw 'Date for start or race is missing';
        }
    }
    let calendarDiv;

    try {

        calendarDiv = createCalendar(inputDate(), dateIsStart(), workoutArray);
        //alert(calendarDiv.innerHTML);
    } catch (e) {
        //TODO - this may be security risk - create if/then if time
        alert (e);
        hideReplaceReset();
    }

    document.getElementById('calendarPlaceholder').appendChild(calendarDiv);
    document.getElementById('calculating').remove();
}

const hideReplaceCalculate = (event) => {
    //TODO - need to hide and replace upon calculate
    const calOptions = document.getElementById('calendarOptions');
    calOptions.hidden = false;
    submitButton.hidden = true;
    const outputBox = document.createElement('div');
    outputBox.setAttribute('id', 'calendarPlaceholder');

    const calTitle = document.createElement('h1');

    calTitle.innerHTML = 'Your Workout Calendar';
    outputBox.appendChild(calTitle);

    const calCulating = document.createElement('p');
    calCulating.setAttribute('id', 'calculating');
    calCulating.innerHTML = '...Calculating';
    outputBox.appendChild(calCulating);

    document.getElementsByTagName('body')[0].insertBefore(outputBox, calOptions);
    const form = document.getElementById('CalendarMakerForm');
    form.hidden = true;
}

const hideReplaceReset = (event) => {
    const calOptions = document.getElementById('calendarOptions');
    calOptions.hidden = true;
    submitButton.hidden = false;
    const calendarForm = document.getElementById('CalendarMakerForm')
    calendarForm.hidden = false;
    const calendar = document.getElementById('calendarPlaceholder');
    if (calendar) {calendar.remove()}
}

//event listeners

const checkPasteTextButton = document.getElementById("checkPasteText");
checkPasteTextButton.addEventListener("click", (event) => checkData(event)); //checkData(event));

const checkUploadTextButton = document.getElementById("checkUploadText");
checkUploadTextButton.addEventListener("click", (event) => checkData(event)); //checkData(event));

const submitButton = document.getElementById('CMsubmit');
submitButton.addEventListener("click", (event) => {
    submitCalOptions(event);
});

const resetButton = document.getElementById('reset');
resetButton.addEventListener("click", (event) => {
    hideReplaceReset(event);
});

// pasteBox.addEventListener("change", (event) => {
//     pasteNotUpload = true;
//     //alert('paste changed');
//     checkedDataPresent = false;
// });
//
// const fileURLBox = document.getElementById('uploadText');
// fileURLBox.addEventListener("change", (event) => {
//     pasteNotUpload = false;
//     checkedDataPresent = false;
//     //alert('file changed');
//     checkData(event);
// })