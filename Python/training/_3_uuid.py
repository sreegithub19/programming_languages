#!/usr/bin/env python
# https://stackoverflow.com/questions/19989481/how-to-determine-if-a-string-is-a-valid-v4-uuid

''' 
v4 UUID features:

https://gist.github.com/luzfcb/186ee28b368450035e056228615db999

1. A UUID-4 has five groups of lowcase hexadecimal characters, the first has 8 chars, the second 4 chars, the third 4 chars, the fourth 4 chars, the fifth 12 chars.

2. However to make it a valid UUID4 the third group (the one in the middle) must start with a 4:

    00000000-0000-4000-0000-000000000000
                  ^
3. And the fourth group must start with 8, 9, a or b.

    00000000-0000-4000-a000-000000000000
                  ^    ^
'''
# from uuid import UUID

# def is_valid_uuid(val):
#     try:
#         UUID(str(val),version=4) # true from 1 to 5
#         return True
#     except ValueError:
#         return False

# print(is_valid_uuid("ec26f0d8-e44f-d379-757f-029d741eeb4e"))
# print(is_valid_uuid("e"))
# print(is_valid_uuid([1,2]))
