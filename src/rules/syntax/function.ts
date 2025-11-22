import type { Color, Syntax } from "interfaces";

export function fn(color: Color): Record<string, Syntax> {
	return {
		function: {
			color: color.green,
			font_style: "normal",
			font_weight: 500,
		},
		"function.builtin": {
			color: color.orange,
			font_style: "normal",
			font_weight: 500,
		},
		"function.call": {
			color: color.amber,
			font_style: "normal",
			font_weight: 500,
		},
		"function.macro": {
			color: color.amber,
			font_style: "normal",
			font_weight: 500,
		},
		"function.method": {
			color: color.green,
			font_style: "normal",
			font_weight: 500,
		},
		"function.method.call": {
			color: color.orange,
			font_style: "normal",
			font_weight: 500,
		},
		"function.decorator": {
			color: color.orange,
			font_style: "normal",
			font_weight: 500,
		},
	};
}
