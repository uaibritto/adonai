import type { Color } from "interfaces";

export function misc(color: Color) {
	return {
		background: color.background,

		"drop_target.background": color.surface,
		"elevated_surface.background": color.background,
		"link_text.hover": color.muted,

		"pane.focused_border": color.border,
		"pane_group.border": color.border,

		"search.match_background": color.surface,
		"surface.background": color.surface,
		"status_bar.background": color.background,

		"tab_bar.background": color.background,
		"tab.active_background": color.surface,
		"tab.inactive_background": color.background,

		"title_bar.background": color.background,
		"title_bar.inactive_background": color.background,

		"toolbar.background": color.background,
	};
}
