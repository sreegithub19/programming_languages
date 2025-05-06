# test_example.py

import unittest
from example import add_numbers, subtract_numbers

class TestExample(unittest.TestCase):
    def test_add_numbers(self):
        self.assertEqual(add_numbers(2, 3), 5)
        self.assertEqual(add_numbers(-1, 1), 0)
        self.assertEqual(add_numbers(0, 0), 0)

    def test_subtract_numbers(self):
        self.assertEqual(subtract_numbers(10, 5), 5)
        self.assertEqual(subtract_numbers(0, 4), -4)
        self.assertEqual(subtract_numbers(-3, -3), 0)

if __name__ == "__main__":
    unittest.main()