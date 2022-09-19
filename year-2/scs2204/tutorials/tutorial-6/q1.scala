@main def main() : Unit = {

  // the alphabet to consider for the cipher
  val ALPHABET = "ABCDEFGHIJKLMNOPQRSTUVWXYZ"

  // encryption function
  val encrypt = (c: Char, shiftBy: Int) =>
  // if character is not in alphabet, ignore it and return the original character
    if ((ALPHABET.indexOf(c.toUpper)) == -1) c
    // else, using the index of uppercased charater
    else ALPHABET((ALPHABET.indexOf(c.toUpper) + shiftBy) % ALPHABET.size) // % is used to rotate properly without overflowing

  // decryption function
  val decrypt = (c: Char, shiftBy: Int) => {
  // if character is not in alphabet, ignore it and return the original character
    if ((ALPHABET.indexOf(c.toUpper)) == -1) c
  // if modified character is before the alphabet, rotate it again to get the proper character
    else if ((ALPHABET.indexOf(c.toUpper) - shiftBy) < 0)
      ALPHABET(
        (ALPHABET.indexOf(c.toUpper) - shiftBy + ALPHABET.size) % ALPHABET.size
      )
    // else simply return the decrypted cipher
    else ALPHABET((ALPHABET.indexOf(c.toUpper) - shiftBy) % ALPHABET.size)

  }

  val cipher = (secret: String, shiftBy: Int, mode: (Char, Int) => Char) =>
    secret.map(mode(_, shiftBy))

  println(cipher("I love functional programming", 1, encrypt))
  println(cipher("ZA", 1, encrypt))
  println(cipher("J MPWF GVODUJPOBM QSPHSBNNJOH", 1, decrypt))
  println(cipher("ZZZZ", 1, decrypt))
  println(cipher("ZZZZ", 8, encrypt))

}
