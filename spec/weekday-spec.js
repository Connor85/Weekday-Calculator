import { Weekday, WeekMonth, WeekYear } from '../src/weekday.js';

describe('Weekday', function(){

  it('return the month of the day that was selected', function(){
    var testMonth = new WeekMonth ("10-9");
    expect(testMonth.findMonth()).toEqual("October");
  })

  it('return the day of the week', function(){
    var testWeekday = new Weekday ("10-9");
    expect(testWeekday.findDay()).toEqual("Wednesday");

  })
  it('return the year that was selected', function(){
    var testWeekYear = new WeekYear ("10-2018");
    expect(testWeekYear.findYear()).not.toEqual("10-2018")
  })
  it('return a true or false is the selected year is a leapyear', function(){
    var testLeapYear = new WeekYear ("02-2000");
    expect(testLeapYear.findLeapYear()).not.toEqual("02-2000")
  })
});
