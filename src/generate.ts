import type { Color } from "interfaces";
import { createEditor, createPlayer, createSyntax } from "rules";

export function generate(variant: string, palette: Color) {
    return {
        name: `Adonai`,
        author: "uaibritto <uaibritto@icloud.com>",
        themes: [
            {
                appearance: variant.toLowerCase(),
                name: `Adonai ${variant}`,
                style: {
                    "background.appearance": "opaque",
                    accents: [...Object.values(palette)],
                    ...createEditor(palette),
                    syntax: createSyntax(palette),
                    player: createPlayer(palette),
                },
            },
        ],
    };
}
