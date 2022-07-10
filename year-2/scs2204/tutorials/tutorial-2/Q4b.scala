// Question 4 part b
//using @main instead of "extends App" because using scala 3


def profit(price: Int): Int = income(price) - cost(price)
def cost(price: Int) : Int = 500 + 3 * attendees(price)
def income(price: Int) : Int = price * attendees(price)   
def attendees(price: Int): Int = 120 - (price - 15)/5*20

@main def main(): Unit = {
    //for an example let's find the best profit
    var maxProfit = 0
    var ticketPriceForMaxProfit = 0

    for(priceFactor <- 1 to 9) {
        val ticketPrice = priceFactor * 5
        val newProfit = profit(ticketPrice)
        println(s"Ticket price = Rs.${ticketPrice}, profit is Rs. ${newProfit}")
        if (newProfit > maxProfit) {
            maxProfit = newProfit
            ticketPriceForMaxProfit = ticketPrice
        }
    }
    println(s"Max profit can be earned by setting ticket price to Rs. ${ticketPriceForMaxProfit}, and it will give Rs. ${maxProfit} profit.")
}

