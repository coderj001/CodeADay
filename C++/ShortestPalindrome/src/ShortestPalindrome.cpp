#include "../include/ShortestPalindrome.h"
#include <algorithm>

bool checkPalindrome(string s){
    size_t n = s.length();
    for (size_t i = 0; i < n / 2; i++) 
        if (s[i] != s[n - i - 1]) 
            return false;
    return true;
}

string shortestPalindrome(string s) {
    int n = s.length();
    if (n == 0) return "";

    int p = 1;
    for (int i = n; i > 0; i--) {
        if (checkPalindrome(s.substr(0, i))) {
            p = i;
            break;
        }
    }

    string suffix = s.substr(p, n - p);
    reverse(suffix.begin(), suffix.end());
    return suffix + s;
}
