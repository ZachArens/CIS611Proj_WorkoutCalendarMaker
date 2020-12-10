let Workout = class {
    constructor(workoutNumber, weekNum = Math.ceil(workoutNumber/7),
                title = 'Rest Day', description = '', workoutDate = null) {
        this.workoutNum = workoutNumber;
        this.weekNum = weekNum;
        this.title = title;
        this.description = description;
        this.workoutDate = workoutDate;


    }

    addDate(inputDate) {
        this.workoutDate = inputDate;
    }

    toString() {
        return `Workout Num: ${this.workoutNum}, Week Num: ${this.weekNum}, 
        title: ${this.title}, description: ${this.description}, Workout Date: ${this.workoutDate},`
    }

    copyWorkout = () =>  {
        return new Workout(this.workoutNum, this.weekNum, this.title, this.description, this.workoutDate);
    }
}

module.exports = Workout;

