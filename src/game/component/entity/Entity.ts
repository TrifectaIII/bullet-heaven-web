import { Container } from "pixi.js";

import { Vector } from "../../model/Vector";

export interface Entity {
    location: Vector;
    size: number;
    getContainer(): Container;
    update(screenSize: number, screenPosition: Vector): void;
}
