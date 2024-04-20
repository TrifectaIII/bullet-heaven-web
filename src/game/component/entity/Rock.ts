
class Rock implements Entity {
    location: Vector;
    size: number;
    private graphics: GraphicsContext;
    private static readonly graphics
    constructor(location: Vector, size: number) {

        this.location = location;
        this.size = size;
        this.graphics = new Graphics();
    }
    getContainer(): Container {
        throw new Error("Method not implemented.");
    }
    update(screenSize: number, screenPosition: Vector) {}
}
