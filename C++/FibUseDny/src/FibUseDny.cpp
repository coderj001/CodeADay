#include "../include/FibUseDny.h"


lint fib(lint n, std::map<int, lint>& memo){
    if (n == 0) {
        return 0;
    }

    if (n == 1 || n == 2) {
        return 1;
    }

    if (memo.find(n) != memo.end()) {
        return memo[n];
    }

    memo[n] = fib(n-1, memo) + fib(n-2, memo);
    return memo[n];
}

//  0, 1, 1, 2, 3, 5, 8, 13, 21
