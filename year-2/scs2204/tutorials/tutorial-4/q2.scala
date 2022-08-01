import scala.io.StdIn.readLine

def evenOrOdd(num: Integer) : String =  if(num % 2 == 0)  "Even number is given" else "Odd number is given" 

def evaluate(num: Integer) : String = num match{
    case n if(n<= 0) => "Negative/Zero"
    case _ => evenOrOdd(num)
}

object main extends App {
    print("Enter a number : ")
    val num = readLine()
    println(evaluate(num.toInt))
}