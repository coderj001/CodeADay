#include "two_sum.h"
#include <gtest/gtest.h>

class TwoSumTest : public ::testing::Test {
protected:
    Two_sum solution;
};

TEST_F(TwoSumTest, BasicTest) {
    vector<int> v = {2,7,11,15};
    vector<int> v1 = solution.solve(v, 9);
    vector<int> v2 = {0, 1};

    EXPECT_EQ(v1, v2);
}

int main(int argc, char **argv) {
    ::testing::InitGoogleTest(&argc, argv);
    return RUN_ALL_TESTS();
}
