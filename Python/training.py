# string = list(input("Enter a string:"))
# print("No of alphabets:",filter(lambda x: x.isalpha(), string))
# print("No of digits:",filter(lambda x: x.isnum(), string))


#input = 
print(",".join([str(i**2) for i in [int(i) for i in input("Enter the list:").split(",")] if(i%2!=0)]))