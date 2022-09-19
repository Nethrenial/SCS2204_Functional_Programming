//recursive function to check if even or odd
def isEven(num: Int) : Boolean = {
    if (num == 0) {
        return true;
    } else if (num == 1) {
        return false;
    } else {
        return isEven(num - 2);
    }
}


@main def main() : Unit = {
    println(isEven(0))
    println(isEven(1))
    println(isEven(2))
    println(isEven(3))
    println(isEven(4))
    println(isEven(5))
    println(isEven(6))
    println(isEven(7))
}