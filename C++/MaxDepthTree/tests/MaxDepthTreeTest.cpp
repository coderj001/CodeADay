#include <gtest/gtest.h>

#include "../include/MaxDepthTree.h"


// TEST(MaxDepthTreeTest, EmptyTree) {
//     Node* root = nullptr;
//     EXPECT_EQ(maxDepth(root), -1);
// }

TEST(MaxDepthTreeTest, SingleNode) {
    Node* root = new Node(10);
    EXPECT_EQ(maxDepth(root), 0);
    delete root;
}

TEST(MaxDepthTreeTest, Example1) {
    std::vector<size_t> values = {3, 9, 20, 15, 7};
    Node* root = insertAll(values);
    EXPECT_EQ(maxDepth(root), 3);
    delete root;
}


TEST(MaxDepthTreeTest, MultipleNodes) {
    std::vector<size_t> values = {10, 5, 15, 3, 7, 12, 18};
    Node* root = insertAll(values);
    EXPECT_EQ(maxDepth(root), 2);
    delete root;
}

TEST(MaxDepthTreeTest, LeftSkewedTree) {
    std::vector<size_t> values = {10, 9, 8, 7, 6, 5};
    Node* root = insertAll(values);
    EXPECT_EQ(maxDepth(root), 5);
    delete root;
}

TEST(MaxDepthTreeTest, RightSkewedTree) {
    std::vector<size_t> values = {5, 6, 7, 8, 9, 10};
    Node* root = insertAll(values);
    EXPECT_EQ(maxDepth(root), 5);
    delete root;
}
