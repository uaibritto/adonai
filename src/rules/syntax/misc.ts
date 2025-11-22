import type { Color, Syntax } from "interfaces"

export function misc(color: Color): Record<string, Syntax> {
	return {
		module: {
			color: color.text,
			font_style: "normal",
			font_weight: 500
		},
		label: {
			color: color.fuchsia,
			font_style: "normal",
			font_weight: 500
		},
		character: {
			color: color.text,
			font_style: "normal",
			font_weight: 500
		},
		"character.special": {
			color: color.text,
			font_style: "normal",
			font_weight: 500
		},
		boolean: {
			color: color.fuchsia,
			font_style: "normal",
			font_weight: 500
		},
		number: {
			color: color.cyan,
			font_style: "normal",
			font_weight: 500
		},
		"number.float": {
			color: color.orange,
			font_style: "normal",
			font_weight: 500
		},
		attribute: {
			color: color.green,
			font_style: "normal",
			font_weight: 500
		},
		property: {
			color: color.pink,
			font_style: "normal",
			font_weight: 500
		},
		constructor: {
			color: color.indigo,
			font_style: "oblique",
			font_weight: 500
		},
		operator: {
			color: color.text,
			font_style: "normal",
			font_weight: 500
		},
		"diff.plus": {
			color: color.green,
			font_style: "normal",
			font_weight: 500
		},
		"diff.minus": {
			color: color.red,
			font_style: "normal",
			font_weight: 500
		},
		parameter: {
			color: color.orange,
			font_style: "normal",
			font_weight: 500
		},
		field: {
			color: color.lime,
			font_style: "normal",
			font_weight: 500
		},
		namespace: {
			color: color.indigo,
			font_style: "normal",
			font_weight: 500
		},
		float: {
			color: color.orange,
			font_style: "normal",
			font_weight: 500
		},
		symbol: {
			color: color.amber,
			font_style: "normal",
			font_weight: 500
		},
		emphasis: {
			color: color.lime,
			font_style: "normal",
			font_weight: 500
		},
		"emphasis.strong": {
			color: color.orange,
			font_style: "normal",
			font_weight: 500
		},
		embedded: {
			color: color.orange,
			font_style: "normal",
			font_weight: 500
		},
		"text.literal": {
			color: color.pink,
			font_style: "normal",
			font_weight: 500
		},
		concept: {
			color: color.green,
			font_style: "normal",
			font_weight: 500
		},
		enum: {
			color: color.red,
			font_style: "normal",
			font_weight: 500
		},
		hint: {
			color: color.muted,
			font_style: "normal",
			font_weight: 500
		},
		link_text: {
			color: color.blue,
			font_style: "normal",
			font_weight: 500
		},
		link_uri: {
			color: color.muted,
			font_style: "normal",
			font_weight: 500
		},
		parent: {
			color: color.blue,
			font_style: "normal",
			font_weight: 500
		},
		predictive: {
			color: color.blue,
			font_style: "normal",
			font_weight: 500
		},
		predoc: {
			color: color.blue,
			font_style: "normal",
			font_weight: 500
		},
		primary: {
			color: color.blue,
			font_style: "normal",
			font_weight: 500
		},
		title: {
			color: color.pink,
			font_style: "normal",
			font_weight: 500
		},
		variant: {
			color: color.pink,
			font_style: "normal",
			font_weight: 500
		}
	}
}
