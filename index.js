const clock = document.querySelector("#clock");
const btStart = document.querySelector("#start");
const btStop = document.querySelector("#stop");
const btReset = document.querySelector("#reset");

let ms=0;
let sec=0;
let min=0;
let hours=0;
let startPressCounter = 0;
var internal; 


const questionMark = document.querySelector("#bt");
const feedBack = document.querySelector("#feedBack");

document.body.style = "background-color:skyblue"

questionMark.addEventListener("mouseover", () => feedBack.style = "visibility:visible");
questionMark.addEventListener("mouseout", ()  => feedBack.style = "visibility:hidden");


btStart.addEventListener("click",start);

function start(){

    btStop.addEventListener("click",stop);
    btReset.addEventListener("click",reset);

    startPressCounter++;

    if(startPressCounter == 1) internal = setInterval(goCount,10); 

    function goCount(){
        ms += 10;

        if(ms == 1000) {
            sec++;
            ms=0;
        }
        if(sec == 60) {
            min++;
            sec=0;
        }if(min == 60){
            hours++;
            min = 0;
        }

        setText();

    }function stop(){
        clearInterval(internal);
        startPressCounter=0;
    }function reset(){
       hours=0;min=0;sec=0;ms=0;startPressCounter=0;
       clock.textContent = `00:00:00,00`;
       stop();
    }function setText(){

        let stringMs = String(ms/10);
        let stringSec = String(sec);
        let stringMin = String(min);
        let stringHours = String(hours);

        if(stringMs.length == 1) stringMs = "0"+stringMs;
        if(stringSec.length == 1) stringSec = "0"+stringSec;
        if(stringMin.length == 1) stringMin = "0"+stringMin;
        if(stringHours.length == 1) stringHours = "0"+stringHours;

        clock.textContent = `${stringHours}:${stringMin}:${stringSec},${stringMs}`;
        
    }
    
}