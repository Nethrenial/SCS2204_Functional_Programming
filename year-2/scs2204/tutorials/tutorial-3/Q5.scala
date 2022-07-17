def easyPace(distance : Double): Double = 8*distance
def tempo(distance : Double): Double = 7*distance


object Q3 extends App  {
    println(easyPace(2) + tempo(3) + easyPace(2))
}