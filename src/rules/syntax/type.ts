import type { Color, Syntax } from "interfaces"

export function type(color: Color): Record<string, Syntax> {
	return {
		type: {
			color: color.text,
			font_style: "normal",
			font_weight: 500
		},
		"type.builtin": {
			color: color.pink,
			font_style: "normal",
			font_weight: 500
		},
		"type.definition": {
			color: color.fuchsia,
			font_style: "normal",
			font_weight: 500
		},
		"type.interface": {
			color: color.fuchsia,
			font_style: "normal",
			font_weight: 500
		},
		"type.super": {
			color: color.fuchsia,
			font_style: "normal",
			font_weight: 500
		},
		"type.class.definition": {
			color: color.fuchsia,
			font_style: "normal",
			font_weight: 500
		}
	}
}
