import tiny from "tinycolor2"

export const darken = (color: string, amount: number = 10): string => {
	const colorObj = tiny(color)
	return colorObj.darken(amount).toHexString()
}
