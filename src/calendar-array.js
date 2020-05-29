class CalendarArray {
  getCalendar(...dates) {
    if (this.#isValidDateArg(dates)) {
      this.#createCalendarArray(dates);
    }
  }

  #createCalendarArray(dates) {
    for (let date of dates) {

      for (let i = 0; i < date.length; i++) {
        if (i === 0) {
          const year = date[0];
        } else {

        }
      }
    }
  }

  #getMonthDays(year, month) {
    // Correct date 2020, 12 | Wrong date 99999, 99
    if (String(year).length < 5 && String(month).match(/^([1-9]|1[0-2])$/) !== null) {
      const date = new Date(year, month - 1);
      const daysValue = new Date(date.getFullYear(), date.getMonth()+1, 0);

      return daysValue.getDate();
    } 

    throw new Error('Wrong date');
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
