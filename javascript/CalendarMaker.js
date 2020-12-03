const Workout = require('../javascript/Workout');

let textToWorkoutSchedule = (workoutPlanText) => {
    let workoutSchedule;
    let splitText = workoutPlanText.split('\n');

    let removeBlanks = (item) => {
        return item !== "" || item.match(/[^\n\r]/);
    };

    let filteredText = splitText.filter(removeBlanks);

    let weekNum = 0;
    let workoutNum = 0;
    let createWorkout = (item, index) => {
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

module.exports = textToWorkoutSchedule;