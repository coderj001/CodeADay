#include "maximum_sub_array.h"
#include <gtest/gtest.h>

using namespace std;

// Test fixture class
class Maximum_sub_arrayTest : public ::testing::Test {
protected:
    Maximum_sub_array solution;

    void SetUp() override {
        // Setup code before each test
    }

    void TearDown() override {
        // Cleanup code after each test
    }
};

// Basic functionality test
TEST_F(Maximum_sub_arrayTest, BasicTest) {
    // TODO: Add your basic test case here
    // Example:
    vector<int> input = {-2,1,-3,4,-1,2,1,-5,4};
    int expected_output = 6;
    EXPECT_EQ(solution.solve(input), expected_output);
    // ASSERT_TRUE(true) << "Basic test not implemented yet";

}

// Sample test case 1

// Main function for Google Test
int main(int argc, char **argv) {
    ::testing::InitGoogleTest(&argc, argv);
    return RUN_ALL_TESTS();
}
