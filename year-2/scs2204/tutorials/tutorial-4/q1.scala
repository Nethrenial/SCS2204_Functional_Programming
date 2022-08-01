def interest(deposit: Double): Double =  deposit match {
    case d if d <= 20000 => d*0.02
    case d if d <= 200000 => d *0.04
    case d if d <= 2000000 => d * 0.035
    case _ => deposit * 0.065
}


object main extends App {

println(interest(3000000))
}