function Counter() {
    var count = 0;
    return function incrementCounter() {
        count++;
				console.log(count);
    }
}

// console.log(count); // Can't access count as it is not available for outside world

var counter1 = Counter();
counter1(); // It prints 1
counter1(); // It prints 2

// This forms a new closure and it scope would different from the counter1
var counter2 = Counter(); 
counter2(); // It prints 1
counter2(); // It prints 1