def discount(numOfCopies: Int): Double = numOfCopies * 24.95 * 0.4

def shippingCost(numOfCopies : Int): Double =
    if (numOfCopies <= 50) 3*50
    else 50*3 + (numOfCopies-50)*0.75

def baseCost(numOfCopies : Int) = numOfCopies * 24.95

def wholeSaleCost(numOfCopies: Int) : Double = baseCost(numOfCopies) - discount(numOfCopies) + shippingCost(numOfCopies)

object Q4 extends App {
 print(wholeSaleCost(60))
}