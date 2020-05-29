class CalendarArray {
  getCalendar(...dates) {
    if (this.#isValidDateArg(dates)) {
      console.log('is valid');
    }
  }

  /*
    Validates getCalendar arguments.
    - sample correct arguments
    [[2020, 3], [2012], [2007]]
  */
  #isValidDateArg(dates) {
    if (dates.length > 0) {
      for (let date of dates) {

        if (!Array.isArray(date)) {
          throw new TypeError(`type: ${typeof date} <- the argument is of the wrong type, array expected`);

        } else if (date.length === 0) {
          throw new Error(`length: ${date.length} <- array is empty`);
        } else {

          for (let value of date) {
            if (typeof value !== 'number') {
              throw new TypeError(`type: ${typeof value} <- invalid date type in this array of dates, expected number`);
            }
          }
        }
      }
    } else {
      throw new Error('Empty args array, pass an array with a date');
    }

    return true;
  }
}

// export globals
if (typeof module !== 'undefined') {
  module.exports = new CalendarArray();
} else {
  window.calendarArray = new CalendarArray();
}
