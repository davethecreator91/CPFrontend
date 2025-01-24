
const updateRev = () => {
    
const oneBillion = 1000000000;

const perYear = 365;
const perDay = oneBillion / perYear
const perHour = perDay / 24
const perMinute = perHour / 60
const perSecond = perMinute / 60
// console.log(perDay);
// console.log(perHour);
// console.log(perMinute);
// console.log(perSecond);

// amount generated since January 5, 2025

let now = new Date();
// console.log(now);

let cpStart = new Date('2025-01-05');
let timeDiff = now - cpStart;
let secsTimeDiff = timeDiff / 1000;

let RevNow = secsTimeDiff * perSecond

console.log(RevNow);
// return (RevNow)
};
updateRev();
setInterval(updateRev, 1000)
// console.log(RevNow);
