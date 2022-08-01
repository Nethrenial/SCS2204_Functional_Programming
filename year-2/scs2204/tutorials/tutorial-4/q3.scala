def toUpper(input: String): String = input.toUpperCase()
def toLower(input: String): String = input.toLowerCase()

def formatNames(input: String, indexes: List[Int] = List())(callback: String => String): String = {
  if(indexes.isEmpty) {
    return callback(input)
  }
  var position = 0
  var result = ""
  while (position < input.length()) {
    if(indexes.contains(position)) {
      result = result.concat(callback(input.charAt(position).toString()))
    } else {
      result = result + input.charAt(position).toString()
    }
    position = position + 1
  }
  return result
}

object main extends App {
  println(formatNames("Benny")(toUpper))
  println(formatNames("Niroshan",List(0,1))(toUpper))
  println(formatNames("Saman")(toLower))
  println(formatNames("Kumara",List(5))(toUpper))

}
