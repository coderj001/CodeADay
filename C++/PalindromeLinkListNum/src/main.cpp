#include <iostream>

using namespace std;

struct Node {
  int val;
  Node *next;
  Node() : val(0), next(nullptr) {}
  Node(int x) : val(x), next(nullptr) {}
  Node(int x, Node *next) : val(x), next(next) {}
};

class LinkedList {
private:
  Node *head;

public:
  LinkedList() { head = nullptr; }

  ~LinkedList() {
    Node *current = head;
    while (current != nullptr) {
      Node *next = current->next;
      delete current;
      current = next;
    }
  }

  void insert(int val) {
    Node *tail = new Node(val);
    if (head == nullptr) {
      head = tail;
      return;
    }
    Node *tmp = head;
    while (tmp->next != nullptr) {
      tmp = tmp->next;
    }
    tmp->next = tail;
  }

  void insertAtHead(int val) {
    Node *newNode = new Node(val);
    newNode->next = head;
    head = newNode;
  }

  void display() {
    Node *current = head;
    while (current->next != nullptr) {
      cout << "[" << current->val << "]" << " -> ";
      current = current->next;
    }
    cout << "[" << current->val << "]" << endl;
  }

  bool deleteNode(int val) {
    if (head == nullptr)
      return false;

    if (head->val == val) {
      Node *tmp = head;
      head = head->next;
      delete tmp;
      return true;
    }

    Node *current = head;
    while (current->next != nullptr && current->next->val != val) {
      current = current->next;
    }

    if (current->next != nullptr) {
      Node *tmp = current->next;
      current->next = tmp->next;
      delete tmp;
      return true;
    }

    return false;
  }

  int length() {
    int counter = 0;
    Node *tmp = head;
    while (tmp != nullptr) {
      counter++;
      tmp = tmp->next;
    }
    return counter;
  }

  void reverse() {
    Node* crr = head;
    Node* next = nullptr;
    Node* prev = nullptr;

    while(crr != nullptr){

      next = crr -> next;
      crr -> next = prev;
      prev = crr;
      crr = next;
    }

  }
};

int main() {
  LinkedList list;

  list.insert(1);
  list.insert(2);
  list.insert(3);
  list.insert(4);

  list.insertAtHead(0);
  list.insertAtHead(-1);

  list.insert(5);
  list.insert(6);

  list.display();

  list.deleteNode(4);

  list.display();
  cout << list.length() << endl;
  list.reverse();
  list.display();
  return 0;
}
