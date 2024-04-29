#!/bin/python
"""
Say that you are a traveler on a 2D grid. You begin in the top-left corner and your goal is to travel to the bottom-right corner. You may only move down or right.

In how many ways can you travel to the goal on a grid with dimensions m * n?
"""

def gridTraveler(m: int, n: int, memo: dict={}):
    if m == 0 or n == 0:
        return 0
    if m == 1 and n == 1:
        return 1
    if f"{m}x{n}" in memo:
        return memo.get(f"{m}x{n}")

    memo[f"{m}x{n}"] = gridTraveler(m-1, n) + gridTraveler(m, n-1)
    return memo[f"{m}x{n}"]

if __name__ == "__main__":
    __import__('pprint').pprint(gridTraveler(1,1))
    __import__('pprint').pprint(gridTraveler(2,3))
    __import__('pprint').pprint(gridTraveler(3,2))
    __import__('pprint').pprint(gridTraveler(3,3))
    __import__('pprint').pprint(gridTraveler(3,4))
    __import__('pprint').pprint(gridTraveler(18, 18))

