## Dynamic Programming

Dynamic programming is a method for solving a complex problem by breaking it up into smaller subproblems, and store the results of the subproblems for later use (to reduce duplication).

[Image](https://miro.medium.com/v2/resize:fit:640/format:webp/1*EmGt1nAA3PNd0dcgE24wAw.png)

Subproblems are smaller versions of the original problem. Any problem has overlapping sub-problems if finding its solution involves solving the same subproblem multiple times. Take the example of the Fibonacci numbers; to find the fib(5), we need to break it down into the following sub-problems:


├── Fibonacci(4)
│   ├── Fibonacci(3)
│   │   ├── Fibonacci(2)
│   │   │   ├── Fibonacci(1) -> 1 (Base Case)
│   │   │   └── Fibonacci(0) -> 0 (Base Case)
│   │   └── Fibonacci(1) -> 1 (Base Case)
│   └── Fibonacci(2) (Retrieved from Memoization)
│       ├── Fibonacci(1) -> 1 (Base Case)
│       └── Fibonacci(0) -> 0 (Base Case)
└── Fibonacci(3) (Retrieved from Memoization)
    ├── Fibonacci(2) (Retrieved from Memoization)
    └── Fibonacci(1) -> 1 (Base Case)


### 1. Memoization
Example the fibonacciNum problem
