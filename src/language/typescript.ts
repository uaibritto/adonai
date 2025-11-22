var text: string = "hello"
var _int: number = 42
var _bool: boolean = true
var _undefined

var _nulo = null

var _array: string[] = ["one", "two", "three"]
var dictionary: obj = { key: "example", value: 42 } as const

dictionary.key

var _regex = /[a-z]/
var _scape: string = "scape \n"
var _interpolation = `hello ${text}`

if (true && false) {
	console.log("alguma coisa")
}

type fn = () => void
type obj = { key: string; value: number }
type Union = string | number
type age = Omit<Person, "name">
type name = Pick<Person, "name">

this

console.log("alugma cois")
// Comentario
/*
 * alguma coisa
 */

enum Color {
	Red,
	Green,
	Blue
}

interface Human {
	name: string
}

@GET("/register")
class Person implements Human {
	public name: string

	constructor(name: string) {
		this.name = name
	}

	static createPerson(name: string): Person {
		return new Person(name)
	}

	override create() {}
}

Person.createPerson("John")

setTimeout(() => {
	console.log("hello")
}, 2000)

const _person = new Person("John")

declare namespace Vehicle {
	interface Car {
		brand: string
		model: string
	}
}
