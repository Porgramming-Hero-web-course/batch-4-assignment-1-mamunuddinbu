{
    class Car {

        constructor(public make: string,public model: string,public year: number) {
            this.make = make;
            this.model = model;
            this.year = year;
        }
    
        getCarAge(): number {
            const currentYear = new Date().getFullYear();
            return currentYear - this.year;
        }
    }
    
    // Sample Input
    const car = new Car("Honda", "Civic", 2018);
    console.log(car.getCarAge()); 
    
}