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
  
  let seconds = String(time%60)//.split('')
  let minutes = String(Math.floor(time/60))//.split('')
  // let minDec = minutes[0]
  // let minUni = minutes[1]

  // let secDec = seconds[0]
  // let secUni = seconds[1]

  console.log(seconds, minutes)

  // let html = ` 
  //   <span id="minDec" class="number">${minDec}</span>
  //   <span id="minUni" class="number">${minUni}</span>
  //   <span>:</span>
  //   <span id="secDec" class="number">${secDec}</span>
  //   <span id="secUni" class="number">${secUni}</span>`


  document.querySelector('#sphere span').innerHTML = minutes + ':' + seconds
}

