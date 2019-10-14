function vowelsAndConsonants(s) {
    
    const vowels = 'aeiou';
    // output vowels    
    for(let i = 0; i < s.length; i++) {
         if (vowels.indexOf(s.charAt(i)) > -1) {
              console.log(s.charAt(i));
         }
    }
    // output consonants
    for(let i = 0; i < s.length; i++) {
         if (vowels.indexOf(s.charAt(i)) < 0) {
              console.log(s.charAt(i));
         }
    } 
}
