export default class Day {
  constructor(date) {
    this.date = date;
  }

  getTheDay() {
    const weekdays = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday']; //initialize array with weekday names
    const dayIndex = this.date.getDay(); 
    return weekdays[dayIndex];
  }
}