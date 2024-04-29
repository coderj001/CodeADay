## Dynamic Programming
> programming

**Video Link:** (Dynamic Programming)[https://www.youtube.com/watch?v=oBt53YbR9Kk]

Pattern of overlapping sub-problems is called Dynamic Programming.
1 2 3
S| | | 1
 | | | 2
 | | | 3
 | |E| 4

 3x4 -> 7

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
