import tiny from "tinycolor2"

export const lighten = (color: string, amount: number = 10): string => {
	const colorObj = tiny(color)
	return colorObj.lighten(amount).toHexString()
}
