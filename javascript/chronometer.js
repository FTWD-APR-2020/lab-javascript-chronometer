class Chronometer {
  constructor() {
    this.seconds = 0; // seconds
    this.milliSeconds = 0; // BONUS is actually centiseconds
    this.intervalId = 0; //11  
  }

  // starts the setInterval
  startClick(printTimeFunc) {
    this.intervalId = setInterval(()=>{
      console.log(this.seconds)
      this.milliSeconds++
      if(this.milliSeconds % 100 === 0){
        this.seconds+=1;
      }
      // if(printTimeFunc)
        printTimeFunc() 
    }, 10) 
  }
  
  getMinutes() {
    // ... your code goes here
    return Math.floor(this.seconds / 60);
  }

  getSeconds() {
    // ... your code goes here
    return this.seconds % 60;
  }

  getMilliSeconds(){
    return this.milliSeconds % 100;
  }

  // this will return a string with two number characters (e.g. 01, 10, 35)
  twoDigitsNumber(value) {
    // ... your code goes here
    // if(this.seconds < 10){
    //   return '0'+this.seconds.toString()
    // } else if(this.seconds >= 10 && this.seconds < 100){
    //   return this.seconds.toString()
    // }

    if(value < 10){
      return `0${value}`
    } else {
      return `${value}`
    }
  }

  stopClick() {
    clearInterval(this.intervalId)
  }

  resetClick() {
    this.seconds = 0;

    this.milliSeconds = 0;
  }
  
  // this will return what is going to be showed under the splits (e.g. 01:12 )
  splitClick() {
    // ... your code goes here
    return `${this.twoDigitsNumber(this.getMinutes())}:${this.twoDigitsNumber(this.getSeconds())}:${this.twoDigitsNumber(this.getMilliSeconds())}`
    // return `${this.getMinutes()}:${this.getSeconds()}:${this.getMilliSeconds()}`
  }
}