var temp = 112;
var windspeed = 123;

if (temp <= 50 && windspeed > 4.8) {
    let chill =windchill (temp, windspeed);
    document.getElementById('windchill').innerHTML = "Wind Chill: " + chill + "&#176;F"; 
}

function windchill (){
    let f = 35.74 + 0.6215 - Math.pow(35.75, 0.16) + Math.pow(0.42375, 0.16);
}