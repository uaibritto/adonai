import type { Color, Syntax } from "interfaces";

export function keyword(color: Color): Record<string, Syntax> {
	return {
		keyword: {
			color: color.red,
			font_style: "normal",
			font_weight: 500,
		},
		"keyword.modifier": {
			color: color.amber,
			font_style: "normal",
			font_weight: 500,
		},
		"keyword.type": {
			color: color.fuchsia,
			font_style: "normal",
			font_weight: 500,
		},
		"keyword.coroutine": {
			color: color.fuchsia,
			font_style: "normal",
			font_weight: 500,
		},
		"keyword.function": {
			color: color.red,
			font_style: "normal",
			font_weight: 500,
		},
		"keyword.operator": {
			color: color.indigo,
			font_style: "normal",
			font_weight: 500,
		},
		"keyword.import": {
			color: color.red,
			font_style: "normal",
			font_weight: 500,
		},
		"keyword.export": {
			color: color.red,
			font_style: "normal",
			font_weight: 500,
		},
		"keyword.repeat": {
			color: color.red,
			font_style: "normal",
			font_weight: 500,
		},
		"keyword.return": {
			color: color.red,
			font_style: "normal",
			font_weight: 500,
		},
		"keyword.debug": {
			color: color.purple,
			font_style: "normal",
			font_weight: 500,
		},
		"keyword.exception": {
			color: color.red,
			font_style: "normal",
			font_weight: 500,
		},
		"keyword.conditional": {
			color: color.red,
			font_style: "normal",
			font_weight: 500,
		},
		"keyword.conditional.ternary": {
			color: color.red,
			font_style: "normal",
			font_weight: 500,
		},
		"keyword.directive": {
			color: color.red,
			font_style: "normal",
			font_weight: 500,
		},
		"keyword.directive.define": {
			color: color.red,
			font_style: "normal",
			font_weight: 500,
		},
	};
}
