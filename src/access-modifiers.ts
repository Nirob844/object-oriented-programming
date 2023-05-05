class BankAccount {
    constructor(
        public id: number,
        public name: string,
        private _balance: number
    ) { }
    getBalance() {
        console.log(`My current balance is ${this._balance}`);
    }
    addDeposit(amount: number) {
        this._balance = this._balance + amount;
    }
}
const person = new BankAccount(1, 'person', 20)
console.log(person);
