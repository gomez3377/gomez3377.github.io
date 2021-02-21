const f = new Date();
const p = f.getDay();
let b = "Preston Pancakes in the Park! 9:00 a.m. Saturday at the city park pavillion."
if (p == 5) {
    document.getElementById('banner').innerHTML = b;
}