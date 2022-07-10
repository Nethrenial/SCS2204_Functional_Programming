//using @main instead of "extends App" because using scala 3

@main def main() = {

    var  k,i,j = 2 
    var m,n = 5
    var f = 12.0f
    var g = 4.0f
    var c = 'X'

    println(k+12*m)
    println(m/j)
    println(n%j)
    println(m/j*j)
    println(f+10*5+g)
    //++ operator is not available in scala, but answer will be 15 if used in c/c++ etc.

    //question 3
    var a : Int = 2
    var b : Int = 3
    var c2 : Int = 4 //using c2 instead of c to avoid name clash with "c" in question 1
    var d : Int = 5
    var k2 : Float = 4.3f //using k2 instead of k to avoid name clash with "k" in question 1

    //question 3 a) -- operator not supported in scala
    //question 3 b) ++ operator not supported in scala
    println(-2*(g-k2)+c2) //question 3 c)
    //question 3 d) ++ operator not supported in scala
    //question 3 e) ++ operator not supported in scala
}
