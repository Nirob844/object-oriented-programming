interface Vehicle {
    startEngine(): void;
    stopEngine(): void;
    move?(): void;
}

class Car implements Vehicle {
    constructor(
        public name: string,
        public brand: string,
        public model: number
    ) { }
    startEngine(): void {
        console.log(" I am starting engine... ");
    }
    stopEngine(): void {
        console.log(" I am syopping engine");
    }
    move(): void {
        console.log(" I am syopping engine");
    }
}
const vehicle1 = new Car("Car", "Toyota", 2000);


//abstract class

abstract class Vehicle1 {
    constructor(
        public name: string,
        public brand: string,
        public model: number
    ) { }
    abstract startEngine(): void
    abstract stopEngine(): void
    abstract move(): void

}

class Car1 extends Vehicle1 {
    startEngine(): void {
        console.log(" I am starting engine... ");
    }
    stopEngine(): void {
        console.log(" I am stopping engine... ");
    }
    move(): void {
        console.log(" I am syopping engine");
    }

}

const car1 = new Car1('Car', 'Honda', 2015)