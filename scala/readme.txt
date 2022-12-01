1. 

Sample Scala program:

hello.scala ::

/** Quick sort, functional style */
object sort1 {
  def sort(a: List[Int]): List[Int] = {
    if (a.length < 2)
      a
    else {
      val pivot = a(a.length / 2)
      sort(a.filter(_ < pivot)) :::
           a.filter(_ == pivot) :::
           sort(a.filter(_ > pivot))
    }
  }
  def main(args: Array[String]) {
    val xs = List(6, 2, 8, 5, 1)
    println(xs)
    println(sort(xs))
  }
}


To run:
scala hello.scala

================================================================

2. 

sbt:: (Package manager for Scala).

#(in home folder)
(i) brew install sbt

================================================================