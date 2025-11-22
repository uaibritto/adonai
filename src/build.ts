import { generate } from "generate";
import type { Color } from "interfaces";
import { available, type PaletteName } from "palettes";

function parseArg(name: string) {
    const arg = process.argv.find((a) => a.startsWith(`--${name}=`));
    if (arg) return arg.split("=")[1];
    return null;
}

const cliPalette = parseArg("palette");
const envPalette = process.env.PALETTE || (process.env.BUN_PALETTE ?? null);
const paletteName = (cliPalette ?? envPalette ?? "light") as PaletteName;

if (!Object.hasOwn(available, paletteName)) {
    console.error(
        `Paleta inválida: ${paletteName}. Disponíveis: ${Object.keys(available).join(", ")}`,
    );
    process.exit(1);
}

const palette = available[paletteName] as Color;

async function build(variant: "Light" | "Dark", _paletteName: string) {
    const theme = generate(variant, palette);

    const filename = `dist/lule-${variant.toLowerCase()}.json`;
    await Bun.write(filename, JSON.stringify(theme, null, 4));
    console.log("Gerado:", filename);
}

if (paletteName === "light") {
    await build("Light", paletteName);
} else if (paletteName === "dark") {
    await build("Dark", paletteName);
}
