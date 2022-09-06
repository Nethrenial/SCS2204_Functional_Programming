object Caesar_Cipher extends App {

  val ALPHABET = "ABCDEFGHIJKLMNOPQRSTUVWXYZ"

  // encryption function
  val encrypt = (c: Char, shiftBy: Int) =>
    if ((ALPHABET.indexOf(c.toUpper)) == -1) c
    else ALPHABET((ALPHABET.indexOf(c.toUpper) + shiftBy) % ALPHABET.size)

  // decryption function
  val decrypt = (c: Char, shiftBy: Int) => {
    if ((ALPHABET.indexOf(c.toUpper)) == -1) c
    else if ((ALPHABET.indexOf(c.toUpper) - shiftBy) < 0)
      ALPHABET(
        (ALPHABET.indexOf(c.toUpper) - shiftBy + ALPHABET.size) % ALPHABET.size
      )
    else ALPHABET((ALPHABET.indexOf(c.toUpper) - shiftBy) % ALPHABET.size)
  }

  val cipher = (secret: String, shiftBy: Int, mode: (Char, Int) => Char) =>
    secret.map(mode(_, shiftBy))

  println(cipher("ABCD", 1, encrypt))
  println(cipher("ZA", 1, encrypt))
  println(cipher("ABCD", 4, decrypt))

}
