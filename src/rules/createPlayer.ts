import type { Color, Player } from "interfaces"
import { lighten } from "utils"

export function createPlayer(color: Color): Player[] {
	return [
		{
			cursor: color.red,
			selection: lighten(color.amber, 20),
			background: color.surface
		}
	]
}
