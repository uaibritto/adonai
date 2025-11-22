import type { Color } from "interfaces"

export function ghost(color: Color) {
	return {
		"ghost_element.active": color.background,
		"ghost_element.disabled": color.muted,
		"ghost_element.hover": color.surface,
		"ghost_element.selected": color.surface
	}
}
