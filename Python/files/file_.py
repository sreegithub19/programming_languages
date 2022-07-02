f = open("test.txt", 'r')
 
#To print the content of the whole file
#print(f.read())
 
#To read only one line
a = f.readline()
print(a)
print(a+"23")
print(f.readline())
print(f.readline().rstrip('\n')+"23")