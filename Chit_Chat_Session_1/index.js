console.log("Day 2 | Chit Chat Session");

// Arrow function
// Arrow function is the method of writing function in easy way.

// DATA STRUCTURE USED TO ALLOCATE MEMORY : cALL STACK (STACK)

function x() {
  const a = 10;
  console.log("x function called");
  console.log(myVar);
}

var myVar = 101;

x(); //functional execution context created

// anonymous function
const anon = function () {
  console.log("this is anonymouns function");
};

anon(); // calling anonymous function

// test
const test = function () {
  return anon();
};

test();

// In the ES6
/*
    There are new things are introduced

    let, var, const
    spread
*/

// Arrow function
const fnx = () => {
  console.log("This is arrow funcion");
};

const obj = {
  fn: function () {
    console.log(this);
  },
  fn2: () => {
    console.log(this);
  },
};

obj.fn();  // obj as this
obj.fn2();  // window as this

// About this keyword

const person = {
    name : "Jaymin"
}
const person2 = {
    name : "deep"
}

function x() {
    console.log(this);
}

x.call(person);
x.call(person2);
x.call(this);