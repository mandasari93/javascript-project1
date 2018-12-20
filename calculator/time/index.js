const currentTime = new Date(),
    hours = currentTime.getHours(),
    minutes = currentTime.getMinutes();

if (minutes < 10) {
    minutes = "0" + minutes;
}

console.log(hours + ":" + minutes)