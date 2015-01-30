/**
 * DateFormat.strftime is a helper method for formatting dates/times
 * created by Tatiana on January 19, 2015
 *
 * @param {Date object} date: Date object to format
 * @param {string} format: Formats specified date according to this format string
 *
 * Helper Methods (documented below):
 *  %a - The abbreviated weekday name (“Sun”)
 *  %A - The full weekday name (“Sunday”)
 *  %b - The abbreviated month name (“Jan”)
 *  %B - The full month name (“January”)
 *  %c - The preferred local date and time representation
 *  %d - Day of the month (1..31)
 *  %D - Day of the month (01..31)
 *  %H - Hour of the day, 24-hour clock (0..23)
 *  %I - Hour of the day, 12-hour clock (1..12)
 *  %m - Month of the year (01..12)
 *  %M - Minute of the hour (00..59)
 *  %P - Meridian indicator uppercase (“AM” or “PM”)
 *  %p - Meridian indicator lowercase (“am” or “pm”)
 *  %q - Abbrviated Meridian indicator lowercase (“a” or “p”)
 *  %S - Second of the minute (00..60)
 *  %w - Day of the week (Sunday is 0, 0..6)
 *  %y - Year without a century (00..99)
 *  %Y - Year with century
 *
 *
 * Example Usage:
 *  DateFormat.strftime(new Date(), '%B %d, %Y');
 *  => 'January 19, 2015'
 *
 */

var DateFormat = DateFormat || {};

DateFormat.dateHelpers = {
  ABV_DAYS: [
    'Sun',
    'Mon',
    'Tue',
    'Wed',
    'Thu',
    'Fri',
    'Sat'
  ],

  FULL_DAYS: [
    'Sunday',
    'Monday',
    'Tuesday',
    'Wednesday',
    'Thursday',
    'Friday',
    'Saturday'
  ],

  ABV_MONTHS: [
    'Jan',
    'Feb',
    'Mar',
    'Apr',
    'May',
    'Jun',
    'Jul',
    'Aug',
    'Sep',
    'Oct',
    'Nov',
    'Dec'
  ],

  FULL_MONTHS: [
    'January',
    'February',
    'March',
    'April',
    'May',
    'June',
    'July',
    'August',
    'September',
    'October',
    'November',
    'December'
  ],

  getAbbreviatedDay: function(date) {
    return DateFormat.dateHelpers.ABV_DAYS[date.getDay()];
  },

  getFullDay: function(date) {
    return DateFormat.dateHelpers.FULL_DAYS[date.getDay()];
  },

  getAbbreviatedMonth: function(date) {
    return DateFormat.dateHelpers.ABV_MONTHS[date.getMonth()];
  },

  getFullMonth: function(date) {
    return DateFormat.dateHelpers.FULL_MONTHS[date.getMonth()];
  },

  getLocalDateTime: function(date) {
    return date.toLocaleString();
  },

  getMonthDay: function(date) {
    return date.getDate();
  },

  getDD: function(date) {
    var DD = date.getDate();
    return (DD >= 10 ? DD : '0' + DD);
  },

  get24Hour: function(date) {
    return date.getHours();
  },

  get12Hour: function(date) {
    return date.getHours() % 12;
  },

  getMonthNum: function(date) {
    var monthNum = date.getMonth() + 1;
    return (monthNum >= 10 ? monthNum : '0' + monthNum);
  },

  getMinute: function(date) {
    var minuteStr = date.getMinutes();
    return (minuteStr >= 10 ? minuteStr : '0' + minuteStr);
  },

  getMeridianUpper: function(date) {
    return (date.getHours() > 12) ? 'PM' : 'AM';
  },

  getMeridianLower: function(date) {
    return (date.getHours() > 12) ? 'pm' : 'am';
  },

  getAbbreviatedMeridianLower: function(date) {
    return (date.getHours() > 12) ? 'p' : 'a';
  },

  getMinuteSeconds: function(date) {
    return date.getSeconds();
  },

  getDayNum: function(date) {
    return date.getDay();
  },

  getAbvYear: function(date) {
    var fullYear = date.getFullYear();
    return (fullYear + '').slice(-2);
  },

  getFullYear: function(date) {
    return date.getFullYear();
  }
};

DateFormat.strftime = function(date, format) {
  return format
    .replace(/%a/g, DateFormat.dateHelpers.getAbbreviatedDay(date))
    .replace(/%A/g, DateFormat.dateHelpers.getFullDay(date))
    .replace(/%b/g, DateFormat.dateHelpers.getAbbreviatedMonth(date))
    .replace(/%B/g, DateFormat.dateHelpers.getFullMonth(date))
    .replace(/%c/g, DateFormat.dateHelpers.getLocalDateTime(date))
    .replace(/%d/g, DateFormat.dateHelpers.getMonthDay(date))
    .replace(/%D/g, DateFormat.dateHelpers.getDD(date))
    .replace(/%H/g, DateFormat.dateHelpers.get24Hour(date))
    .replace(/%I/g, DateFormat.dateHelpers.get12Hour(date))
    .replace(/%m/g, DateFormat.dateHelpers.getMonthNum(date))
    .replace(/%M/g, DateFormat.dateHelpers.getMinute(date))
    .replace(/%P/g, DateFormat.dateHelpers.getMeridianUpper(date))
    .replace(/%p/g, DateFormat.dateHelpers.getMeridianLower(date))
    .replace(/%q/g, DateFormat.dateHelpers.getAbbreviatedMeridianLower(date))
    .replace(/%S/g, DateFormat.dateHelpers.getMinuteSeconds(date))
    .replace(/%w/g, DateFormat.dateHelpers.getDayNum(date))
    .replace(/%y/g, DateFormat.dateHelpers.getAbvYear(date))
    .replace(/%Y/g, DateFormat.dateHelpers.getFullYear(date));
};

