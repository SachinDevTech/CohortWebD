// class Circle {
//     constructor(radius, color) {
//         this.radius = radius;
//         this.color = color;
//     }

//     area() {
//         //    const area = this.radius * this.radius * Math.PI;
//         return this.radius * this.radius * Math.PI;
//     }

//     paint() {
//         console.log(`Painting with color ${this.color}`);
//     }

// }

// const circle = new Circle(7, "red")
// //  const area = circle.area();
// console.log(circle.area())



// Creating a base class named Shape:

class Shape {
    constructor(color) {
        this.color = color;
    }

    paint() {
        console.log(`Painting with color ${this.color}`);
    }

    area() {
        throw new Error('The area method must be implemented in the subclass');
    }

    getDescription() {
        return `A shape with color ${this.color}`;
    }
}

class Rectangle extends Shape {
    constructor(width, height, color) {
        super(color);  // Call the parent class constructor to set the color
        this.width = width;
        this.height = height;
    }

    area() {
        return this.width * this.height;
    }

    getDescription() {
        return `A rectangle with width ${this.width}, height ${this.height}, and color ${this.color}`;
    }
}


class Circle extends Shape {
    constructor(radius, color) {
        super(color);  // Call the parent class constructor to set the color
        this.radius = radius;
    }

    area() {
        return Math.PI * this.radius * this.radius;
    }

    getDescription() {
        return `A circle with radius ${this.radius} and color ${this.color}`;
    }
}


const circle2 = new Circle(20);
console.log(circle2.area());