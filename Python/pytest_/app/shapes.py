import math


class Shape:

    def area(self):
        pass

    def perimeter(self):
        pass

class Circle(Shape):
    def __init__(self,radius):
        self.radius = radius

    def area(self):
        return math.pi * self.radius**2

    def perimeter(self):
        return 2*math.pi * self.radius


class Square(Shape):
    def __init__(self,side):
        self.side = side

    def area(self):
        return self.side**2

    def perimeter(self):
        return self.side*4


class Rectangle(Shape):
    def __init__(self,length, width):
        self.length = length
        self.width = width

    def area(self):
        return self.width * self.length

    def perimeter(self):
        return 2*(self.width + self.length)