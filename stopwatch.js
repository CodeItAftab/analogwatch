var hourHand=document.getElementById('hour-hand');
var minHand=document.getElementById('min-hand');
var secHand=document.getElementById('sec-hand');
console.log(hourHand,minHand,secHand)



function displayTime(){
    let date=new Date();
    let hh=date.getHours();
    let mm=date.getMinutes();
    let ss=date.getSeconds();
    let hourRotation=30*hh+(mm/2);
    let minRotation = 6*mm+(ss/10);
    let secRotation = 6*ss;
    hourHand.style.transform= `rotate(${hourRotation}deg)`;
    minHand.style.transform= `rotate(${minRotation}deg)`;
    secHand.style.transform= `rotate(${secRotation}deg)`;
    
    console.log(date);
}

setInterval(displayTime, 1000);

