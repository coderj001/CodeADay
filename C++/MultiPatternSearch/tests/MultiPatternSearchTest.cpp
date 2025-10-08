#include "MultiPatternSearch.h"
#include "gtest/gtest.h"
#include <map>
#include <string>
#include <vector>


// Basic test case 1
TEST(MultiPatternSearchTest, BasicTest1) {
  string text = "AABAAC";
  string pattern = {"ABA"};
  int expected = 1;
  ASSERT_EQ(MultiPatternSearch::search(text, pattern), expected);
}

// // Basic test case 2
// TEST(MultiPatternSearchTest, BasicTest2) {
//   string text = "ababcabcab";
//   vector<string> patterns = {"ab", "abc", "c"};
//   map<string, vector<int>> expected = {
//       {"ab", {0, 2, 7}}, {"abc", {2, 5}}, {"c", {4, 8}}};
//   ASSERT_EQ(MultiPatternSearch::search(text, patterns), expected);
// }


// // Test case: Empty text
// TEST(MultiPatternSearchTest, EmptyText) {
//   string text = "";
//   vector<string> patterns = {"a", "b"};
//   map<string, vector<int>> expected = {};
//   ASSERT_EQ(MultiPatternSearch::search(text, patterns), expected);
// }

// // Test case: Empty patterns
// TEST(MultiPatternSearchTest, EmptyPatterns) {
//   string text = "some random text";
//   vector<string> patterns = {};
//   map<string, vector<int>> expected = {};
//   ASSERT_EQ(MultiPatternSearch::search(text, patterns), expected);
// }

// // Test case: Patterns not found in text
// TEST(MultiPatternSearchTest, PatternsNotFound) {
//   string text = "abcdef";
//   vector<string> patterns = {"x", "y", "z"};
//   map<string, vector<int>> expected = {};
//   ASSERT_EQ(MultiPatternSearch::search(text, patterns), expected);
// }

// // Test case: Single character pattern
// TEST(MultiPatternSearchTest, SingleCharPattern) {
//   string text = "aaaaa";
//   vector<string> patterns = {"a"};
//   map<string, vector<int>> expected = {{"a", {0, 1, 2, 3, 4}}};
//   ASSERT_EQ(MultiPatternSearch::search(text, patterns), expected);
// }

// // Test case: Patterns longer than text
// TEST(MultiPatternSearchTest, PatternLongerThanText) {
//   string text = "abc";
//   vector<string> patterns = {"abcd", "abcde"};
//   map<string, vector<int>> expected = {};
//   ASSERT_EQ(MultiPatternSearch::search(text, patterns), expected);
// }

