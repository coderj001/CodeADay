#ifndef MAX_DEPTH_TREE
#define MAX_DEPTH_TREE

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

Node* insertAll(vector<size_t> v);
size_t maxDepth(Node* root);

#endif // MAX_DEPTH_TREE

