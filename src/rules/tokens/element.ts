import type { Color } from "interfaces";

export function element(color: Color) {
	return {
		"element.active": color.background,
		"element.disabled": color.muted,
		"element.hover": color.surface,
		"element.selected": color.surface,
	};
}
