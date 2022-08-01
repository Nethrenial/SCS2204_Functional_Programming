def toUpper(str: String): String = str.toUpperCase()
def toLower(str: String): String = str.toLowerCase()

def formatNames(name: String)(callback: String => String)(positions: Int*): String = {
  if(positions.isEmpty) {
    return callback(name)
  }
  var position = 0
  var result = ""
  while (position < name.length()) {
    if(positions.contains(position)) {
      result = result.concat(callback(name.charAt(position).toString()))
    } else {
      result = result + name.charAt(position).toString()
    }
    position = position + 1
  }
  return result
}

object main extends App {
  println(formatNames("Benny")(toUpper)())
  println(formatNames("Niroshan")(toUpper)(0, 1))
  println(formatNames("Saman")(toLower)())
  println(formatNames("Kumara")(toUpper)(5))

}
