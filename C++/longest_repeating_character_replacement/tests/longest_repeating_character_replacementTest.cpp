#include "../include/longest_repeating_character_replacement.h"
#include <gtest/gtest.h>

using namespace std;

// Test fixture class
class Longest_repeating_character_replacementTest : public ::testing::Test {
protected:
    Longest_repeating_character_replacement solution;

    void SetUp() override {
        // Setup code before each test
    }

    void TearDown() override {
        // Cleanup code after each test
    }
};

// Basic functionality test
TEST_F(Longest_repeating_character_replacementTest, BasicTest1) {
    string s = "ABAB";
    int k = 2;
    int expected_output = 4;
    EXPECT_EQ(solution.characterReplacement(s, k), expected_output);
}

TEST_F(Longest_repeating_character_replacementTest, BasicTest2) {
    string s = "ABAA";
    int k = 0;
    int expected_output = 2;
    EXPECT_EQ(solution.characterReplacement(s, k), expected_output);
}

// Main function for Google Test
int main(int argc, char **argv) {
    ::testing::InitGoogleTest(&argc, argv);
    return RUN_ALL_TESTS();
}
