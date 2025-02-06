#include "../include/CoinChangeDP.h"

int minMemoCoins(vector<int> coins, int amt, map<int, int>& memo){
    if (amt == 0) {
        return 0;
    }
    if (amt < 0) {
        return numeric_limits<int>::max(); // represent inf
    }

    if (memo.count(amt) > 0) {
        return memo[amt];
    }

    int min_coins = numeric_limits<int>::max(); 
    for(auto coin: coins){
        int result = minCoins(coins, amt - coin);
        if (result != numeric_limits<int>::max()) {
            min_coins = min(min_coins, result+1);
        }
    }
    memo[amt] = min_coins;
    return min_coins;
}

int minCoins(vector<int> coins, int amt){
    map<int, int> memo;
    return minMemoCoins(coins, amt, memo);
}

// coins - 1, 2, 5
// 3 (5 + 5 + 1)
//
// fun(1) - {1,2,5} 11
// fun(2) - {1,2,5} 10
// fun(3) - {1,2,5} 8
// fun(4) - {1,2,5} 8
