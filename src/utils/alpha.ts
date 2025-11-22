import tiny from "tinycolor2";

export const alpha = (color: string, alpha: number): string => {
    const colorObj = tiny(color);
    return colorObj.setAlpha(alpha).toHexString();
};
