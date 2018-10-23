// Type JavaScript here and click "Run Code" or press Ctrl + s
console.log('Hello, world!');


function createFunction() {
	function cao(){
    console.log("hello");
  }
  return cao;
}

// UNCOMMENT THESE TO TEST YOUR WORK!
 var function1 = createFunction();
 function1();



function createFunctionPrinter(input) {
    function input1(){
      console.log(input);
    }
    return input1;
  
  }

// UNCOMMENT THESE TO TEST YOUR WORK!
 var printSample = createFunctionPrinter('sample');
 printSample();
 var printHello = createFunctionPrinter('hello');
printHello();



function outer() {
  var counter = 0; // this variable is outside incrementCounter's scope
  function incrementCounter () {
    counter ++;
    console.log('counter', counter);
  }
  return incrementCounter;
}

var willCounter = outer();
var jasCounter = outer();

// Uncomment each of these lines one by one.
// Before your do, guess what will be logged from each function call.

// willCounter();
// willCounter();
// willCounter();

// jasCounter();
// willCounter();



function addByX(x) {
    function saberi(inp){
        return x+inp;
    }
    return saberi;
}

var addByTwo = addByX(2);

// now call addByTwo with an input of 1
console.log(addByTwo(1));

// now call addByTwo with an input of 2

console.log(addByTwo(2));

var addByThree = addByX(3);
console.log(addByThree(1)); //should return 4
console.log(addByThree(2)); //should return 5
//--------------------------------------------------
// Extension
//--------------------------------------------------

function once(func) {
    var brojac=0;
    var res;
    function one1(num){
        brojac++;
        if(brojac==1) return res=func(num);
        return res;
    }
    return one1;
}

var onceFunc = once(addByTwo);

// UNCOMMENT THESE TO TEST YOUR WORK!
 console.log(onceFunc(4));  //should log 6
console.log(onceFunc(10));  //should log 6
console.log(onceFunc(9001));  //should log 6


function after(count, func) {
    var brojac=0;
    function after1(){
        brojac++;
        if(brojac<count) return console.log("nothing");
        return func();
    }
    return after1;
}

var called = function() { console.log('hello') };
var afterCalled = after(3, called);

 afterCalled(); // -> nothing is printed
 afterCalled(); // -> nothing is printed
 afterCalled(); // -> 'hello' is printed


function delay(func, wait) {
    setTimeout(func,wait);
}
var a = function(){console.log("Petar");};
delay(fun,4000);