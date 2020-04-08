const chronometer = new Chronometer();

// get the buttons:
const btnLeft = document.getElementById('btnLeft');
const btnRight = document.getElementById('btnRight');

let stopped = true;

btnLeft.addEventListener('click', () => {

  if(stopped){
    chronometer.startClick(printTime)
    btnLeft.innerHTML = 'Stop'
    btnLeft.className = "btn stop"
  }
  else {
    chronometer.stopClick()
    btnLeft.innerHTML = 'Start'
    btnLeft.className = "btn start"
  }

  stopped = !stopped //toggle the clock setting
});

// Reset/Split Button
btnRight.addEventListener('click', () => {
  chronometer.resetClick()
});


function printTime(time){
  console.log(time)
  
  let seconds = time%60
  let minutes = Math.floor(time/60)


  if(seconds < 10){
    seconds = "0"+seconds
  }

  if(minutes < 10){
    minutes = "0"+minutes
  }


  console.log(seconds, minutes)

  document.querySelector('#sphere span').innerHTML = minutes + ':' + seconds
}

