import { Container, Graphics, GraphicsContext } from "pixi.js";

import { Vector } from "../../model/Vector";
import { Entity } from "./Entity";

class Rock implements Entity {
    location: Vector;

    size: number;

    private graphics: Graphics;

    private static readonly graphicsContext: GraphicsContext =
        new GraphicsContext()
            .circle(0, 0, 1)
            .fill({ color: 0x888888 })
            .stroke({ width: 2, color: 0xbbbbbb });

    constructor(location: Vector, size: number) {
        this.location = location;
        this.size = size;
        this.graphics = new Graphics(Rock.graphicsContext);
    }

    getContainer(): Container {
        return this.graphics;
    }

    update(screenSize: number, screenPosition: Vector) {}
}
