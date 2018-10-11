export class Weekday {
    constructor(day){
        this.day = day;
        // this.year = year;
    }
    findDay(){
            let newDate = new Date(this.day);
            // console.log(newDate);
            let weekdayArr =["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"];
            // console.log(weekdayArr[newDate.getDay()]);
            return weekdayArr[newDate.getDay()];
    }
}
export class WeekMonth {
    constructor(month) {
    this.month = month;
    }
    findMonth(){
        let newMonth = new Date(this.month);
        let monthArr = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
        // console.log(monthArr[newMonth.getMonth()]);
        return monthArr[newMonth.getMonth()];
    }
}

export class WeekYear {
    constructor(year) {
    this.year = year;
    }
    findYear(){
        let newWeekYear = new Date(this.year);
        let newYear = newWeekYear.getFullYear();
        return newYear;
    }

    findLeapYear(){
        let newLeapYear = new Date(this.year);
        let newYear = newLeapYear.getFullYear();
        if ((newYear % 400 === 0) || (newYear % 4 === 0) && (newYear % 100 != 0)){
            return `${newYear} is a leap year`;
          } else {
            return `${newYear} is not a leap year`;
          }
        }
    }


