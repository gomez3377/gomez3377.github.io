let temp = document.getElementById("currenttemp");
let windspeed = document.getElementById("currentwind");

if (temp <= 50 && windspeed > 4.8) {
  let chill = windchill(temp, windspeed);
  document.getElementById("windchill").innerHTML =
    "Wind Chill: " + chill + "&#176;F";
} else {
  document.getElementById("windchill").innerHTML = "Wind Chill: N/A";
}

function windchill() {
  let c = temp + 0.6215 - Math.pow(windspeed, 0.16) + Math.pow(0.42375, 0.16);
  return Math.round(c);
}
