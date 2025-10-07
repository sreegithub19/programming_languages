# A decorator is a special function that lets you "wrap" another function (or class) to add extra behavior without changing the original code.
# They are widely used for logging, authentication, caching, retry logic, etc.
#
# You use them with the @decorator_name syntax just above a function.

def my_decorator(func):
    def wrapper(*args, **kwargs):
        print("Before function runs...")
        result = func(*args, **kwargs)
        print("After function runs...")
        return result
    return wrapper

@my_decorator
def say_hello(name):
    print(f"Hello, {name}!")

say_hello("Alice")

#####################################################

def repeat(n):
    def decorator(func):
        def wrapper(*args, **kwargs):
            for i in range(n):
                print(f"Run {i+1}/{n}:")
                result = func(*args, **kwargs)
            return result
        return wrapper
    return decorator

@repeat(3)
def greet(name):
    print(f"Hello, {name}!")

greet("Alice")

#####################################################

# *args vs **kwargs :
# *args
#     Collects extra positional arguments into a tuple.
#     Useful when you don’t know how many positional arguments will be passed.
# **kwargs
#     Collects extra keyword arguments into a dictionary.
#     Useful when you don’t know what keyword arguments will be passed.

def demo_all(x, *args, **kwargs):
    print("x =", x)
    print("args =", args)
    print("kwargs =", kwargs)

demo_all(10, 20, 30, a=1, b=2)

#####################################################

import requests

def fetch_data(url):
    response = requests.get(url)
    return response.json()