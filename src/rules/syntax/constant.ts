import type { Color, Syntax } from "interfaces"

export function constant(color: Color): Record<string, Syntax> {
	return {
		constant: {
			color: color.indigo,
			font_style: "normal",
			font_weight: 500
		},
		"constant.builtin": {
			color: color.indigo,
			font_style: "normal",
			font_weight: 500
		},
		"constant.macro": {
			color: color.indigo,
			font_style: "normal",
			font_weight: 500
		}
	}
}
