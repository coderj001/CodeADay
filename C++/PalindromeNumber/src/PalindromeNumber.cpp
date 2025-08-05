#include "../include/PalindromeNumber.h"


bool IsPalindrome(int x){
    int n = 0;
    int cp = x;
    while(x > 0){
        int c = x % 10;
        n = n * 10 + c;
        x = x / 10;
    }

    if (cp == n) {
        return true;
    }
    return false;
}
