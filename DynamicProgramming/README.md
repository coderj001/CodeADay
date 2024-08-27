## Dynamic Programming
> programming

**Video Link:** (Dynamic Programming)[https://www.youtube.com/watch?v=oBt53YbR9Kk]

Pattern of overlapping sub-problems is called **Dynamic Programming.**
Two Types:
1. Memoization
2. Tabulation

for: (travaler.py)[./travaler.py]
1 2 3
S| | | 1
 | | | 2
 | | | 3
 | |E| 4

 4x3 -> 7

### In this tree:
- Each node represents a subproblem, where the first number represents the remaining rows and the second number represents the remaining columns.
- The root node (2x3) represents the original problem.
- Moving down a level represents making a down move.
- Moving right a level represents making a right move.
- The leaf nodes represent base cases where there are no more rows or columns left.
From this tree, you can see all the possible paths from the top-left corner to the bottom-right corner of the 2x3 grid.

```text
          2x3
         /   \
       1x3   2x2
      /  \    /  \
   0x3  1x2  1x2  2x1
         / \    \
       0x2 1x1   1x1
              \
              0x1

```

***Time Complexity: 2^m+n***
***Space Complexity: n+m***

#### Let's break down the complexities for this tree:
##### Time Complexity:
- At each step, you have two choices: either move down or move right.
- The total number of nodes in this tree represents the total number of paths from the top-left corner to the bottom-right corner.
- The number of levels in this tree is equal to the sum of the number of rows and the number of columns in the grid (m + n).
- At each level, you make a decision (either move down or move right), so the number of nodes at each level is 2.
- Therefore, the total number of nodes (or paths) in the tree is 2^(m + n).

##### Space Complexity:
- The space complexity is determined by the maximum depth of the tree, which is the length of the longest path from the root to a leaf node.
- Since each move either goes down or right, the maximum depth of the tree is equal to the sum of the number of rows and the number of columns in the grid (m + n).
- Therefore, the space complexity is O(m + n), where m is the number of rows and n is the number of columns in the grid.

