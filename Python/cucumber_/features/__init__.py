from calculator import add

from aloe import before, step, world


@before.each_example
def clear(*args):
    """Reset the calculator state before each scenario."""
    world.numbers = []
    world.result = 0


@step(r'I have entered (\d+) into the calculator')
def enter_number(self, number):
    world.numbers.append(float(number))


@step(r'I press add')
def press_add(self):
    world.result = add(*world.numbers)


@step(r'The result should be (\d+) on the screen')
def assert_result(self, result):
    assert world.result == float(result)