def addition(n: Int) : Int = n match {
    case 0 => 0
    case _ => n + addition(n-1)
}


@main def main() : Unit = {
    println(addition(500))
}