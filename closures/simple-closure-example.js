function outest() {
	var c = 20;
	function outer(b) {
        function inner() {
            console.log(a, b, c);
        }
        let a = 10; // a is still the lexical scope (Parent's scope)
        return inner;
	}
    return outer;
}
let a = 100;
var close = outest()("hellow-world");
close(); // Prints 10 "hellow-world" 20