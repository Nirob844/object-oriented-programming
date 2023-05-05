class AnimalO {
    // public name: string;
    // public species: string;
    // public sound: string;

    constructor(
        public name: string,
        public species: string,
        public sound: string) {
        // this.name = name;
        // this.species = species;
        // this.sound = sound;
    }
    public makeSound() {
        console.log(`this ${this.name} says ${this.sound}`);
    }
}
const dog = new AnimalO('dogi', 'dog', 'ghaw ghaw');
dog.makeSound()