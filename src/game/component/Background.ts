import { Container, Graphics } from "pixi.js";

import { Vector } from "../model/Vector";

export class Background {
    private rendererSize: Vector;
    private graphics: Graphics;

    constructor(width: number, height: number) {
        this.rendererSize = new Vector(width, height);
        this.graphics = new Graphics();
        this.build(this.graphics);
    }

    update(width: number, height: number) {
        // only bother redrawing if the app has actually changed size
        const newSize = new Vector(width, height);
        if (newSize !== this.rendererSize) {
            this.rendererSize = newSize;
            this.graphics.clear();
            this.build(this.graphics);
        }
    }

    getContainer(): Container {
        return this.graphics;
    }

    private build(bg: Graphics) {
        // square in the middle of the screen, bounded by the smaller dimension
        const side = Math.min(this.rendererSize.x, this.rendererSize.y);
        bg.rect(-side / 2, -side / 2, side, side).fill({ color: 0xffffff });
        bg.x = this.rendererSize.x / 2;
        bg.y = this.rendererSize.y / 2;
    }
}
