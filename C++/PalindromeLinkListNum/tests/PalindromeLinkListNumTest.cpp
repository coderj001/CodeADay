#include <gtest/gtest.h>

#include "../include/PalindromeLinkListNum.h"

TEST(PalindromeTest, NotPalindrome) {
    ListNode* head = new ListNode(1);
    head->next = new ListNode(2);
    head->next->next = new ListNode(1);

    EXPECT_TRUE(IsPalindrome(head));
}



int main(int argc, char **argv) {
    ::testing::InitGoogleTest(&argc, argv);
    return RUN_ALL_TESTS();
}

