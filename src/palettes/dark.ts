import type { Color } from "interfaces/colors";

export const variant = "dark" as const;

export const palette: Color = {
	background: "#1a1825",
	surface: "#252528",
	border: "#3b3947",

	comm: "#524f63",
	text: "#f2f2f3",
	muted: "#e5e4e7",

	info: "#6686cc",
	success: "#66ccac",
	warning: "#d6b85c",
	danger: "#d18e61",
	conflict: "#705cd6",

	amber: "#f9ab56",
	black: "#191724",
	blue: "#51a2ff",
	cyan: "#53eafd",
	fuchsia: "#ed6bff",
	gray: "#9f9fa9",
	green: "#35cb8a",
	indigo: "#7c86ff",
	lime: "#ade376",
	orange: "#fe8760",
	pink: "#fb64b6",
	purple: "#c27aff",
	red: "#ff6c78",
	teal: "#46ecd5",
	white: "#fffcf6",
	yellow: "#fcd171",
} as const;
