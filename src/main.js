import { Weekday , WeekMonth, WeekYear } from '../src/weekday.js';
import $ from 'jquery';
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './styles.css';

$(document).ready(function() {
    $("#formDate").submit(function(event) {
        event.preventDefault();
        let day = $("#date").val();
        let month = $("#date").val();
        let years = $("#date").val();
        let leapYear = $("#date").val();
        
        let newWeekDay = new Weekday(day);
        let newWeekMonth = new WeekMonth(month);
        let newWeekYear = new WeekYear(years);
        let newLeapYear = new WeekYear(leapYear);
        
        $("#resultDay").text(newWeekDay.findDay());
        $("#resultMonth").text(newWeekMonth.findMonth());
        $("#resultYear").text(newWeekYear.findYear());
        $("#resultLeapYear").text(newLeapYear.leapYear());
        console.log(newLeapYear.leapYear());
    });
});
