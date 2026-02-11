# DSA Project Manager v2.0

A comprehensive CLI tool to manage your Data Structures and Algorithms practice journey with **Google Test** integration.

## 🚀 Features

✅ **Quick Project Setup** - Create structured DSA projects in seconds  
✅ **Google Test Integration** - Professional testing framework included  
✅ **Problem Type Templates** - Pre-configured headers for different DSA categories  
✅ **Automatic Test Cases** - Generate comprehensive test case templates  
✅ **Build System** - Makefile with proper separation of main and test builds  
✅ **Project Tracking** - List and manage all your DSA projects  
✅ **Interactive Mode** - Guided project creation with helpful descriptions  
✅ **Color-Coded Interface** - Beautiful CLI with clear visual feedback  
✅ **Problem Type Guide** - Built-in guide to help choose the right category  

## 📋 Requirements

### Install Google Test (Ubuntu/Debian)
```bash
sudo apt-get update
sudo apt-get install libgtest-dev cmake
cd /usr/src/gtest
sudo cmake CMakeLists.txt
sudo make
sudo cp lib/*.a /usr/lib
```

### Install Google Test (macOS)
```bash
brew install googletest
```

### Install Google Test (Fedora/RHEL)
```bash
sudo dnf install gtest-devel
```

### Verify Installation
```bash
# Check if gtest libraries exist
ldconfig -p | grep gtest
# Should show: libgtest.so, libgtest_main.so
```

### Other Requirements
- **g++** with C++17 support (version 7.0+)
- **make** build tool
- **cmake** (for Google Test installation)

## 🔧 Installation

```bash
# Clone or download the script
wget https://your-repo/manager.sh  # or copy the file

# Make it executable
chmod +x manager.sh

# Optional: Add to PATH for global access
sudo cp manager.sh /usr/local/bin/dsa
```

## 🎯 Quick Start

### First-Time Users (Recommended)
```bash
# Launch interactive mode with guided setup
./manager.sh -i
```

### Experienced Users
```bash
# Create a project quickly
./manager.sh -t array -d easy -c two_sum
```

## 📖 Usage Guide

### Help & Documentation
```bash
# Show full help
./manager.sh --help

# Show problem type selection guide
./manager.sh --guide
```

### Creating Projects

#### 1. Interactive Mode (Best for Beginners)
```bash
./manager.sh -i
```
Follow the step-by-step wizard:
- Choose problem name
- Select problem type (with descriptions)
- Set difficulty level
- Enable test templates
- Review and confirm

#### 2. Command Line Mode
```bash
# Basic project
./manager.sh two_sum

# With type and difficulty
./manager.sh -t array -d easy two_sum

# With test case templates (recommended)
./manager.sh -t tree -c -d medium binary_tree_traversal

# Full options
./manager.sh -t dp -d hard -c longest_common_subsequence
```

### Managing Projects

```bash
# List all projects
./manager.sh -l

# Build and run a project
./manager.sh -r two_sum

# Clean build files
./manager.sh --clean two_sum
```

## 🎨 Command Reference

```
Usage: ./manager.sh [OPTIONS] <project_name>

Options:
  -h, --help              Show help message with examples
  --guide                 Show problem type selection guide
  -t, --type TYPE         Specify problem type
  -d, --difficulty LEVEL  Set difficulty (easy/medium/hard)
  -c, --testcases         Generate sample test templates
  -i, --interactive       Launch interactive setup wizard
  -l, --list              List all existing projects
  -r, --run PROJECT       Build and run project tests
  --clean PROJECT         Remove build files
```

## 📂 Project Structure

When you create a project named `two_sum`, the following structure is generated:

```
two_sum/
├── src/
│   ├── two_sum.cpp          # Solution implementation
│   └── main.cpp             # Main program entry point
├── include/
│   └── two_sum.h            # Header with declarations
├── tests/
│   └── two_sumTest.cpp      # Google Test test cases
├── build/                   # Build output (auto-generated)
│   ├── two_sum              # Main executable
│   └── two_sum_test         # Test executable
├── Makefile                 # Build configuration
├── README.md                # Problem description template
└── .gitignore               # Git ignore rules
```

## 🔬 Google Test Features

### Generated Test Structure
```cpp
#include <gtest/gtest.h>

class Two_sumTest : public ::testing::Test {
protected:
    void SetUp() override {
        // Setup before each test
    }
};

TEST_F(Two_sumTest, BasicTest) {
    // Your test here
    EXPECT_EQ(actual, expected);
}
```

