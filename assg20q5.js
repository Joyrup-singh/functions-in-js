function factorialize(num) {
    if (num === 0) {
      return 1;
     } else if (num > 0) {
        return num * factorialize(num - 1);
     } else {
        return Math.pow(-1, num) * Math.abs(num) * factorialize(Math.abs(num) - 1);  
       }
     }
    // test cases below
    
     console.log(factorialize(-1)); // -1
     console.log(factorialize(1)); // 1
     console.log(factorialize(0)); // 1
     console.log(factorialize(-2)); // 2
     console.log(factorialize(2)); // 2
     console.log(factorialize(-3)); // -6
     console.log(factorialize(3)); // 6
     console.log(factorialize(-4)); // 24
     console.log(factorialize(4)); // 24
     console.log(factorialize(-5)); // -120
     console.log(factorialize(5)); // 120