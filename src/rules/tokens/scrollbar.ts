import type { Color } from "interfaces";
import { darken } from "utils";

export function scrollbar(color: Color) {
	return {
		"scrollbar.track.background": color.surface,
		"scrollbar.thumb.background": darken(color.surface, 5),
		"scrollbar.thumb.hover_background": darken(color.surface, 10),
		"scrollbar.track.border": color.border,
		"scrollbar.thumb.border": darken(color.border, 10),
	};
}
