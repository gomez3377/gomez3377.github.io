const d = new Date();
const i = d.getDay();
let n = [
    "Sun",
    "Mon",
    "Tue",
    "Wed",
    "Thur",
    "Fri",
    "Sat",
];
let day = [];

for(let x = i; x <= 7; x++)  {
    if (day.length == 5)  { break;}
        if (x < 7) { 
        day.push(n[x]);
        }
        else {
            x = (x % 7) -1;
        }

    }
document.getElementById('day1').innerHTML = day[0];
document.getElementById('day2').innerHTML = day[1];
document.getElementById('day3').innerHTML = day[2];
document.getElementById('day4').innerHTML = day[3];
document.getElementById('day5').innerHTML = day[4];
