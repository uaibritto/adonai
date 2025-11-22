import type { Color, Syntax } from "interfaces"

export function str(color: Color): Record<string, Syntax> {
	return {
		string: {
			color: color.success,
			font_style: "normal",
			font_weight: 500
		},
		"string.documentation": {
			color: color.purple,
			font_style: "normal",
			font_weight: 500
		},
		"string.regex": {
			color: color.pink,
			font_style: "oblique",
			font_weight: 500
		},
		"string.escape": {
			color: color.fuchsia,
			font_style: "oblique",
			font_weight: 500
		},
		"string.special": {
			color: color.orange,
			font_style: "normal",
			font_weight: 500
		},
		"string.special.path": {
			color: color.indigo,
			font_style: "normal",
			font_weight: 500
		},
		"string.special.symbol": {
			color: color.amber,
			font_style: "normal",
			font_weight: 500
		},
		"string.special.url": {
			color: color.cyan,
			font_style: "normal",
			font_weight: 500
		},
		"string.doc": {
			color: color.muted,
			font_style: "normal",
			font_weight: 500
		}
	}
}