### Available Assertions
```cpp
// Equality
EXPECT_EQ(val1, val2);      // val1 == val2
EXPECT_NE(val1, val2);      // val1 != val2

// Boolean
EXPECT_TRUE(condition);
EXPECT_FALSE(condition);

// Comparison
EXPECT_LT(val1, val2);      // val1 < val2
EXPECT_LE(val1, val2);      // val1 <= val2
EXPECT_GT(val1, val2);      // val1 > val2
EXPECT_GE(val1, val2);      // val1 >= val2

// Floating point
EXPECT_FLOAT_EQ(val1, val2);
EXPECT_DOUBLE_EQ(val1, val2);

// Exceptions
EXPECT_THROW(statement, exception_type);
EXPECT_NO_THROW(statement);
```

### Test Templates Generated with `-c` Flag
When you use the `-c` flag, the following tests are auto-generated:
- ✅ Basic functionality test
- ✅ Sample test case 1
- ✅ Sample test case 2
- ✅ Edge case: Empty input
- ✅ Edge case: Single element
- ✅ Edge case: Large input
- ✅ Edge case: Negative numbers

## 🛠️ Makefile Commands

Navigate to your project directory and use these commands:

```bash
make           # Build main executable
make test      # Build and run Google Tests
make run       # Build and run main program
make clean     # Remove build files
make rebuild   # Clean and rebuild
make help      # Show available targets
```

### Build Output
```bash
$ make test
Compiling src/two_sum.cpp...
Compiling tests/two_sumTest.cpp...
Linking test executable...
Running tests...
========================================
[==========] Running 1 test from 1 test suite.
[----------] Global test environment set-up.
[----------] 1 test from Two_sumTest
[ RUN      ] Two_sumTest.BasicTest
[       OK ] Two_sumTest.BasicTest (0 ms)
[----------] 1 test from Two_sumTest (0 ms total)

[==========] 1 test from 1 test suite ran. (0 ms total)
[  PASSED  ] 1 test.
========================================
```

## 📚 Problem Types

### Data Structures
- **array** - Arrays, subarrays, matrices, two pointers, sliding window
- **string** - String manipulation, pattern matching, substring problems
- **linked-list** - Singly/doubly linked lists, cycle detection
- **stack** - LIFO operations, monotonic stack, expression parsing
- **queue** - FIFO, deque, circular queue, sliding window
- **heap** - Priority queue, min/max heap, K-th element problems
- **tree** - Binary tree, BST, N-ary tree, traversals
- **graph** - Graph algorithms, BFS, DFS, shortest path

### Algorithmic Paradigms
- **sorting** - Sorting algorithms, custom comparators
- **searching** - Binary search, linear search, search variations
- **dp** - Dynamic programming, memoization, tabulation
- **greedy** - Greedy algorithms, interval scheduling
- **backtracking** - Recursive backtracking, permutations
- **math** - Mathematical problems, number theory

## 💡 Examples

### Example 1: Two Sum (Array Problem)
```bash
# Create project
./manager.sh -t array -d easy -c two_sum
cd two_sum

# Implement solution in src/two_sum.cpp
# Add test cases in tests/two_sumTest.cpp

# Build and test
make test

# Run main program
make run
```

### Example 2: Binary Tree Traversal
```bash
# Interactive mode
./manager.sh -i
# Select: tree, medium, with test cases

cd binary_tree_traversal

# Implement solution
vim src/binary_tree_traversal.cpp

# Test
make test
```

### Example 3: Dynamic Programming Problem
```bash
# Create with full options
./manager.sh -t dp -d hard -c longest_increasing_subsequence

cd longest_increasing_subsequence

# Edit README.md with problem statement
vim README.md

# Implement solution
vim src/longest_increasing_subsequence.cpp

# Add comprehensive tests
vim tests/longest_increasing_subsequenceTest.cpp

# Build and test
make test
```

## 🔄 Typical Workflow

```bash
# 1. Create project (interactive recommended for first time)
./manager.sh -i
# Or: ./manager.sh -t array -d medium -c problem_name

# 2. Navigate to project
cd problem_name

# 3. Understand the problem
vim README.md
# Add: problem statement, examples, constraints

# 4. Implement solution
vim src/problem_name.cpp

# 5. Write test cases
vim tests/problem_nameTest.cpp

# 6. Build and test
make test

# 7. Debug if needed
gdb ./build/problem_name_test

# 8. Test main program
make run

# 9. Review all problems
cd ..
./manager.sh -l
```

## 🎓 Best Practices

### 1. Use Test-Driven Development
```bash
# Write tests first
vim tests/two_sumTest.cpp
# Then implement solution
vim src/two_sum.cpp
# Run tests
make test
```

