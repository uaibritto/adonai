import type { Color } from "interfaces/colors"
import * as Dark from "palettes/dark"
import * as Light from "palettes/light"

export const available: Record<string, Color> = {
	[Light.variant]: Light.palette,
	[Dark.variant]: Dark.palette
}

export type PaletteName = keyof typeof available
