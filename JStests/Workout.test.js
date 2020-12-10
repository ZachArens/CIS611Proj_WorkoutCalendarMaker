const Workout = require('../javascript/Workout');

test('a Workout can be constructed with a workoutNumber, weekNum, title, and description', () => {
    const testWorkout = new Workout(2, 1, 'upper body', '100 pushups');
    expect(testWorkout.workoutNum).toBe(2);
    expect(testWorkout.weekNum).toBe(1);
    expect(testWorkout.title).toBe('upper body');
    expect(testWorkout.description).toBe('100 pushups');
});

test('a Workout can be constructed with a workoutNumber and weekNum only', () => {
    const testWorkout = new Workout(2, 1);
    expect(testWorkout.workoutNum).toBe(2);
    expect(testWorkout.weekNum).toBe(1);
    expect(testWorkout.title).toEqual('Rest Day');
    expect(testWorkout.description).toEqual('');
});

test('a Workout can be constructed with a workoutNumber only', () => {
    const testWorkout = new Workout(2);
    expect(testWorkout.workoutNum).toBe(2);
    expect(testWorkout.weekNum).toBe(1);
    expect(testWorkout.title).toEqual('Rest Day');
    expect(testWorkout.description).toEqual('');
});

test('a date can be added to a workout', () => {
    const testWorkout = new Workout(2, 1, 'upper body', '100 pushups');
    testWorkout.addDate(new Date());
    expect(testWorkout.workoutDate).toEqual(new Date());
});

test('a Workout can be constructed with a workoutNumber, weekNum, title, and description', () => {
    const testWorkout = new Workout(2, 1, 'upper body', '100 pushups');
    const testWorkout2 = testWorkout.copyWorkout();
    expect(testWorkout2).not.toBe(testWorkout);
    expect(testWorkout2).toEqual(testWorkout);
});