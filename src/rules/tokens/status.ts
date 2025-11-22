import type { Color } from "interfaces"

export function status(color: Color) {
	return {
		error: color.danger,
		"error.background": color.danger,
		"error.border": color.danger,

		hint: color.red,
		"hint.background": color.surface,
		"hint.border": color.surface,

		info: color.info,
		"info.background": color.info,
		"info.border": color.info,

		predictive: color.text,
		"predictive.background": color.surface,
		"predictive.border": color.border,

		renamed: color.muted,
		"renamed.background": color.surface,
		"renamed.border": color.surface,

		success: color.success,
		"success.background": color.success,
		"success.border": color.success,

		unreachable: color.text,
		"unreachable.background": color.surface,
		"unreachable.border": color.border,

		warning: color.warning,
		"warning.background": color.warning,
		"warning.border": color.warning
	}
}
