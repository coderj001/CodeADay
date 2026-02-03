#include <gtest/gtest.h>

#include "../include/MaxPointsYouCanObtainFromCards.h"

TEST(MaxPointsYouCanObtain, TestSuite1){
    vector<int> cardPoints = { 1,2,3,4,5,6,1 }; 
    int k = 3;
    EXPECT_EQ(MaxPointsYouCanObtain(cardPoints, k), 12);
}

TEST(MaxPointsYouCanObtain, TestSuite2){
    vector<int> cardPoints = {100,40,17,9,73,75}; 
    int k = 3;
    EXPECT_EQ(MaxPointsYouCanObtain(cardPoints, k), 248);
}

TEST(MaxPointsYouCanObtain, TestSuite3){
    vector<int> cardPoints = {96,90,41,82,39,74,64,50,30}; 
    int k = 8;
    EXPECT_EQ(MaxPointsYouCanObtain(cardPoints, k), 536);
}
