const Workout = require('../javascript/Workout');

let textToWorkoutSchedule = (workoutPlanText) => {
    let workoutSchedule;
    splitText = workoutPlanText.split('\n');

    let removeBlanks = (item) => {
        return item !== "" || item.match(/[^\n\r]/);
    };

    let filteredText = splitText.filter(removeBlanks);

    let weekNum = 0;
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
        } else {
            workout = new Workout(index, weekNum, title, description);
        }
        return workout;
    };

    workoutSchedule = filteredText.map(createWorkout);

    //remove additional lines from entries from week indicator
    workoutSchedule = workoutSchedule.filter(removeBlanks);

    return workoutSchedule;
};

module.exports = textToWorkoutSchedule;