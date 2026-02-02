#include "../include/LongestSubStrWithoutRepeatingChars.h"

// At all times, window must contain only unique characters.
// If duplicate appears → you must remove from left, not skip forward.

int LengthOfLongestSubstring(const string s){
    unordered_set<char> window;

    size_t l = 0, r = 0;
    size_t maxLen = 0;

    while (r < s.size()) {
        if (window.find(s[r]) == window.end()) {
           window.insert(s[r]);
           r++;
           maxLen = std::max(maxLen, window.size()); // expand not found
        } else{
            window.erase(s[l]);
            l++;
        } 
    }
    return maxLen;

}
