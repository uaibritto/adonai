import type { Color } from "interfaces";

export function text(color: Color) {
	return {
		text: color.text,
		"text.accent": color.text,
		"text.disabled": color.muted,
		"text.muted": color.muted,
		"text.placeholder": color.muted,
	};
}
