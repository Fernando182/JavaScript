function bubbleSort() {
      const len = this.length;
      const inputArray = this;
      for (let i=0; i < len; i++) {
            for (let j=0; j < len - i; j++) {
                  if(inputArray[j] > inputArray[j+1]) {
                        const tmp = inputArray[j];
                        inputArray[j] = inputArray[j+1];
                        inputArray[j + 1] = tmp;
                  }
             }
      }
      return inputArray;
}
Array.prototype.bubbleSort = bubbleSort;

console.log([8,3,1,2,9].bubbleSort());
