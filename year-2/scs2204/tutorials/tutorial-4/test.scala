

def test(buuthas: (String, List[String]) => Double ) = buuthas("Randima", List("1", "2", "3"))


def func1(name: String, names: List[String]) : Double = {
    return 9.82
}   
 

object main extends App {
  print(test(func1))
}





