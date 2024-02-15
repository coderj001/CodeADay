#!/bin/python3

# Create a function that takes the age in years and returns the age in days.
# Examples
#
# calcAge(65) ➞ 23725
#
# calcAge(0) ➞ 0
#
# calcAge(20) ➞ 7300
#
# Notes
#
#     Use 365 days as the length of a year for this challenge.
#     Ignore leap years and days between last birthday and now.
#     Expect only positive integer inputs.

def calc_age(age: int) -> int:
    if age <= 0:
        return 0
    return age * 365


if __name__ == '__main__':
    print(calc_age(65) == 23725)
    print(calc_age(0) == 0)
    print(calc_age(20) == 7300)
