function currentTime(){
    var date = new Date();
    var dayNumber = date.getDay();
    var hours = date.getHours();
    var minutes = date.getMinutes();
    var ampm = hours >= 12 ? 'PM' : 'AM';
    hours = hours % 12;
    hours = hours ? hours : 12;
    hours = hours < 10 ? '0' + hours : hours;
    minutes = minutes < 10 ? '0' + minutes : minutes;

    var dayNames = ["SUN", "MON", "TUE", "WED", "THU", "FRI", "SAT"];
    var day = document.getElementById('day').innerHTML = dayNames[dayNumber];
    var hour = document.getElementById('hour').innerHTML = hours;
    var minute = document.getElementById('minute').innerHTML = minutes;
    var ampmText = document.getElementById('ampm').innerHTML = ampm;
    setTimeout(currentTime, 200);

}
currentTime();