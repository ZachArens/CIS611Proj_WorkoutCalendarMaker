let Workout = class {
    constructor(workoutNumber, weekNum = Math.ceil(workoutNumber/7),
                title = 'Rest Day', description = '') {
        this.workoutNum = workoutNumber;
        this.weekNum = weekNum;
        this.title = title;
        this.description = description;
        this.workoutDate = null;
    }

    addDate(inputDate) {
        this.workoutDate = inputDate;
    }

    toString() {
        return `Workout Num: ${this.workoutNum}, Week Num: ${this.weekNum}, 
        title: ${this.title}, description: ${this.description}, Workout Date: ${this.workoutDate},`
    }
}

module.exports = Workout;