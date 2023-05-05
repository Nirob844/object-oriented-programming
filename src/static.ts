class Counter {
    static count: number = 20;

    static increment(): number {
        return (Counter.count = Counter.count + 1);
    }
    static decrement(): number {
        return (Counter.count = Counter.count - 1);
    }
}

console.log(Counter.increment());
console.log(Counter.decrement());
