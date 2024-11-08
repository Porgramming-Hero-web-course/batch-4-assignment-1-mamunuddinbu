{
    type Person = {
        name: string;
        age: number;
        email: string;
    }
    function validateKeys<T>(obj: T, keys: (keyof T)[]): boolean {
        return keys.every(key => key in obj);
    }
    
    
    const person: Person = { name: "Alice", age: 25, email: "alice@example.com" };
    console.log(validateKeys(person, ["name", "age"])); // Output: true
    // console.log(validateKeys(person, ["name", "address"]));  Output: false
    
    
}