import math.{sqrt, pow}

case class Point(val x: Int, val y: Int) {

  def +(otherPoint: Point) = Point(this.x + otherPoint.x, this.y + otherPoint.y)

  def move(dx: Int, dy: Int) = Point(this.x + dx, this.y + dy)

  def distance(otherPoint: Point) = sqrt(
    pow(otherPoint.x - this.x, 2) + pow(otherPoint.y - this.y, 2)
  )

  def invert() = Point(this.y, this.x)
}

object main extends App {
  val point1 = Point(13, 27);
  val point2 = Point(7, 3);

  println(s"point1 = ${point1}");
  println(s"point2 = ${point2}");
  val point3 = point1 + point2;
  println(s"point3 = point1 + point2 = ${point3}");
  val point4 = point1.move(2, 3);
  println(s"point4 = point1 moved by (2, 3) = ${point4}");
  val pointDistance = point1.distance(point2)
  println(s"Distance between point1 and 2 = ${pointDistance}");
  val point5 = point2.invert()
  println(s"point6 = Invert of point2 = ${point5}");
}
