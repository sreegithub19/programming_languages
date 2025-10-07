import math
from unittest.mock import MagicMock, patch

import pytest
from app.calculator import add, subtract, multiply, divide
import app.shapes as shapes
from app.decorator import fetch_data

###############  ############### ############### ############### ############### ############### ############### ############### ###############

### intro

class TestShape:

    def setup_method(self,method):
        print(f"Setting up {method.__name__}")
        self.circle = shapes.Circle(10)
        self.square = shapes.Square(10)
        self.rectangle = shapes.Rectangle(10,20)

    def teardown_method(self,method):
        print(f"Tearing down {method.__name__}")

    def test_one(self):
        assert True

    def test_area(self):
        assert self.circle.area() == math.pi * self.circle.radius ** 2
        assert self.square.area() == self.square.side**2
        assert self.rectangle.area() == self.rectangle.length*self.rectangle.width

    def test_perimeter(self):
        assert self.circle.perimeter() == 2*math.pi * self.circle.radius
        assert self.square.perimeter() == self.square.side*4
        assert self.rectangle.perimeter() == 2*(self.rectangle.length+self.rectangle.width)


#### using @pytest.fixtures

    # Fixture to create shapes
    @pytest.fixture
    def shapes_setup(self):
        circle = shapes.Circle(10)
        square = shapes.Square(10)
        rectangle = shapes.Rectangle(10, 20)
        return circle, square, rectangle

    def test_area_fixtures(self, shapes_setup):
        circle, square, rectangle = shapes_setup
        assert circle.area() == pytest.approx(math.pi * circle.radius ** 2)
        assert square.area() == square.side ** 2
        assert rectangle.area() == rectangle.length * rectangle.width

    def test_perimeter_fixtures(self, shapes_setup):
        circle, square, rectangle = shapes_setup
        assert circle.perimeter() == pytest.approx(2 * math.pi * circle.radius)
        assert square.perimeter() == square.side * 4
        assert rectangle.perimeter() == 2 * (rectangle.length + rectangle.width)


#### using @pytest.mark.parametrize

    @pytest.mark.parametrize("side_length, expected_area", [(5,25),(4,16),(9,81)])
    def test_square_area_parametrize(self,side_length, expected_area):
        assert shapes.Square(side_length).area() == expected_area

    @pytest.mark.parametrize("length, breadth, expected_area", [(5,5,25),(4,5,20),(9,10,90)])
    def test_rectangle_area_parametrize(self,length,breadth, expected_area):
        assert shapes.Rectangle(length,breadth).area() == expected_area

    @pytest.mark.parametrize("radius, expected_area", [(5,25*math.pi),(4,16*math.pi),(9,81*math.pi)])
    def test_circle_area_parametrize(self,radius, expected_area):
        assert shapes.Circle(radius).area() == expected_area

    # Parametrized tests for add
    @pytest.mark.parametrize(
        "a,b,expected",
        [
            (1, 2, 3),
            (-1, -2, -3),
            (0, 5, 5),
            (2.5, 3.5, 6.0)
        ]
    )
    def test_add(self,a, b, expected):
        assert add(a, b) == expected

    # Parametrized tests for subtract
    @pytest.mark.parametrize(
        "a,b,expected",
        [
            (5, 3, 2),
            (0, 4, -4),
            (-3, -2, -1),
            (2.5, 1.0, 1.5)
        ]
    )
    def test_subtract(self,a, b, expected):
        assert subtract(a, b) == expected

    # Parametrized tests for multiply
    @pytest.mark.parametrize(
        "a,b,expected",
        [
            (2, 3, 6),
            (0, 5, 0),
            (-2, 3, -6),
            (2.5, 4, 10.0)
        ]
    )
    def test_multiply(self,a, b, expected):
        assert multiply(a, b) == expected

    # Parametrized tests for divide
    @pytest.mark.parametrize(
        "a,b,expected",
        [
            (6, 3, 2),
            (5, 2, 2.5),
            (-6, 3, -2)
        ]
    )
    def test_divide(self,a, b, expected):
        assert divide(a, b) == expected

    # Test for division by zero
    def test_divide_zero(self):
        with pytest.raises(ZeroDivisionError):
            divide(5, 0)

    # Test for invalid types
    @pytest.mark.parametrize(
        "a,b",
        [
            ("5", 2),
            (3, "2"),
            ("3", "2")
        ]
    )
    def test_divide_type_error(self,a, b):
        with pytest.raises(TypeError):
            divide(a, b)

### mocking

    def test_fetch_data(self):
        # Create a fake response object
        fake_response = MagicMock()
        fake_response.json.return_value = {"message": "hello"}

        # Patch 'requests.get' so it returns fake_response instead
        with patch("app.decorator.requests.get", return_value=fake_response) as mock_get:
            result = fetch_data("http://example.com/api")

            # Assertions
            assert result == {"message": "hello"}
            mock_get.assert_called_once_with("http://example.com/api")

### Run selective tests (marking) (@pytest.mark.slow, @pytest.mark.api)

# In pytest, slow usually refers to tests that take a long time to execute compared to the rest of the test suite.
# By default, pytest doesn’t “know” which tests are slow, but developers often use markers or plugins to categorize them.
# A plugin like pytest-slow-tests, helps you automatically classify tests as slow if they exceed a given threshold (e.g., 0.5s)
    @pytest.mark.slow
    def test_math(self):
        assert 2 + 2 == 4
        assert [1, 2, 3] == [1, 2, 3]


### Skipping & xfail (expected failures) @pytest.mark.xfail

    @pytest.mark.xfail
    def test_buggy(self): assert 1 == 0