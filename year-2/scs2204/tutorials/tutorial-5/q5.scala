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

def evenAddtion(n: Int, isFirstTime: Boolean = true) : Int =  {
    if(n == 0) {
        return 0;
    } else if (isEven(n) && isFirstTime) {
        return evenAddtion(n - 1, false);
    } else if (isEven(n) && !isFirstTime) {
        return n + evenAddtion(n - 1, false); }
     else {
        return evenAddtion(n - 1, false);
    }
}



@main def main() : Unit = {
    println(evenAddtion(4))
}




