#include "../include/FindFaultySensor.h"

int FindFaultySensor(const vector<int>& s1,const vector<int>& s2) {
  int n = s1.size();

  for (int i = 0; i < n - 1; i++) {
    if (s1[i] != s2[i]) {
      if (s1[i+1] == s2[i]) {
        return 2;
      } else if (s2[i+1] == s1[i]){
        return 1;
      }
    }
  }
  return -1;
};
