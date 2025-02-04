/**
* Maximum Depth of Binary Tree in cpp
**/

#include <bits/stdc++.h>

using namespace std;

struct Node {
  int data;
  Node* right;
  Node* left;

  Node(): data(0), right(nullptr), left(nullptr) {}
  Node(int x): data(x), right(nullptr), left(nullptr) {}
  Node(int x, Node* l, Node* r): data(x), right(r), left(l) {}
  ~Node() {
    delete right;
    delete left;
  }
};

Node* insertAll(vector<size_t> v){
  if (v.empty()) return nullptr;

  Node* root = new Node(v[0]);

  for (size_t i = 1; i < v.size(); i++) {
    Node* curr = root;
    Node* newNode = new Node(v[i]);

    while(true){
      if (v[i] < static_cast<size_t>(curr -> data)) {
        if (curr -> left == nullptr) {
          curr -> left = newNode;
          break;
        }
        curr = curr -> left;
      }
      else {
        if (curr -> right == nullptr) {
          curr -> right = newNode;
          break;
        }
        curr = curr -> right;
      }
    }
  }
  return root;
}


int maxDepth(Node* root) {
    if (root == nullptr) return -1;
    int rHeight = maxDepth(root->right);
    int lHeight = maxDepth(root->left);
    return max(lHeight, rHeight) + 1;
}
        
