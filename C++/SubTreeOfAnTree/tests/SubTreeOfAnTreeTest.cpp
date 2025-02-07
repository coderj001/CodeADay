#include <gtest/gtest.h>
#include <vector>

#include  "../include/SubTreeOfAnTree.h"


TreeNode* constructTree(const vector<int>& nodes) {
    if (nodes.empty() || nodes[0] == -1) {
        return nullptr;
    }

    vector<TreeNode*> treeNodes;
    TreeNode* root = new TreeNode(nodes[0]);
    treeNodes.push_back(root);

    int i = 1;
    while (!treeNodes.empty() && i < static_cast<int>(nodes.size())) {
        TreeNode* current = treeNodes.front();
        treeNodes.erase(treeNodes.begin());

        if (i < static_cast<int>(nodes.size()) && nodes[i] != -1) {
            current->left = new TreeNode(nodes[i]);
            treeNodes.push_back(current->left);
        }
        i++;

        if (i < static_cast<int>(nodes.size()) && nodes[i] != -1) {
            current->right = new TreeNode(nodes[i]);
            treeNodes.push_back(current->right);
        }
        i++;
    }
    return root;
}


TEST(SubtreeOfAnotherTreeTest, BasicTest) { 
    vector<int> root_nodes1 = {3, 4, 5, 1, 2};
    vector<int> subRoot_nodes1 = {4, 1, 2};
    TreeNode* root = constructTree(root_nodes1);
    TreeNode* subRoot = constructTree(subRoot_nodes1);
    EXPECT_TRUE(isSubTree(root, subRoot));

}

int main(int argc, char **argv) {
    ::testing::InitGoogleTest(&argc, argv);
    return RUN_ALL_TESTS();
}
