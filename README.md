# strftime


DateFormat.strftime is a helper method for formatting dates/times
created by Tatiana on January 19, 2015

@param {Date object} date: Date object to format
@param {string} format: Formats specified date according to this format string

Helper Methods (documented below):
 %a - The abbreviated weekday name (“Sun”)
 %A - The full weekday name (“Sunday”)
 %b - The abbreviated month name (“Jan”)
 %B - The full month name (“January”)
 %c - The preferred local date and time representation
 %d - Day of the month (1..31)
 %D - Day of the month (01..31)
 %H - Hour of the day, 24-hour clock (0..23)
 %I - Hour of the day, 12-hour clock (1..12)
 %m - Month of the year (01..12)
 %M - Minute of the hour (00..59)
 %P - Meridian indicator uppercase (“AM” or “PM”)
 %p - Meridian indicator lowercase (“am” or “pm”)
 %q - Abbrviated Meridian indicator lowercase (“a” or “p”)
 %S - Second of the minute (00..60)
 %w - Day of the week (Sunday is 0, 0..6)
 %y - Year without a century (00..99)
 %Y - Year with century


Example Usage:
 DateFormat.strftime(new Date(), '%B %d, %Y');
 => 'January 19, 2015'
