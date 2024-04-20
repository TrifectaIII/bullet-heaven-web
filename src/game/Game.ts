import { Application } from "pixi.js";

import { Background } from "./component/Background";

export const startGame = async () => {
    //create pixi app
    const app = new Application();
    // wait for renderer to initialize
    await app.init({ background: "black", resizeTo: document.body });
    // append the apps canvas to the page
    document.body.appendChild(app.canvas);

    const background = new Background(app.renderer.width, app.renderer.height);

    app.stage.addChild(background.getContainer());

    // ticker runs each frame
    app.ticker.add((ticker) => {
        background.update(app.renderer.width, app.renderer.height);
    });
};
