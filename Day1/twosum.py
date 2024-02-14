#!/bin/python3

# Problem:
# Given an array A[] of n numbers and another number x,
# the task is to check whether or not there exist two elements in
# A[] whose sum is exactly x.


# take a input a array[int] and a int
# def main():
#     array = []
#     print("Enter array length:")
#     for _ in range(int(input())):
#         array.append(int(input("Enter an element:")))
#     x = int(input("Enter a number:"))
#     print(two_sum(array, x))


# worst case brute force
# n*n O(n^2)
def two_sum(A: list[int], x: int) -> list[int]:
    for i in range(0, len(A)-1):
        for j in range(1, len(A)):
            if A[i] + A[j] == x:
                return [i, j]
    return []


# hash map implementation
# Time: O(n)
# Memory: O(n)
def two_sum_2(A: list[int], x: int) -> list[int]:
    mydict = {x-A[0]: 0}
    for i in range(1, len(A)):
        if A[i] in mydict:
            return [mydict[A[i]], i]
        mydict[x-A[i]] = i
    return []


if __name__ == "__main__":
    __import__('pprint').pprint(two_sum([2, 7, 11, 15], 9))
    __import__('pprint').pprint(two_sum_2([2, 7, 11, 15], 9))
