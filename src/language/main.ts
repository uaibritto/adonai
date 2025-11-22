var text: string = "Hello, World!";
var bool: boolean = true;
var int: number = 42;
var float: number = 3.14;
var array: string[] = ["apple", "banana", "cherry"];
var object: { name: string; age: number } = { name: "John", age: 30 };

class Animal {
    public name: string;

    constructor(name: string) {
        this.name = name;
    }
}

true ? "success" : "failure";

// Alguma coisa

class Dog extends Animal {
    constructor(name: string) {
        super(name);
    }
}

function sayHello(name: string): string {
    return `Hello, ${name}!`;
}

sayHello("World");

enum Color {
    Red,
    Green,
    Blue,
}

interface Person {
    name: string;
    age: number;
}

type Point = { x: number; y: number };

if (bool) {
    console.log("The condition is true.");
} else {
    console.log("The condition is false.");
}

try {
    // Code that may throw an error
} catch (error) {
    console.error("An error occurred:", error);
}

for (const item of array) {
    console.log(item);
}

throw new Error("An error occurred.");

const person = {
    falar: () => {
        return "Hello";
    },
};

person.falar();
