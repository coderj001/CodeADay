#include "max_consecutive_ones_flip_k.h"

Max_consecutive_ones_flip_k::Max_consecutive_ones_flip_k() {
    // Constructor
}

Max_consecutive_ones_flip_k::~Max_consecutive_ones_flip_k() {
    // Destructor
}

int Max_consecutive_ones_flip_k::solve(vector<int>nums, int k ) {
    int l = 0, zeros = 0, maxx = 0;

    // avoid type casting, prefer using size_t or range-based loops to avoid potential issues.
    for (int r = 0; r < static_cast<int>(nums.size()); r++) {
        if (nums[r] == 0) zeros++;
        while(k < zeros){
            if (nums[l]==0) zeros--;
            l++;
        }

        maxx = max(maxx, r-l+1);
    }

    return maxx;
}