### 2. Document Your Approach
```markdown
## Approach
1. Use hash map to store complements
2. Iterate through array once
3. Check if complement exists

## Time Complexity: O(n)
## Space Complexity: O(n)
```

### 3. Add Multiple Test Cases
```cpp
TEST_F(Two_sumTest, BasicCase) {
    vector<int> nums = {2, 7, 11, 15};
    vector<int> result = solution.twoSum(nums, 9);
    EXPECT_EQ(result, vector<int>({0, 1}));
}

TEST_F(Two_sumTest, NegativeNumbers) {
    vector<int> nums = {-1, -2, -3, -4, -5};
    vector<int> result = solution.twoSum(nums, -8);
    EXPECT_EQ(result, vector<int>({2, 4}));
}
```

### 4. Track Your Progress
```bash
# List all problems
./manager.sh -l

# Output shows type and difficulty
1   two_sum                      [array] (Easy)
2   valid_parentheses            [stack] (Easy)
3   binary_tree_inorder          [tree] (Medium)
```

## 🐛 Troubleshooting

### Google Test Not Found
```bash
# Install Google Test
sudo apt-get install libgtest-dev

# Verify installation
pkg-config --cflags --libs gtest
```

### Compilation Errors
```bash
# Check g++ version (need 7.0+)
g++ --version

# Ensure C++17 support
g++ -std=c++17 --version
```

### Makefile Errors
```bash
# Clean and rebuild
make clean
make

# Check for missing files
ls -la src/ include/ tests/
```

### Test Execution Fails
```bash
# Run with verbose output
./build/project_name_test --gtest_verbose

# Run specific test
./build/project_name_test --gtest_filter=TestName.*
```

## 🔗 Integration with Version Control

```bash
# Each project includes .gitignore
cd two_sum
git init
git add .
git commit -m "Initial commit: Two Sum problem"

# Push to remote
git remote add origin your-repo-url
git push -u origin main
```

## 📊 Project Statistics

```bash
# Count total problems
./manager.sh -l | tail -n 1

# Count by difficulty
grep -r "Difficulty: Easy" */README.md | wc -l
grep -r "Difficulty: Medium" */README.md | wc -l
grep -r "Difficulty: Hard" */README.md | wc -l

# Count by type
grep -r "Type: array" */README.md | wc -l
```

## 🎯 Tips for Success

1. **Start with Interactive Mode** - Use `./manager.sh -i` to learn the system
2. **Always Use Test Cases** - Enable `-c` flag for comprehensive testing
3. **Document Everything** - Fill in README.md with problem details
4. **Use Version Control** - Git commit after solving each problem
5. **Review Regularly** - Use `./manager.sh -l` to track progress
6. **Time Yourself** - Add timestamps to track solving speed
7. **Add Comments** - Explain your approach in code
8. **Test Edge Cases** - Use provided edge case templates

## 🚀 Advanced Features

### Custom Test Filters
```bash
# Run specific test
./build/two_sum_test --gtest_filter="Two_sumTest.BasicTest"

# Run all tests except one
./build/two_sum_test --gtest_filter="-Two_sumTest.EdgeCase*"
```

### Continuous Testing
```bash
# Watch for changes and auto-test
while true; do
    make test
    inotifywait -e modify src/ tests/
done
```

### Batch Creation
```bash
# Create multiple related problems
for problem in two_sum three_sum four_sum; do
    ./manager.sh -t array -d medium $problem
done
```

## 📝 License

Free to use for personal DSA practice and learning.

## 🤝 Contributing

Feel free to customize the script for your needs:
- Add more problem types
- Modify templates
- Add additional build targets
- Create custom test frameworks
- Share your improvements!

## 📞 Support

For issues or suggestions:
1. Check the `--help` output
2. Use `--guide` for problem type help
3. Review this README
4. Check Google Test documentation

---

**Happy Coding! 🚀 Master DSA with confidence!**

## 📈 Sample Project List Output

```bash
$ ./manager.sh -l

╔════════════════════════════════════════════════════════════════╗
║                    Existing DSA Projects                       ║
╚════════════════════════════════════════════════════════════════╝
1   two_sum                      [array] (Easy)
2   valid_parentheses            [stack] (Easy)
3   reverse_linked_list          [linked-list] (Easy)
4   binary_tree_inorder          [tree] (Medium)
5   coin_change                  [dp] (Medium)
6   number_of_islands            [graph] (Medium)
7   word_break                   [dp] (Hard)
========================================
Total projects: 7
```
