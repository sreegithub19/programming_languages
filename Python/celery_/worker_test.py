# worker_test.py

import unittest
from tasks import add, multiply

class TestCeleryTasks(unittest.TestCase):
    def test_add_task(self):
        result = add.apply(args=(4, 6)).get()  # Synchronous call to the task
        self.assertEqual(result, 10)

    def test_multiply_task(self):
        result = multiply.apply(args=(3, 7)).get()
        self.assertEqual(result, 21)

if __name__ == "__main__":
    unittest.main()