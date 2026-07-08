//hiding of unaccessary  data from the users is called abstraction

// Create a class named ATMMachine. Get the wthdrawn amount as attribute. Create a function that calculates the ledger balance from current balance and display it.
class ATMMachine
{
    constructor(amt_withdrawn, current_balance)
    {
        this.amt_withdrawn = amt_withdrawn
        this.current_balance = current_balance
    }

    #calculateLedger()
    {
        let ledger_balance = this.current_balance - this.amt_withdrawn
        //console.log("Ledger Balance is : ", ledger_balance)
        return ledger_balance
    }

    displayBalance()
    {
        let balance = this.#calculateLedger()
        console.log("Balance is:", balance)
    }
}

const A1 = new ATMMachine(1000, 20000)

//A1.calculateLedger()