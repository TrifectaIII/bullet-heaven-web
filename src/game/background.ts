import { Graphics } from "pixi.js";

export const Background = () => {
    const graphics = new Graphics();
    graphics.beginFill(0xffffff);
    graphics.drawRect(0, 0, 800, 600);
    graphics.endFill();
    return graphics;
}