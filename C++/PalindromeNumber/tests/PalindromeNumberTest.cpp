#include <gtest/gtest.h>

#include "../include/PalindromeNumber.h"


TEST(PalindromeTest, Palindrome) {
    EXPECT_TRUE(IsPalindrome(121));
}

TEST(PalindromeTest, NegativeNumber) {
    EXPECT_FALSE(IsPalindrome(-121));
}

TEST(PalindromeTest, NonPalindrome) {
    EXPECT_FALSE(IsPalindrome(10));
}


int main(int argc, char **argv) {
    ::testing::InitGoogleTest(&argc, argv);
    return RUN_ALL_TESTS();
}
