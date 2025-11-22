import type { Color } from "interfaces"

export function git(color: Color) {
	return {
		conflict: color.conflict,
		"conflict.background": color.conflict,
		"conflict.border": color.conflict,

		created: color.text,
		"created.background": color.surface,
		"created.border": color.surface,

		deleted: color.danger,
		"deleted.background": color.danger,
		"deleted.border": color.danger,

		hidden: color.text,
		"hidden.background": color.surface,
		"hidden.border": color.surface,

		ignored: color.muted,
		"ignored.background": color.surface,
		"ignored.border": color.surface,

		modified: color.red,
		"modified.background": color.red,
		"modified.border": color.red
	}
}
