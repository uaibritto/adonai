import type { Color } from "interfaces"

export function icon(color: Color) {
	return {
		icon: color.text,
		"icon.accent": color.red,
		"icon.disabled": color.muted,
		"icon.muted": color.muted,
		"icon.placeholder": color.muted
	}
}
