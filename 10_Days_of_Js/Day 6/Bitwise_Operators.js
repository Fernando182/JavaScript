function getMaxLessThanK(n, k) {
     let largest = 0;
     for (let a = 1; a <= n; a++) {
          for (let b = a + 1; b<= n; b++) {
               let ab = (a&b); // get the value of a&b
               
               // confirm that ab < k
               // if greater than the largest, redefine largest
               if (ab < k && ab > largest) {
                    largest = ab;
               }    
          }  
     } 
     return largest;
}
