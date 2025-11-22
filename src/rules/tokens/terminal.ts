import type { Color } from "interfaces"

export function terminal(color: Color) {
	return {
		"terminal.background": color.background,
		"terminal.foreground": color.text,
		"terminal.bright_foreground": color.text,
		"terminal.dim_foreground": color.text,
		"terminal.ansi.black": color.black,
		"terminal.ansi.blue": color.blue,
		"terminal.ansi.cyan": color.cyan,
		"terminal.ansi.green": color.green,
		"terminal.ansi.magenta": color.indigo,
		"terminal.ansi.red": color.red,
		"terminal.ansi.white": color.white,
		"terminal.ansi.yellow": color.yellow,
		"terminal.ansi.bright_black": color.black,
		"terminal.ansi.bright_blue": color.blue,
		"terminal.ansi.bright_cyan": color.cyan,
		"terminal.ansi.bright_green": color.green,
		"terminal.ansi.bright_magenta": color.indigo,
		"terminal.ansi.bright_red": color.red,
		"terminal.ansi.bright_white": color.white,
		"terminal.ansi.bright_yellow": color.yellow,
		"terminal.ansi.dim_black": color.black,
		"terminal.ansi.dim_blue": color.blue,
		"terminal.ansi.dim_cyan": color.cyan,
		"terminal.ansi.dim_green": color.green,
		"terminal.ansi.dim_magenta": color.indigo,
		"terminal.ansi.dim_red": color.red,
		"terminal.ansi.dim_white": color.white,
		"terminal.ansi.dim_yellow": color.yellow
	}
}
