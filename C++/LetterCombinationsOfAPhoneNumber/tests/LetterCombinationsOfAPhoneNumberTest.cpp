#include <gtest/gtest.h>

#include "../include/LetterCombinationsOfAPhoneNumber.h"

namespace lettercombination_test {
TEST(LetterCombinationsTest, EmptyInput) {
    EXPECT_EQ(LetterCombinations(""), vector<string>());
}

TEST(LetterCombinationsTest, SingleDigit) {
    EXPECT_EQ(LetterCombinations("2"), vector<string>({"a", "b", "c"}));
}

TEST(LetterCombinationsTest, TwoDigits) {
    EXPECT_EQ(LetterCombinations("23"), vector<string>({"ad", "ae", "af", "bd", "be", "bf", "cd", "ce", "cf"}));
}
}


int main(int argc, char **argv) {
  ::testing::InitGoogleTest(&argc, argv);
  return RUN_ALL_TESTS();
}
