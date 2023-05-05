// class Parent {
//     constructor(
//         public name: string,
//         public age: number,
//         public address: string,
//     ) { }

//     makeSleep(hours: number): void {
//         //return `This ${this.name} will sleep for ${hours}`;
//         console.log(`This ${this.name} will sleep for ${hours}`);

//     }
// }


// class Student1 extends Parent {
//     constructor(
//         public name: string,
//         public age: number,
//         public address: string,
//     ) {
//         super(name, age, address);
//     }
// }
// const std = new Student1('josi', 24, 'uganda');
// std.makeSleep(6)

class Parent {
    name: string;
    age: number;
    address: string;

    constructor(name: string, age: number, address: string) {
        this.name = name;
        this.age = age;
        this.address = address;
    }

    makeSleep(hours: number): string {
        return `This ${this.name} will sleep for ${hours}`;
    }
}

class Student1 extends Parent {
    constructor(name: string, age: number, address: string) {
        super(name, age, address);
    }
}

const student1 = new Student1('Mr.X', 15, 'Uganda');
student1.makeSleep(6);

class Teacher extends Parent {
    designation: string

    constructor(name: string, age: number, address: string, designation: string) {
        super(name, age, address)
        this.designation = designation;
    }

    takeClasses(numOfClass: number): string {
        return `This ${this.name} will take ${numOfClass} class`;
    }
}
const teacher1 = new Teacher('Mr.Y', 35, 'Uganda', 'Msc');
teacher1.takeClasses(5)