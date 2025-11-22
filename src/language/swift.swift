import Foundation

var text: String = "Hello, World!"
var symbol: Character = "!"
var bool: Bool = true
var int: Int = 20
var float: Float = 3.14
var double: Double = 3.141592653589793
var array: [Int] = [1, 2, 3]
var dictionary: [String: String] = ["key": "value"]
var tuple: (Int, String, Float) = (1, "two", 3.0)
var set: Set<Int> = Set([1, 2, 3])

enum Color {
    case red
    case green(String)
}

typealias algumaCoisa = String

struct HTTPResponse {
    var message: String
    var status: Int
}

class Person {
    var name: String

    init(name: String) {
        self.name = name
    }
}

true ? "success" : "failure"

func sayHello() {
    print("Hello, World!")
}

func sayGoodbye() {
    print("Goodbye, World!")
}
