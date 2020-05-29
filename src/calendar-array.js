class CalendarArray {
  getCalendar(...dates) {
    if (this.#isValidDateArg(dates)) {
      console.log('is valid');
    }
  }

  #isValidDateArg(dates) {
    // Sample correct arguments [[2020, 3], [2012], [2007]]
    if (dates.length > 0) {
      for (let date of dates) {

        if (!Array.isArray(date)) {
          throw new TypeError(`Invalid type, array expected, ${typeof date} passed`);

        } else if (date.length === 0) {
          throw new Error(`Array is empty`);
        } else {

          for (let value of date) {
            if (typeof value !== 'number') {
              throw new TypeError(`Invalid type, number expected, ${typeof value} passed`);
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
