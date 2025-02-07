#include  "../include/SubTreeOfAnTree.h"

bool isSameTree(TreeNode* p, TreeNode* q){
    if (p == nullptr && q == nullptr) return true;
    if (p == nullptr || q == nullptr || p->val != q->val) return false;
    return isSameTree(p->right, q->right) && isSameTree(p->left, q->left);
}

bool isSubTree(TreeNode* root, TreeNode* subRoot){
    if (root == nullptr) return false;
    if (subRoot == nullptr) return true;

    if (isSameTree(root, subRoot)) return true;

    return isSubTree(root->left, subRoot) || isSubTree(root -> right, subRoot);
}


