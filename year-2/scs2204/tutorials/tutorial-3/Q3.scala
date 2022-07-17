def volume(radius : Double): Double = (4/3)*math.Pi*math.pow(radius,3)

object Q3 extends App  {
    println(volume(5))
}