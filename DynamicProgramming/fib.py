#!/bin/python

"""
Write a program to get fibonacci number of n th positon.
fib(n)->number
"""

# memoization
# use dict, keys will arg to fuc, value will return value

# fib for large num like 50th postion, it don't work
def fib(n: int, memo:dict={}):
    if (n in memo):
        return memo.get(n)
    if n <= 2:
        return 1
    memo[n]=fib(n-1, memo)+fib(n-2, memo)
    return memo[n]

if __name__ == "__main__":
    __import__('pprint').pprint(fib(6))
    __import__('pprint').pprint(fib(7))
    __import__('pprint').pprint(fib(8))
    __import__('pprint').pprint(fib(50))
    __import__('pprint').pprint(fib(150))
