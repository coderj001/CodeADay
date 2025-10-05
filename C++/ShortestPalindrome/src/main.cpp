#include <iostream>
#include "../include/ShortestPalindrome.h"

int main(int argc, char *argv[])
{
    std::string s1 = "aacecaaa";
    std::string result1 = shortestPalindrome(s1);
    std::cout << "Shortest palindrome for \"" << s1 << "\": " << result1 << std::endl; // Expected: aaacecaaa

    std::string s2 = "abcd";
    std::string result2 = shortestPalindrome(s2);
    std::cout << "Shortest palindrome for \"" << s2 << "\": " << result2 << std::endl; // Expected: dcbabcd

    std::string s3 = "babad";
    std::string result3 = shortestPalindrome(s3);
    std::cout << "Shortest palindrome for \"" << s3 << "\": " << result3 << std::endl; // Expected: dababad

    return 0;
}

