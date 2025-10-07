import pytest
from app.calculator import add, subtract, multiply, divide

def test_add():
    assert add(2, 3) == 5
    assert add(4,9) != 0
    assert add("2", "3") == "23"

def test_subtract():
    assert subtract(5, 3) == 2

def test_multiply():
    assert multiply(2, 3) == 6

def test_divide():
    assert divide(6, 3) == 2
    assert True

def test_divide_by_zero():
    with pytest.raises(ZeroDivisionError):
        divide(1, 0)
    with pytest.raises(TypeError):
        divide(1, "0")