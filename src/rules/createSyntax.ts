import type { Color, Syntax } from "interfaces"
import { comment, constant, fn, keyword, misc, punctuation, str, tag, type, variable } from "rules/syntax"

export function createSyntax(color: Color): Record<string, Syntax> {
	return {
		...comment(color),
		...constant(color),
		...fn(color),
		...keyword(color),
		...misc(color),
		...punctuation(color),
		...str(color),
		...tag(color),
		...type(color),
		...variable(color)
	}
}
