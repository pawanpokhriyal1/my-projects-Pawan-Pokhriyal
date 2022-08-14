

const alarmsubmit=document.getElementById('alarmsubmit');

alarmsubmit.addEventListener('click',setAlarm);

var audio =new Audio('freejazz.wav');

function ringbell(){
    audio.play();
}

function setAlarm(e){
    e.preventDefault();
    const alarm =document.getElementById('alarm-time');
    alarmDate= new Date(alarm.value);
    console.log(`setting alarm for ${alarmDate}... `);
    now =new Date;

    let timeToAlarm =alarmDate-now;
    console.log(timeToAlarm);
    if(timeToAlarm>=0){
        setTimeout(()=>{
            console.log("ring now")
            ringbell();
        },timeToAlarm);

    }
}