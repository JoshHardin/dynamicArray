class DynamicArray {

  constructor(defaultSize = 4) {
    this.capacity = defaultSize;
    this.length = 0;
    this.data = new Array(this.capacity)
  }

  read(index) {
    return this.data[index]
  }

  push(val) {
    this.data[this.length] = val
    this.length++
  }


  pop() {
    // if array has nothing, return undefined
    if(this.length === 0) return undefined
    //ele is last element of your array
    let ele = this.data[this.length-1]
    //delete that element from array
    delete this.data[this.length-1]
    //update the length
    this.length--
    //return removed element
    return ele
  }

  shift() {
    if(this.length === 0) return undefined
    let ele = this.data[0]
    delete this.data[0]
    for(let i = 0; i < this.length; i++){
      this.data[i] = this.data[i+1]
    }
    this.length--
    return ele
  }

  unshift(val) {
    for(let i = this.length; i > 0; i--){
      this.data[i] = this.data[i-1]; //shifts all the values over one slot to the right
    }
    this.data[0] = val //this data[0] is the same as this data[1] but we rewrite this.data[0] to be val passed in
    this.length++
  }

  indexOf(val) {

    // Your code here
  }

  resize() {

    // Your code here
  }

}


module.exports = DynamicArray;
