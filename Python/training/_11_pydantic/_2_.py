from pydantic import BaseModel

class NumberInput(BaseModel):
    number: int

class MyPrinter:
    @staticmethod
    def print_number(input_data: NumberInput) -> None:
        print(input_data.number)

    @staticmethod
    def return_number(input_data: NumberInput) -> int:
        return(input_data.number*2)

# Usage
if __name__ == "__main__":
    input_data = NumberInput(number="2")
    MyPrinter.print_number(input_data)
    print(type(MyPrinter.return_number(input_data)),MyPrinter.return_number(input_data))

