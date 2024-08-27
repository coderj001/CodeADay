"""
Write a function `canSum(targetSum, numbers)` that takes in a targetSum and an array of numbers as arguments.

The function should return a boolean indicating whether or not it is possible to generate the targetSum using numbers from the array.

You may use an element of the array as many times as needed.
You may assume that all input numbers are nonnegative.
"""

def canSum(targetSum: int, numbers: list[int])->bool:
    if targetSum == 0:
        return true
    canSum(targetSum: targetSum)


if __name__ == "__main__":
    pass
