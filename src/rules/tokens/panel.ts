import type { Color } from "interfaces"

export function panel(color: Color) {
	return {
		"panel.background": color.background,
		"panel.focused_border": color.border,
		"panel.indent_guide": color.border,
		"panel.indent_guide_hover": color.border,
		"panel.indent_guide_active": color.red
	}
}
