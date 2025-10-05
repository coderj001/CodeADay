#include "gtest/gtest.h"
#include "ShortestPalindrome.h"
#include <chrono>

TEST(ShortestPalindromeTest, Example1) {
    EXPECT_EQ(shortestPalindrome("aacecaaa"), "aaacecaaa");
}

TEST(ShortestPalindromeTest, Example2) {
    EXPECT_EQ(shortestPalindrome("abcd"), "dcbabcd");
}

TEST(ShortestPalindromeTest, EmptyString) {
    EXPECT_EQ(shortestPalindrome(""), "");
}

TEST(ShortestPalindromeTest, SingleCharacter) {
    EXPECT_EQ(shortestPalindrome("a"), "a");
}

TEST(ShortestPalindromeTest, AlreadyPalindrome) {
    EXPECT_EQ(shortestPalindrome("racecar"), "racecar");
}

TEST(ShortestPalindromeTest, NoPalindrome) {
    EXPECT_EQ(shortestPalindrome("abc"), "cbabc");
}

TEST(ShortestPalindromeTest, LongString) {
    EXPECT_EQ(shortestPalindrome("abacaba"), "abacaba");
}

TEST(ShortestPalindromeTest, LongString2) {
    EXPECT_EQ(shortestPalindrome("babad"), "dababad");
}

TEST(ShortestPalindromeTest, FiftyThousandTwoCharacters) {
    std::string input = "a";
    for (int i = 0; i < 50001; ++i) {
        input += "b";
    }
    std::string expected = "b";
    for (int i = 0; i < 50000; ++i) {
        expected += "b";
    }
    expected += "a";
    for (int i = 0; i < 50001; ++i) {
        expected += "b";
    }

    auto start = std::chrono::high_resolution_clock::now();
    std::string result = shortestPalindrome(input);
    auto end = std::chrono::high_resolution_clock::now();
    std::chrono::duration<double> diff = end - start;

    EXPECT_EQ(result, expected);
    EXPECT_LT(diff.count(), 1.0); // Expect the test to complete in less than 1 second
}
