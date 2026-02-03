#include "../include/MaxPointsYouCanObtainFromCards.h"


// cardPoints = [1,2,3,4,5,6,1]
//               |   |
// k = 3

int MaxPointsYouCanObtain(vector<int> cardPoints, int k){
    int sum = accumulate(cardPoints.begin(), cardPoints.begin()+k, 0);
    int max_sum = sum;
    int n = cardPoints.size();

    for (int i = 0; i < k; i++) {
        sum = sum - cardPoints[k - 1 - i] + cardPoints[n - 1 - i];
        max_sum = max(sum, max_sum);
    }
    return max_sum;
}
