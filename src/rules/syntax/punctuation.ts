import type { Color, Syntax } from "interfaces"

export function punctuation(color: Color): Record<string, Syntax> {
	return {
		punctuation: {
			color: color.muted,
			font_style: "normal",
			font_weight: 500
		},
		"punctuation.delimiter": {
			color: color.text,
			font_style: "normal",
			font_weight: 500
		},
		"punctuation.bracket": {
			color: color.text,
			font_style: "normal",
			font_weight: 500
		},
		"punctuation.special": {
			color: color.fuchsia,
			font_style: "normal",
			font_weight: 500
		},
		"punctuation.special.symbol": {
			color: color.purple,
			font_style: "normal",
			font_weight: 500
		},
		"punctuation.list_marker": {
			color: color.blue,
			font_style: "normal",
			font_weight: 500
		}
	}
}
