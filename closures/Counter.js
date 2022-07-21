function Counter() {
    var count = 0;
    return function incrementCounter() {
        count++;
        console.log(count);
    }
}
// console.log(count); // Can't access count as it is not available for outside world

var counter1 = Counter();
counter1();