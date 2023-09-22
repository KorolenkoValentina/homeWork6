// Створіть класи Circle, Rectangle, Square і Triangle.
//  У кожного з них є загальнодоступний метод calculateArea. 
//  У кожної фігури є загальнодоступні властивості - колір і назва, які не можна змінювати після створення.
//  У Square і Rectangle зі свого боку є ще додатковий метод print, який виводить рядок із формулою розрахунку площі


abstract class Shape {
    constructor(public readonly name: string, public readonly color: string) {}

    abstract calculateArea(): number
   
}


class Circle extends Shape{
    constructor(public readonly radius: number, color: string) {
        super("Circle", color);
       
    }

    calculateArea(): number {
        return Math.PI * this.radius ** 2;
        // return Math.PI * Math.pow(this.radius, 2)
    }
}

class Rectangle extends Shape{
    constructor(public readonly width: number, public readonly height: number, color: string) {
        super("Rectangle", color);
    }

    calculateArea(): number {
        return this.width * this.height;
    }

    print(): void {
        console.log(`${this.name} Area Formula: width * height`);
    }
}

class Square extends  Shape {
    constructor(public readonly sideLength: number, color: string) {
        super("Square", color);
    }

    calculateArea(): number {
        return this.sideLength * this.sideLength;
    }

    print(): void {
        console.log(`${this.name} Square Area Formula: sideLength * sideLength`);
    }
}
class Triangle extends Shape {
    constructor(public readonly base: number, public readonly height: number, color: string) {
        super("Triangle", color);
    }

    calculateArea(): number {
        return (this.base * this.height) / 2;
    }
}