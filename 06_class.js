class TempTracker {
  constructor(){
    this.max = -Infinity
    this.min = Infinity
    this.mean
    this.mode
    this.tempSum = 0
    this.occuranceCounter = {}
  }
  insert(val){
    this.updateMax(val)
    this.updateMin(val)
    this.tempSum = this.tempSum + val
    occuranceCounter[val] = occuranceCounter[val] + 1 || 1
    if(occuranceCounter[val] > this.mode) {
      this.mode = val
    }
  
    return val
    
  }
  updateMax(val){
    this.max = Math.max(this.max, val)
  }
  getMax() {
    return this.max
  }
  updateMin(val){
    this.min = Math.min(this.min, val)
  }
  getMin(){
   return this.min
  }
  get_mean() {
    return this.tempSum/this.temperatures.length
  }
  get_mode(){
    return this.mode
  }
  
}

var tracker = new TempTracker()
tracker.insert()

