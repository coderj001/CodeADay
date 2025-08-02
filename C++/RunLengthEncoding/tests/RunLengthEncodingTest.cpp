#include <gtest/gtest.h>

#include "../include/RunLengthEncoding.h"

namespace compression_tests {
TEST(RunLengthEncodingTest, HandlesCorrectEncoding) {
  EXPECT_EQ(Compression("AAABBC"), "A3B2C1");
  EXPECT_EQ(Compression("WWWWWWWWWWWWBWWWWWWWWWWWWBBB"), "W12B1W12B3");
  EXPECT_EQ(Compression("abc"), "a1b1c1");
}
} // namespace

int main(int argc, char **argv) {
  ::testing::InitGoogleTest(&argc, argv);
  return RUN_ALL_TESTS();
}
