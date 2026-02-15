#include "longest_repeating_character_replacement.h"

Longest_repeating_character_replacement::Longest_repeating_character_replacement() {
    // Constructor
}

Longest_repeating_character_replacement::~Longest_repeating_character_replacement() {
    // Destructor
}

int Longest_repeating_character_replacement::maxFeq(unordered_map<char, int> m) {
    int maxVal = m.begin() -> second;
    for (const auto& pair: m) {
        if (pair.second > maxVal) {
            maxVal = pair.second;
        }
    }
    return maxVal;
}

int Longest_repeating_character_replacement::characterReplacement(string s, int k) {
    int maxSubStr = 0, r = 0, l = 0;
    unordered_map<char, int> m;

    for(;r<static_cast<int>(s.size()); r++){
        if(m.find(s[r]) != m.end()){
            m[s[r]]++;
        } else {
            m[s[r]] = 1;
        }

        if (r+1-maxFeq(m) > k) {
            l++;
        }
        maxSubStr = max(maxSubStr, r+1-l);
    }

    return maxSubStr;
}
