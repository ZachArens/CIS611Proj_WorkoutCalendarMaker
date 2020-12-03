const Workout = require('../javascript/Workout');
const textToWorkOutSchedule = require('../javascript/CalendarMaker');

const pasteBox = document.getElementById("pasteText");

const checkData = (e) => {
    e.preventDefault();
    if (pasteBox.value) {
        let pastedData = pasteBox.value;
        // TODO pastedData.sanitize();
        let workoutArray = textToWorkOutSchedule(pastedData);
        let workoutArrayStr;
        workoutArrayStr.concat(workoutArray.map((workout) => {
            return workout.toString() + "\n";
        }));
        pasteBox.value = workoutArrayStr;
    } // else if (uploadText) {
    //
    // }
};

const checkTextButton = document.getElementById("checkText");
checkTextButton.addEventListener("click", (event) => {alert("button pressed")});