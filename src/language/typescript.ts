import { useEffect } from "react";

var text: string = "hello";
var int: number = 42;
var bool: boolean = true;
var undefined = undefined;

var nulo = null;

var array: string[] = ["one", "two", "three"];
var dictionary: obj = { key: "example", value: 42 } as const;

dictionary.key;

var regex = /[a-z]/;
var scape: string = "scape \n";
var interpolation = `hello ${text}`;

if (true && false) {
    console.log("alguma coisa");
}

type fn = () => void;
type obj = { key: string; value: number };
type Union = string | number;
type age = Omit<Person, "name">;
type name = Pick<Person, "name">;

this;

console.log("alugma cois");
// Comentario
/*
 * alguma coisa
 */

enum Color {
    Red,
    Green,
    Blue,
}

interface Human {
    name: string;
}

@GET("/register")
class Person implements Human {
    public name: string;

    constructor(name: string) {
        this.name = name;
    }

    static createPerson(name: string): Person {
        return new Person(name);
    }

    override create() {}
}

Person.createPerson("John");

setTimeout(() => {
    console.log("hello");
}, 2000);

const person = new Person("John");

declare namespace Vehicle {
    interface Car {
        brand: string;
        model: string;
    }
}
