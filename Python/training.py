<<<<<<< HEAD
def classes():
    class rectangle:
        '''
        Parameterised constructor:
        dynamically assign the attributes during object creation
        '''
        # class variables
        length = 54  
        breadth = 43
        pi = 3.14
        def __init__(self,length,breadth):
            self.length = length
            self.breadth = breadth
        print(length)
        l = 40
        b = 30
        def area(self):
            pi = 3.1234567
            print("self.pi:",self.pi, "\npi:",pi)
            return self.b*self.l


    print(rectangle(0,0).area())  
    # 0,0 above is to only fill up the parameters 
    # (number of parameters here should be equal to 
    # the number of parameters in __init__ constructor of the class 
    # (other than self))
    rect2 = (rectangle(56,67))
    print(rect2.length,rect2.breadth)  # instance variables

    print(rectangle.pi, rectangle(0,0).area())

#classes()


def classes_2():
    class Circle:

        pi = 3.141592653589
        def __init__(self,radius):
            self.radius = radius
        
        # instance method
        def calculate_area(self):
            return Circle.pi * (self.radius**2)

        # class method (cannot access radius)
        @classmethod
        def access_pi(self):
            pi = 3.14
            return pi

        # static method - cannot access - pi and radius
        @staticmethod
        def circle_static_method():
            return ("This is circle's static method")


    print(Circle(5).calculate_area()) # required parameter here
    print(Circle.access_pi())
    print(Circle.circle_static_method())

#classes_2()

class A :
    x = 10
    def __init__(self, y,z):
        self.y = y
        self.z = z
           
    def update_y(self):
        self.y = self.y * self.z
       
A1 = A(3,4)
A2 = A(5,6)

A.x = 30
print(A1.y + A2.x)


=======
# string = list(input("Enter a string:"))
# print("No of alphabets:",filter(lambda x: x.isalpha(), string))
# print("No of digits:",filter(lambda x: x.isnum(), string))


#input = 
print(",".join([str(i**2) for i in [int(i) for i in input("Enter the list:").split(",")] if(i%2!=0)]))
>>>>>>> 259cfe8b3b1d32c221f8e6d3b25c40d1dc51d2cd
