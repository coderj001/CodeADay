#include "../include/LetterCombinationsOfAPhoneNumber.h"


vector<string> LetterCombinations(const string& digits) {
    if (digits.empty()) { return {}; }

    unordered_map<char, vector<string>> map = {
        {'2', {"a", "b", "c"}},
        {'3', {"d", "e", "f"}},
        {'4', {"g", "h", "i"}},
        {'5', {"j", "k", "l"}},
        {'6', {"m", "n", "o"}},
        {'7', {"p", "q", "r", "s"}},
        {'8', {"t", "u", "v"}},
        {'9', {"w", "x", "y", "z"}}
    };

    if (digits.size() == 1) {
        return map[digits[0]];
    }

    vector<string> result = map[digits[0]];
    for (size_t i = 1; i < digits.size(); ++i) {
        vector<string> temp;
        for (const string& prefix : result) {
            for (const string& suffix : map[digits[i]]) {
                temp.push_back(prefix + suffix);
            }
        }
        result = temp;
    }

    return result;
}

