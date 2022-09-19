def fibonacci(n: Int): Int = {
    if (n == 0) 0
    else if (n == 1) 1
    else fibonacci(n - 1) + fibonacci(n - 2)
}


def printFibonacci(n: Int) : Unit = {
    if(n >0) printFibonacci(n-1)
    println(fibonacci(n))
}

@main def main() : Unit = {
    printFibonacci(15)
}