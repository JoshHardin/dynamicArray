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
    if (this.length === this.capacity) {
      this.resize()
    }
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
    if (this.length === this.capacity) {
      this.resize()
    }
    for(let i = this.length; i > 0; i--){
      this.data[i] = this.data[i-1]; //shifts all the values over one slot to the right
    }
    this.data[0] = val //this data[0] is the same as this data[1] but we rewrite this.data[0] to be val passed in
    this.length++
  }

  indexOf(val) {
    for (let i = 0; i < this.length; i++) {
      if (this.data[i] === val) {
        return i;
      }
    }
    return -1;
  }

  resize() {
      this.capacity *=2
      let newArr = new Array(this.capacity)
      for (let i = 0; i < this.data.length; i++) {
        newArr[i] = this.data[i]
      }
      this.data = newArr;
    }
    
}



module.exports = DynamicArray;
