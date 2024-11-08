

# Why Are Type Guards Necessary?


In TypeScript, Type Guards help us figure out what type a variable is during runtime. Since TypeScript is a superset of JavaScript, sometimes we don’t know the type of a variable until the code runs, especially when working with union types . Type Guards help by narrowing down these types so TypeScript knows how to handle them.


Different Types of Type Guards and Their Use Cases


### 1. typeof Type Guard#

The typeof Type Guard is one of the simplest and most common. It’s used to check for primitive types like string, number, boolean, and symbol.

Use Case: When you have a union of basic types and need to perform specific operations based on the type.

typescript
Copy code
function formatInput(input: string | number): string {
    if (typeof input === "string") {
        return input.toUpperCase(); // This only works on strings
    } else {
        return input.toFixed(2); // This only works on numbers
    }
}
In this example, typeof input lets TypeScript know if input is a string or a number, so we can safely call .toUpperCase() or .toFixed() without errors.

### 2. instanceof Type Guard
The instanceof Type Guard checks if an object is an instance of a particular class. This is useful when working with custom classes.

Use Case: When you have multiple classes or objects and want to handle them based on their specific class type.

typescript
Copy code
class Dog {
    bark() {
        console.log("Woof!");
    }
}

class Cat {
    meow() {
        console.log("Meow!");
    }
}

function makeSound(animal: Dog | Cat) {
    if (animal instanceof Dog) {
        animal.bark(); // Safe to call, because we know it's a Dog
    } else {
        animal.meow(); // Safe to call, because we know it's a Cat
    }
}
In this example, instanceof allows us to call bark or meow only if animal is of the right class type.

### 3. Custom Type Guard Functions (User-Defined Type Guards)
Custom Type Guards are functions that we write to perform more complex checks. They return a boolean, and TypeScript recognizes them as a way to confirm a specific type.

Use Case: When the logic for determining a type is complex and typeof or instanceof won’t work.

typescript
Copy code
type Fish = { swim: () => void };
type Bird = { fly: () => void };

function isFish(pet: Fish | Bird): pet is Fish {
    return (pet as Fish).swim !== undefined;
}

function handlePet(pet: Fish | Bird) {
    if (isFish(pet)) {
        pet.swim(); // TypeScript knows `pet` is a Fish here
    } else {
        pet.fly(); // TypeScript knows `pet` is a Bird here
    }
}
Here, isFish is a custom Type Guard function. By checking if swim is defined, it lets TypeScript understand that pet is a Fish, so we can safely call swim().

### 4. in Operator Type Guard
The in Type Guard checks if an object has a specific property. It’s helpful for objects with different properties.

Use Case: When you’re dealing with objects that may have different properties but aren’t instances of specific classes.

```typescript
Copy code
type Car = { drive: () => void };
type Boat = { sail: () => void };

function operate(vehicle: Car | Boat) {
    if ("drive" in vehicle) {
        vehicle.drive(); 
    } else {
        vehicle.sail(); 
    }
}
````
