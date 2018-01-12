function makeTimer() {
    var endTime = new Date("February 14, 2018");			
    var endTime = (Date.parse(endTime)) / 1000;
    
    var now = new Date();
    var now = (Date.parse(now) / 1000);
    
    var timeLeft = endTime - now;
    
    var days = Math.floor(timeLeft / 86400); 
    var hours = Math.floor((timeLeft - (days * 86400)) / 3600);
    var minutes = Math.floor((timeLeft - (days * 86400) - (hours * 3600 )) / 60);
    var seconds = Math.floor((timeLeft - (days * 86400) - (hours * 3600) - (minutes * 60)));
    
    if (hours < "10") { hours = "0" + hours; }
    if (minutes < "10") { minutes = "0" + minutes; }
    if (seconds < "10") { seconds = "0" + seconds; }
    
    document.getElementById("days").innerHTML = days + "<span class='count'>Days</span>";
    document.getElementById("hours").innerHTML = hours + "<span class='count'>Hours</span>";
    document.getElementById("minutes").innerHTML = minutes + "<span class='count'>Minutes</span>";
    document.getElementById("seconds").innerHTML = seconds + "<span class='count'>Seconds</span>";		
    
}
    
setInterval(function() { makeTimer(); }, 1000);
