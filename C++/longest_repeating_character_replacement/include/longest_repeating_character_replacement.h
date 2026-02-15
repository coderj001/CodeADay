#ifndef LONGEST_REPEATING_CHARACTER_REPLACEMENT_H
#define LONGEST_REPEATING_CHARACTER_REPLACEMENT_H

#include <iostream>
#include <vector>
#include <algorithm>
#include <unordered_map>

using namespace std;

class Longest_repeating_character_replacement {
public:
    Longest_repeating_character_replacement();
    ~Longest_repeating_character_replacement();

    // TODO: Add your function declarations here
    int characterReplacement(string s, int k);
    int maxFeq(unordered_map<char, int> m);

private:
    // TODO: Add private members here
};

#endif // LONGEST_REPEATING_CHARACTER_REPLACEMENT_H
