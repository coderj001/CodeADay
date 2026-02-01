#include <gtest/gtest.h>

#include "../include/FindFaultySensor.h"


TEST(FindFaultySensorTest, BasicTest){
    vector<int> v1 = {1,2,3}, v2 = {1,2,3};
    EXPECT_EQ(FindFaultySensor(v1, v2), -1);
}

TEST(FindFaultySensorTest, ShitInLeftValue){
    vector<int> v1 = {2,3,4,5,6}; 
    vector<int> v2 = {2,3,5,6,8};
    EXPECT_EQ(FindFaultySensor(v1, v2), 2);
}
