class BankAccount2 {
    constructor(
        public id: number,
        public name: string,
        private _balance: number
    ) { }

    public get balance(): number {
        return this._balance
    }

    public set deposit(amount: number) {
        this._balance = this._balance + amount;
    }
}
const myAccount2 = new BankAccount2(1, 'myAccount', 20)
myAccount2.deposit = 30
console.log(myAccount2.balance);
