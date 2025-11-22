import { type JSX, useState } from "react"

const Button = () => {
	return (
		<button className="button" onClick={() => setCount(count + 1)}>
			Click me!
		</button>
	)
}

export default function Counter(): JSX.Element {
	const [count, setCount] = useState(0)

	return (
		<div>
			<p>Count: {count}</p>
			<button className="button" onClick={() => setCount(count + 1)}>
				Click me!
			</button>

			<Button />
		</div>
	)
}
