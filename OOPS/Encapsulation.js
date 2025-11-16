// Encapsulation is binding all data to a single unit

class BankAccount {
  #balance = 0;
  constructor(owner) {
    this.owner = owner;
  }

  deposite(amount) {
    if (amount < 0) {
      console.log("Invalid Amount");
    } else {
      console.log(`${amount} is added to BankAccount `);
      this.#balance += amount;
    }
  }
  withdraw(amount) {
    if (amount > 0 && amount <= this.#balance) {
      this.#balance -= amount;
      console.log(`${amount} is debited from your account `);
    } else if (amount < 0) {
      console.log("Invalid amount");
    } else if (amount > this.#balance) {
      console.log("Amount is Large than BackBalance");
    }
  }

  getBalance() {
    return this.#balance;
  }
}

let acc1 = new BankAccount("Rajat");

acc1.deposite(1000);
acc1.withdraw(200);
console.log(acc1.getBalance());
