
// question 1
class Rational(var numerator: Int, var denominator: Int) {
    require(denominator > 0, "Denominator must be greater than 0")
    def neg : Rational = {
        Rational(numerator * (-1), denominator) 
    }

    // with operator overloading
    def -(other: Rational) : Rational = {
        val newNumerator = this.numerator*other.denominator - other.numerator*this.denominator
        val newDenominator = this.denominator * other.denominator
        Rational(newNumerator, newDenominator)        
    }

    // with sub method
    def sub(other: Rational): Rational = {
        val newNumerator = this.numerator*other.denominator - other.numerator*this.denominator
        val newDenominator = this.denominator*other.denominator
        Rational(newNumerator, newDenominator)  
    }

    override def toString(): String = {
        s"${numerator}/${denominator}"
    }


}


@main def main() : Unit = {
    val x = Rational(3, 4)
    val y = Rational(5, 8)
    val z = Rational(2, 7)


    println(x.neg)

    println(s"x = ${x}, y = ${y}, z = ${z}")

    // with sub method
    println(s"x-y-z = ${x} - ${y} - ${z} = ${x.sub(y).sub(z)}")

    // with - operator
    println(s"x-y-z = ${x} - ${y} - ${z} = ${x- y- z}")




}
