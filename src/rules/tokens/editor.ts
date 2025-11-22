import type { Color } from "interfaces"

export function editor(color: Color) {
	return {
		"editor.foreground": color.text,
		"editor.background": color.background,
		"editor.gutter.background": color.background,
		"editor.subheader.background": color.background,

		"editor.document_highlight.read_background": color.background,
		"editor.document_highlight.write_background": color.red,
		"editor.document_highlight.bracket_background": color.surface,

		"editor.line_number": color.muted,
		"editor.active_line_number": color.red,
		"editor.active_line.background": color.surface,
		"editor.highlighted_line.background": color.surface,

		"editor.wrap_guide": color.border,
		"editor.active_wrap_guide": color.border,
		"editor.indent_guide": color.border,
		"editor.indent_guide_active": color.border,
		"editor.invisible": color.surface
	}
}
