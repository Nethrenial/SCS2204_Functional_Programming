
// implementing the Account structure
class Account(
    var accountNo: String,
    var NIC: String,
    var accountHolder: String,
    var balance: Double
) {

  def transfer(amount: Double, otherAccount: Account): Unit = {
      otherAccount.deposit(amount)
      this.withdraw(amount)
  }

  def deposit(amount: Double): Unit = {
    this.balance = this.balance + amount
  }

  def withdraw(amount: Double): Unit = {
      this.balance = this.balance - amount
  }

  override def toString(): String = {
    s"""Account No. ${this.accountNo}:
          Owner: 
            Name = ${this.accountHolder}   
            NIC = ${this.NIC}
          Balance: ${this.balance}
          Current interest rate: ${if (this.balance > 0) 0.05 else -0.1}
    """
  }
}


// implementing bank methods

// list all the overdrafted accounts of the given bank
def listOverdraftedAccount(accounts: List[Account], mode: String = "compact") : Unit = {
  if (mode == "compact") {
    accounts.filter(acc => acc.balance < 0).foreach((acc) => 
    println(s"Account No. ${acc.accountNo}:\n\tBalance: ${acc.balance}")
  )
  } else if (mode == "detailed") {
      accounts.filter(acc => acc.balance < 0).foreach((acc) =>println(acc))
  } else {
        println("Unsupported mode, either use \"compact\" to only print account number with balance or \"detailed\" to print with all details.Default is \"compact\".")
  }
}


def allAccountBalanceSum(accounts: List[Account]): Double = { 
  accounts.map((x)=>(x.balance)).reduce((x,y)=>(x+y)) 
}

def applyInterest(accounts: List[Account]): List[Account] = {
  val newBank = accounts.map((b) => {
    if (b.balance < 0) {
      b.balance = b.balance + 0.1*b.balance
    } 
    else {
      b.balance =  b.balance + 0.05*b.balance
    }
         b 
    })
    return newBank 
}


object main extends App {

  val account1 = Account("123-456-789", "200022203401", "Nethsara", 10000)
  val account2 = Account("143-124-556", "214215235v", "Max", 5000);
  val account3 = Account("145-426-797", "200022716144", "Nimal", -1000000)
  val account4 = Account("878-787-321", "200022232424", "Amal", 20000)
  val account5 = Account("123-130-465", "200124242351", "Kamal", -75000)
  val account6 = Account("809-654-123", "201242424324", "Sunimal", 1000)

  var bank = List(account1, account2, account3, account4, account5, account6)


  println("-------- PRINTING ALL THE ACCOUNTS IN THE BANK --------")
  bank.foreach(acc => println(acc))
  println("-------------------------------------------------------")


  println("----- TRANSFERING 1000 FROM account1 TO account2 -----")
  account1.transfer(1000, account2)

  println(account1)
  println(account2)
  println("-------------------------------------------------------")


  println("-------- PRINTING ALL THE OVERDRAFTED ACCOUNTS --------")
  listOverdraftedAccount(bank, "detailed")
  println("-------------------------------------------------------")

  println("-------- PERMANENTLY APPLY INTEREST TO ALL ACCOUNTS --------")
  bank = applyInterest(bank)

  bank.foreach(acc => println(acc))

  println("-------------------------------------------------------")

}
