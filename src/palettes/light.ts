import type { Color } from "interfaces/colors";

export const variant = "light" as const;

export const palette: Color = {
	background: "#fafafa",
	surface: "#f2f2f3",
	border: "#e5e4e7",

	comm: "#adabba",
	text: "#3a3847",
	muted: "#5d5a72",

	info: "#5c85d6",
	success: "#51bf40",
	warning: "#d6b85c",
	danger: "#d16161",
	conflict: "#8270db",

	amber: "#f9ab56",
	black: "#17161d",
	blue: "#008eff",
	cyan: "#30bded",
	fuchsia: "#eb7acc",
	gray: "#6d697a",
	green: "#23b578",
	indigo: "#6584e2",
	lime: "#77c91f",
	orange: "#fd7e45",
	pink: "#ff6d8d",
	purple: "#8270db",
	red: "#ff4d5d",
	teal: "#5dccb4",
	white: "#fdfdfe",
	yellow: "#f9b235",
} as const;
