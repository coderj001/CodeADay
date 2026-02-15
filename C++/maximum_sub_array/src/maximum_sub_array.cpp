#include "maximum_sub_array.h"

Maximum_sub_array::Maximum_sub_array() {
    // Constructor
}

Maximum_sub_array::~Maximum_sub_array() {
    // Destructor
}

// func window(_ nums: [Int], K: Int) -> [Int] {
// //    guard K > 0, K <= nums.count else { return }
//     var sum = 0
//     var sumIndices = [Int]()
//     var windowSum = 0

//     for index in 0..<nums.count {
//         windowSum += nums[index]
//         if index >= K - 1 {
//             let start = index - K + 1
// //            let win = Array(nums[start...index])
// //            print(win)

//             if windowSum > sum {
//                 sum = windowSum
//                 sumIndices = Array(nums[start...index])
//             }

//             windowSum -= nums[index - K + 1]
//         }
//     }

//     return sumIndices
// }

int Maximum_sub_array::solve(vector<int> v) {
    int crrSum = v[0];
    int maxSum = v[0];
    for (int i = 1; i < v.size(); i++) {
        crrSum = max(crrSum+v[i], v[i]);
        maxSum = max(maxSum, crrSum);
    }
    return maxSum;
}
