# oop
# https://www.youtube.com/watch?v=Ej_02ICOIgs
# github repo: https://github.com/jimdevops19/PythonOOP
import csv, os, sys

class Item:

    pay_rate = 0.8 # The pay rate after 20% discount
    all = []

    # constructor   
    def __init__(self,name:str,price:float,quantity=0) -> None:  
        self.name = name
        self.price = price
        self.quantity = quantity

        # Run validations to the received arguments
        assert price >= 0, f"Price {price} is not greater than or equal to zero!"
        assert quantity >= 0, f"Quantity {quantity} is not greater or equal to zero!"

        # Actions to execute
        Item.all.append(self)

    def calculate_total_price(self): # functions inside classes are called methods
        return self.price * self.quantity  

    def apply_discount(self): # functions inside classes are called methods
        return self.price * self.pay_rate

    # representing your objects in output
    def __repr__(self):
        return f"Item('{self.name}',{self.price},{self.quantity})"

    os.chdir(os.path.dirname(__file__))  # to avoid this error:- FileNotFoundError: [Errno 2] No such file or directory: 'datasets/items.csv
    '''
    Basically @classmethod makes a method whose first argument 
    is the class it's called from (rather than the class instance), 
    @staticmethod does not have any implicit arguments.
    '''
    @classmethod
    def instantiate_from_csv(cls):
        with open('datasets/items.csv','r') as f:
            reader = csv.DictReader(f)
            items = list(reader)
            for i in items:
                print("i in items:",i)

                Item(
                    name = i.get('name'),
                    price = float(i.get('price')),
                    quantity = int(i.get('quantity')),
                )

    @staticmethod
    def is_integer(num):
        # We will count out the floats that are point zero
        # For i.e: 5.0, 10.0
        if isinstance(num, float):
            # Count out the floats that are point zero
            return num.is_integer()
        elif isinstance(num, int):
            return True
        else:
            return False


def Item_(): 

    def comments():
        #item1.name = "Phone" -> modifed in the above line
        # item1.price = 100
        # item1.quantity = 5
        #item2.name = "Laptop"
        # item2.price = 1000
        # item2.quantity = 50
        pass
    #comments()

    def to_csv_():
        global item1 ; item1 = Item("Phone",100,5)  # calls __init__ method every time Item() is called
        global item2 ; item2 = Item("Laptop",1000,50)  # object of type "Item"
        global item3 ; item3 = Item("Cable",1000,50)
        print(item3.calculate_total_price())
        global item4 ; item4 = Item("Mobile",1000,50)
        print(item4.calculate_total_price())
        print(item4.apply_discount())
        global item5 ; item5 = Item("Macbook",1000,50)
    to_csv_()

    def prints():
        print(type(item1)) # <class '__main__.Item'>
        print(type(item1.name))
        print(type(item1.quantity))
        print(item1.calculate_total_price())
        print(item1.apply_discount())
        print((item1)) # <class '__main__.Item'>

        print((item2.name))
        print((item2.quantity))
        item1.apply_discount()
        for instance in Item.all:
            print(instance.name)
    #prints()
    
    def prints_2():
        print(Item.all) # [Item('Phone',100,5), Item('Laptop',1000,50), Item('Cable',1000,50), Item('Mobile',1000,50), Item('Macbook',1000,50)]
        Item.instantiate_from_csv()
        print(Item.is_integer(8.1))
    #     print(Item.pay_rate)
    #     print(item1.pay_rate)  # accessible
    #     print(item2.pay_rate) 

    #     print(item2.__dict__) #All the attributes for instance-level
    #     for i in(Item.__dict__.keys()): #All the attributes for class-level
    #         sys.stdout.write("Key:%s ; Value:%s\n" %(i,Item.__dict__[i]))
    prints_2()


#Item_()

################################################################################################################################################################################################

# When to use class methods and when to use static methods ?

class static_vs_class_methods:
    @staticmethod
    def is_integer():
        '''
        This should do something that has a relationship
        with the class, but not something that must be unique
        per instance!
        '''
    @classmethod
    def instantiate_from_something(cls):
        '''
        This should also do something that has a relationship
        with the class, but usually, those are used to
        manipulate different structures of data to instantiate
        objects, like we have done with CSV.
        '''

# THE ONLY DIFFERENCE BETWEEN THOSE:
# Static methods are not passing the object reference as the first argument in the background!


# NOTE: However, those could be also called from instances.

def static_vs_class_methods_():
    item1 = static_vs_class_methods()
    print(item1.is_integer())
    print(item1.instantiate_from_something())

#static_vs_class_methods_()


################################################################################################################################################################################################

#Inheritance
class Phone(Item):
    
    # constructor   
    def __init__(self,name:str,price:float,quantity=0,broken_phones=0) -> None:  
        
        #Assign to self object
        self.name = name
        self.price = price
        self.quantity = quantity

        # Run validations to the received arguments
        assert price >= 0, f"Price {price} is not greater than or equal to zero!"
        assert quantity >= 0, f"Quantity {quantity} is not greater or equal to zero!"

        # Actions to execute
        Item.all.append(self)


phone1 = Phone("jscPhonev10",500,5)
phone1.broken_phones = 1
phone2 = Phone("jscPhonev20",700,5)
phone2.broken_phones = 1
