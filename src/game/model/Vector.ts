export class Vector {
    x: number;
    y: number;

    constructor(x: number, y: number) {
        this.x = x;
        this.y = y;
    }

    getMagnitude(): number {
        return Math.sqrt(this.x ** 2 + this.y ** 2);
    }

    getCopy(): Vector {
        return new Vector(this.x, this.y);
    }

    getNormalized(): Vector {
        const magnitude = this.getMagnitude();
        return new Vector(this.x / magnitude, this.y / magnitude);
    }

    equals(other: Vector): boolean {
        return this.x === other.x && this.y === other.y;
    }
}
