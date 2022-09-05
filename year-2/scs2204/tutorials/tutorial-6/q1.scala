object main extends App {

  val encryption = (char: Char, shiftBy: Int) => (char.toInt + shiftBy).toChar
  val decryption = (char: Char, shiftBy: Int) => (char.toInt - shiftBy).toChar

  val cipher = (secret: String, shiftBy: Int, mode: (Char, Int) => Char) =>
    secret.map((c) => if (c == ' ') ' ' else mode(c, shiftBy))

  println(cipher("I love functional programming", 1, encryption))
  println(cipher("I love javascript", 4, encryption))
  println(cipher("CDEFGHIJK", 2, decryption))
  println(cipher(cipher("Hello", 2, encryption), 2, decryption))
}
