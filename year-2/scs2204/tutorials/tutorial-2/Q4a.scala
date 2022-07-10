//Question 4 part a
//using @main instead of "extends App" because using scala 3

def normalPay(numOfWorkingHours: Int) : Double = numOfWorkingHours * 250.0
def OTPay(numOfOTHours: Int) : Double = numOfOTHours * 85
def tax(salary: Double) : Double = salary*0.12
def takeHomeIncome(numOfWorkingHours: Int, numOfOTHours: Int) : Double = {
    val salary = normalPay(numOfWorkingHours) + OTPay(numOfOTHours)
    salary - tax(salary)
}

@main def main(): Unit = {
    val nh = 40
    val ot = 30
    println(s"Take home salary for ${nh} normal working hours and ${ot} ot hours = Rs. ${takeHomeIncome(nh, ot)}")
}
