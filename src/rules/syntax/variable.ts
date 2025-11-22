import type { Color, Syntax } from "interfaces";

export function variable(color: Color): Record<string, Syntax> {
	return {
		variable: {
			color: color.text,
			font_style: "normal",
			font_weight: 500,
		},
		"variable.builtin": {
			color: color.text,
			font_style: "normal",
			font_weight: 500,
		},
		"variable.parameter": {
			color: color.text,
			font_style: "normal",
			font_weight: 500,
		},
		"variable.member": {
			color: color.text,
			font_style: "normal",
			font_weight: 500,
		},
		"variable.special": {
			color: color.fuchsia,
			font_style: "normal",
			font_weight: 500,
		},
	};
}
