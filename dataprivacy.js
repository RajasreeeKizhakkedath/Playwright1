function createBankAccount(initial_balance) {
    let balance = initial_balance; // should keep this private

    return {
        amount = 1000,

        depositOfAmount(amount) {
            balance = balance + amount;
            console.log(balance);
        }, // used to return more than one value

        getBalance() {
            return balance;
        }
    }; // end of return
}