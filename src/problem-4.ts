type Circle = {
    shape: "circle";
    radius: number;
};

type Rectangle = {
    shape: "rectangle";
    width: number;
    height: number;
};

type Shape = Circle | Rectangle;

function calculateShapeArea(shape: Shape): number {
    if (shape.shape === "circle") {
        // Calculate area for circle: π * radius^2
        return Math.PI * shape.radius ** 2;
    } else if (shape.shape === "rectangle") {
        // Calculate area for rectangle: width * height
        return shape.width * shape.height;
    }
    throw new Error("Invalid shape type");
}

// Sample Input 1
const circleArea = calculateShapeArea({ shape: "circle", radius: 5 });
console.log(circleArea); // Output: 78.54

// Sample Input 2
const rectangleArea = calculateShapeArea({ shape: "rectangle", width: 4, height: 6 });
console.log(rectangleArea); // Output: 24
