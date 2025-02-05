#include <iostream>

#include "../include/FibUseDny.h"

using namespace std;

int main(int argc, char *argv[]) {
  std::map<int, lint> memo = {};
  cout << fib(4, memo);
  cout << endl;
  return 0;
}
