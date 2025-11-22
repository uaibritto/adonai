import type { Color, Syntax } from "interfaces"

export function tag(color: Color): Record<string, Syntax> {
	return {
		tag: {
			color: color.red,
			font_style: "normal",
			font_weight: 500
		},
		"tag.attribute": {
			color: color.green,
			font_style: "normal",
			font_weight: 500
		},
		"tag.delimiter": {
			color: color.green,
			font_style: "normal",
			font_weight: 500
		},
		"tag.doctype": {
			color: color.muted,
			font_style: "normal",
			font_weight: 500
		}
	}
}
