#include "gtest/gtest.h"
#include "RabinKarp.h"

TEST(RabinKarpTest, FindHashBasic) {
    EXPECT_EQ(findHash("abc"), findHash("abc"));
    EXPECT_NE(findHash("abc"), findHash("abd"));
}

TEST(RabinKarpTest, FindHashEmptyString) {
    EXPECT_EQ(findHash(""), 0);
}
