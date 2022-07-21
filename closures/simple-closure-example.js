function outer() {
    var a = 10;
    function inner() {
        console.log(a);
    }
    return inner;
}

outer()(); // Prints 10. It still remembers 'a' even here.