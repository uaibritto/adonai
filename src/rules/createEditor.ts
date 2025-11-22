import type { Color } from "interfaces";
import {
	border,
	editor,
	element,
	ghost,
	git,
	icon,
	misc,
	panel,
	scrollbar,
	status,
	terminal,
	text,
} from "rules/tokens";

export function createEditor(color: Color) {
	return {
		...border(color),
		...editor(color),
		...element(color),
		...ghost(color),
		...git(color),
		...icon(color),
		...misc(color),
		...panel(color),
		...scrollbar(color),
		...status(color),
		...terminal(color),
		...text(color),
	};
}
