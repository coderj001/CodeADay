## Find the Faulty Sensor
`Difficulty`: Medium

### Problem Statement
You are given two integer arrays sensor1 and sensor2, each of length n.
Both sensors recorded the same experiment. However, at most one sensor may be faulty.
A faulty sensor behaves as follows:
It drops exactly one reading
All subsequent readings shift left by one position
The last reading becomes an arbitrary value
Your task is to determine which sensor is faulty.
Return:
1 if sensor1 is faulty
2 if sensor2 is faulty
-1 if it is impossible to determine uniquely
Constraints
1 ≤ n ≤ 10^5
sensor1.length == sensor2.length == n
Values can be any integers
At most one sensor is faulty
Examples
Example 1
Copy code

Input:
sensor1 = [2,3,4,5,6]
sensor2 = [2,3,5,6,8]

Output:
2
Explanation
sensor2 dropped 4, causing all subsequent values to shift left.
Example 2
Copy code

Input:
sensor1 = [1,2,3]
sensor2 = [1,2,3]

Output:
-1
Explanation
Both arrays are identical; no fault can be identified.
Example 3
Copy code

Input:
sensor1 = [1,2,3,4]
sensor2 = [1,3,4,9]

Output:
2
