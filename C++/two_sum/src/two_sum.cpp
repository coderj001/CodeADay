#include "two_sum.h"

Two_sum::Two_sum() {
    // Constructor
}

Two_sum::~Two_sum() {
    // Destructor
}

vector<int> Two_sum::solve(vector<int>& nums, int target) {
    unordered_map<int, int> map;
    int n = nums.size();

    for (int i = 0; i < n; i++) {
        int comp = target - nums[i];
        if (map.find(nums[i]) == map.end()) map[comp] = i;
        else return {map[nums[i]], i};
    }

    return {};
}

// Example: Main function for testing
/*
int main() {
    Two_sum solution;
    solution.solve();
    return 0;
}
*/
