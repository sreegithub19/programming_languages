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
    @classmethod
    def instantiate_from_csv(cls):
        with open('datasets/items.csv','r') as f:
            reader = csv.DictReader(f)
            items = list(reader)
            for i in items:
                print("i in items:",i)

                Item(
                    name = i.get('name'),
                    price = int(i.get('price')),
                    quantity = int(i.get('quantity')),
                )


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
        print(Item.pay_rate)
        print(item1.pay_rate)  # accessible
        print(item2.pay_rate) 

        print(item2.__dict__) #All the attributes for instance-level
        for i in(Item.__dict__.keys()): #All the attributes for class-level
            sys.stdout.write("Key:%s ; Value:%s\n" %(i,Item.__dict__[i]))
    prints_2()



Item_()


