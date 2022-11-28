function setAlarm() {}

// DO NOT EDIT BELOW HERE

var audio = new Audio("a.mp3");

function setup() {
  document.getElementById("set").addEventListener("click", () => {
    var t = document.getElementById("alarmSet").valueAsNumber;
    console.log(t);

    let x=setInterval(() => {
      setAlarm(t);
      t -= 1;
      if (t < 0) {
        clearInterval(x)
        playAlarm();
      }
    }, 1000);
    //
  });

  document.getElementById("stop").addEventListener("click", () => {
    pauseAlarm();
  });
}

function setAlarm(t) {
  console.log(t);
  document.getElementById("timeRemaining").innerHTML = `Time Remaining: ${t}`;
}

function playAlarm() {
  audio.play();
}

function pauseAlarm() {
  audio.pause();
}

window.onload = setup;
