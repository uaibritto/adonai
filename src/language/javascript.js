function greet(name) {
	console.log(`Hello, ${name}!`)
}

greet("John")

if (true && false) {
	console.log("Hello World!")
} else {
	console.log("Goodbye World!")
}

switch (true) {
	case true:
		console.log("Case 1")
		break
	case false:
		console.log("Case 2")
		break
	default:
		console.log("Default")
		break
}

while (true) {
	console.log("While Loop")
}

for (let i = 0; i < 5; i++) {
	console.log("For Loop")
}

do {
	console.log("Do While Loop")
} while (true)

try {
	console.log("Try")
} catch (error) {
	console.log("Catch")
} finally {
	console.log("Finally")
}
