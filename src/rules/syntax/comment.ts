import type { Color, Syntax } from "interfaces"

export const comment = (color: Color): Record<string, Syntax> => ({
	comment: {
		color: color.comm,
		font_style: "normal",
		font_weight: 500
	},
	"comment.doc": {
		color: color.comm,
		font_style: "normal",
		font_weight: 500
	},
	"comment.documentation": {
		color: color.comm,
		font_style: "normal",
		font_weight: 500
	},
	"comment.error": {
		color: color.red,
		font_style: "normal",
		font_weight: 500
	},
	"comment.warning": {
		color: color.orange,
		font_style: "normal",
		font_weight: 500
	},
	"comment.hint": {
		color: color.comm,
		font_style: "normal",
		font_weight: 500
	},
	"comment.todo": {
		color: color.comm,
		font_style: "normal",
		font_weight: 500
	},
	"comment.note": {
		color: color.comm,
		font_style: "normal",
		font_weight: 500
	}
})
