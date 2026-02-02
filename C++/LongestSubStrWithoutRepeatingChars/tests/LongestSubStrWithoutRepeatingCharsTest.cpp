#include <gtest/gtest.h>

#include "../include/LongestSubStrWithoutRepeatingChars.h"


TEST(LongestSubStrWithoutRepeatingCharsTest, Testcase1){
    EXPECT_EQ(LengthOfLongestSubstring("abcabcbb"), 3);
    EXPECT_EQ(LengthOfLongestSubstring("bbbbb"), 1);
    EXPECT_EQ(LengthOfLongestSubstring("pwwkew"), 3);
}



