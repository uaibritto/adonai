import type { Color } from "interfaces"

export function border(color: Color) {
	return {
		border: color.border,
		"border.disabled": color.border,
		"border.focused": color.border,
		"border.selected": color.border,
		"border.transparent": color.background,
		"border.variant": color.border
	}
}
