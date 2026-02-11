#include "../include/max_consecutive_ones_flip_k.h"
#include <gtest/gtest.h>

using namespace std;

class Max_consecutive_ones_flip_kTest : public ::testing::Test {
protected:
    Max_consecutive_ones_flip_k solution;
};

//
// ---------- Level 1 : Basic sanity ----------
//

TEST_F(Max_consecutive_ones_flip_kTest, AllOnes) {
    vector<int> nums = {1,1,1,1,1};
    EXPECT_EQ(solution.solve(nums, 2), 5);
}

TEST_F(Max_consecutive_ones_flip_kTest, AllZeros_k1) {
    vector<int> nums = {0,0,0,0};
    EXPECT_EQ(solution.solve(nums, 1), 1);
}

TEST_F(Max_consecutive_ones_flip_kTest, AllZeros_kAll) {
    vector<int> nums = {0,0,0,0};
    EXPECT_EQ(solution.solve(nums, 4), 4);
}

TEST_F(Max_consecutive_ones_flip_kTest, NoFlipAllowed) {
    vector<int> nums = {1,0,1,1,0,1};
    EXPECT_EQ(solution.solve(nums, 0), 2);
}

//
// ---------- Level 2 : Typical dynamic window ----------
//

TEST_F(Max_consecutive_ones_flip_kTest, BasicExample1) {
    vector<int> nums = {1,0,1,0,1};
    EXPECT_EQ(solution.solve(nums, 1), 3);
}

TEST_F(Max_consecutive_ones_flip_kTest, BasicExample2) {
    vector<int> nums = {1,1,0,0,1,1,1};
    EXPECT_EQ(solution.solve(nums, 1), 4);
}

TEST_F(Max_consecutive_ones_flip_kTest, TwoFlipsMakeWholeArray) {
    vector<int> nums = {1,1,0,0,1,1,1};
    EXPECT_EQ(solution.solve(nums, 2), 7);
}

//
// ---------- Level 3 : Edge cases ----------
//

TEST_F(Max_consecutive_ones_flip_kTest, SingleZero) {
    vector<int> nums = {0};
    EXPECT_EQ(solution.solve(nums, 1), 1);
}

TEST_F(Max_consecutive_ones_flip_kTest, SingleOne) {
    vector<int> nums = {1};
    EXPECT_EQ(solution.solve(nums, 0), 1);
}

TEST_F(Max_consecutive_ones_flip_kTest, EmptyArray) {
    vector<int> nums = {};
    EXPECT_EQ(solution.solve(nums, 0), 0);
}

//
// ---------- Level 4 : Tricky interview style ----------
//

TEST_F(Max_consecutive_ones_flip_kTest, AlternatingSmallK) {
    vector<int> nums = {1,0,1,0,1,0,1,0};
    EXPECT_EQ(solution.solve(nums, 1), 3);
}

TEST_F(Max_consecutive_ones_flip_kTest, AlternatingLargeK) {
    vector<int> nums = {1,0,1,0,1,0,1,0,1};
    EXPECT_EQ(solution.solve(nums, 3), 7);
}


TEST_F(Max_consecutive_ones_flip_kTest, MultipleChoices) {
    vector<int> nums = {1,1,0,1,0,1,1,1,0,1};
    EXPECT_EQ(solution.solve(nums, 2), 8);
}

TEST_F(Max_consecutive_ones_flip_kTest, GivenPromptExample) {
    vector<int> nums = {1,0,0,1,1,0,1,0,1,1,1};
    EXPECT_EQ(solution.solve(nums, 2), 8);
}

//
// ---------- Google Test main ----------
//

int main(int argc, char **argv) {
    ::testing::InitGoogleTest(&argc, argv);
    return RUN_ALL_TESTS();
}
