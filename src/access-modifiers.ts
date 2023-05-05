class BankAccount1 {
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
const myAccount = new BankAccount1(1, 'myAccount', 20)
console.log(myAccount);
