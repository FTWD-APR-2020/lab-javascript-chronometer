class Chronometer {
  constructor() {
    this.currentTime = 0; //centiseconds ? 
    this.intervalId = 0; //11  
  }
  startClick(callback) {
    let id = setInterval(()=>{
      this.currentTime+=1;
      callback(this.currentTime) 
    }, 1000)
    this.intervalId = id
  }
 
  stopClick() {
    clearInterval(this.intervalId)
  }
  resetClick() {
    this.currentTime = 0;
  }


}
