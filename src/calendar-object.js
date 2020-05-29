class CalendarObject {
  getCalendar(...dates) {
    if (this.#isValidDateArg(dates)) {
      return this.#getAllObjectCalendar(dates);
    }
  }

  #getAllObjectCalendar(dates) {
    const allCalendarObjects = {};

    for (let date of dates) {
      const year = date[0];
      // if you need to get a whole year
      if (date.length === 1) {
        allCalendarObjects[year] = this.#createCalendarObject(year);
      } else {
        // if you need to get a year with specific months
        let mounthArr = [];

        for (let i = 0; i < date.length; i++) {
          if (i > 0) {
            mounthArr.push(date[i]);
          }
        }
        allCalendarObjects[year] = this.#createCalendarObject(year, mounthArr);
      }
    }

    return allCalendarObjects;
  }

  #createCalendarObject(yearNum, mounthArgArr = []) {
    // create year
    const calendarArr = {};

    if (mounthArgArr.length === 0) {
      // creation of all months 
      for (let monthCount = 0; monthCount < 12; monthCount++) {
        calendarArr[monthCount + 1] = {};
      }
    } else {
      // create specific months
      for (let mounth of mounthArgArr) {
        calendarArr[mounth] = {};
      }
    }

    // creating days in months
    Object.keys(calendarArr).forEach((mounth) => {
      const mounthDays = this.#getMonthDays(yearNum, Number(mounth));

      for (let daysCount = 0; daysCount < mounthDays; daysCount++) {
        calendarArr[mounth][daysCount + 1] = null;
      }
    });
    
    return calendarArr;
  }

  #getMonthDays(year, month) {
    // Correct date 2020, 12 | Wrong date 99999, 99
    if (String(year).length < 5 && String(month).match(/^([1-9]|1[0-2])$/) !== null) {
      const date = new Date(year, month - 1);
      const daysValue = new Date(date.getFullYear(), date.getMonth() + 1, 0);

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
  module.exports = new CalendarObject();
} else {
  window.calendarObject = new CalendarObject();
}
