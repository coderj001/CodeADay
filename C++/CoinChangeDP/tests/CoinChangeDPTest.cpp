#include <gtest/gtest.h>

#include "../include/CoinChangeDP.h"


TEST(CoinChangeTest, BasicTest) {
    std::vector<int> coins = {1, 2, 5};
    int amount = 11;
    int expected = 3;
    int result = minCoins(coins, amount);
    EXPECT_EQ(result, expected);
}

TEST(CoinChangeTest, SingleCoin) {
    std::vector<int> coins = {1};
    int amount = 7;
    int expected = 7;
    int result = minCoins(coins, amount);
    EXPECT_EQ(result, expected);
}

TEST(CoinChangeTest, NoSolution) {
    std::vector<int> coins = {2, 5};
    int amount = 3;
    int expected = std::numeric_limits<int>::max(); // No solution
    int result = minCoins(coins, amount);
    EXPECT_EQ(result, expected);
}

TEST(CoinChangeTest, ZeroAmount) {
    std::vector<int> coins = {1, 2, 5};
    int amount = 0;
    int expected = 0;
    int result = minCoins(coins, amount);
    EXPECT_EQ(result, expected);
}

// TEST(CoinChangeTest, LargeAmount) {
//     std::vector<int> coins = {1, 5, 10, 25};
//     int amount = 123;
//     int expected = 6; // 4*25 + 2*10 + 3*1
//     int result = minCoins(coins, amount);
//     EXPECT_EQ(result, expected);
// }

TEST(CoinChangeTest, DuplicateCoins) {
    std::vector<int> coins = {1, 1, 2, 5}; // Duplicate coins shouldn't affect the result
    int amount = 11;
    int expected = 3;
    int result = minCoins(coins, amount);
    EXPECT_EQ(result, expected);
}

TEST(CoinChangeTest, OneCoinEqualToTarget) {
    std::vector<int> coins = {5};
    int amount = 5;
    int expected = 1;
    int result = minCoins(coins, amount);
    EXPECT_EQ(result, expected);
}


// TEST(CoinChangeTest, AnotherCombination) {
//     std::vector<int> coins = {2,5,7};
//     int amount = 11;
//     int expected = 2; // 7 + 2*2
//     int result = minCoins(coins, amount);
//     EXPECT_EQ(result, expected);
// }

int main(int argc, char **argv) {
    ::testing::InitGoogleTest(&argc, argv);
    return RUN_ALL_TESTS();
}
