#!/bin/bash

# Colors for output - Using printf-compatible format
RED='\033[0;31m'
GREEN='\033[0;32m'
YELLOW='\033[1;33m'
BLUE='\033[0;34m'
CYAN='\033[0;36m'
MAGENTA='\033[0;35m'
BOLD='\033[1m'
NC='\033[0m' # No Color

# Color print functions for consistent output
print_red() { printf "${RED}%s${NC}\n" "$1"; }
print_green() { printf "${GREEN}%s${NC}\n" "$1"; }
print_yellow() { printf "${YELLOW}%s${NC}\n" "$1"; }
print_blue() { printf "${BLUE}%s${NC}\n" "$1"; }
print_cyan() { printf "${CYAN}%s${NC}\n" "$1"; }
print_magenta() { printf "${MAGENTA}%s${NC}\n" "$1"; }
print_bold() { printf "${BOLD}%s${NC}\n" "$1"; }

# Default values
TEMPLATE_DIR="template"
PROBLEM_TYPE="general"
ADD_TESTCASES=false
DIFFICULTY=""

# Function to display usage
usage() {
    printf "${CYAN}╔════════════════════════════════════════════════════════════════╗${NC}\n\n"
    printf "${CYAN}║                   ${BLUE}DSA Project Manager${CYAN}                         ║${NC}\n\n"
    printf "${CYAN}║              Manage your DSA journey with ease!                ║${NC}\n\n"
    printf "${CYAN}╚════════════════════════════════════════════════════════════════╝${NC}\n\n"
    printf "\n\n"

    printf "${YELLOW}USAGE:${NC}\n\n"
    printf "    $0 [OPTIONS] <project_name>\n\n\n"

    printf "${YELLOW}OPTIONS:${NC}\n\n"
    printf "    ${GREEN}-h, --help${NC}              Show this help message\n\n"
    printf "    ${GREEN}-t, --type TYPE${NC}         Specify problem type (see types below)\n\n"
    printf "    ${GREEN}-d, --difficulty LEVEL${NC}  Set difficulty: easy, medium, hard\n\n"
    printf "    ${GREEN}-c, --testcases${NC}         Generate sample test case templates\n\n"
    printf "    ${GREEN}-i, --interactive${NC}       Launch interactive setup wizard\n\n"
    printf "    ${GREEN}-l, --list${NC}              List all existing projects\n\n"
    printf "    ${GREEN}-r, --run PROJECT${NC}       Build and execute a project\n\n"
    printf "    ${GREEN}--clean PROJECT${NC}         Remove build files\n\n"
    printf "    ${GREEN}--guide${NC}                 Show problem type selection guide\n\n\n"

    printf "${YELLOW}PROBLEM TYPES:${NC}\n\n"
    printf "    ${CYAN}Data Structures:${NC}\n\n"
    printf "        array          - Arrays, subarrays, matrices\n\n"
    printf "        string         - String manipulation, pattern matching\n\n"
    printf "        linked-list    - Singly/doubly linked lists\n\n"
    printf "        stack          - LIFO operations, monotonic stack\n\n"
    printf "        queue          - FIFO, deque, circular queue\n\n"
    printf "        heap           - Priority queue, min/max heap\n\n"
    printf "        tree           - Binary tree, BST, N-ary tree\n\n"
    printf "        graph          - Graph algorithms, traversals\n\n"
    printf "    \n\n"
    printf "    ${CYAN}Algorithmic Paradigms:${NC}\n\n"
    printf "        sorting        - Sorting algorithms\n\n"
    printf "        searching      - Binary search, linear search\n\n"
    printf "        dp             - Dynamic programming\n\n"
    printf "        greedy         - Greedy algorithms\n\n"
    printf "        backtracking   - Recursive backtracking\n\n"
    printf "        math           - Mathematical problems\n\n"
    printf "        general        - Miscellaneous problems\n\n\n"

    printf "${YELLOW}EXAMPLES:${NC}\n\n"
    printf "    ${BLUE}# Create a basic project${NC}\n\n"
    printf "    $0 two_sum\n\n\n"
    printf "    ${BLUE}# Create with type and difficulty${NC}\n\n"
    printf "    $0 -t array -d easy two_sum\n\n\n"
    printf "    ${BLUE}# Create with test cases${NC}\n\n"
    printf "    $0 -t tree -c -d medium binary_tree_traversal\n\n\n"
    printf "    ${BLUE}# Interactive mode (recommended for beginners)${NC}\n\n"
    printf "    $0 -i\n\n\n"
    printf "    ${BLUE}# View problem type guide${NC}\n\n"
    printf "    $0 --guide\n\n\n"
    printf "    ${BLUE}# List all projects${NC}\n\n"
    printf "    $0 -l\n\n\n"
    printf "    ${BLUE}# Build and run${NC}\n\n"
    printf "    $0 -r two_sum\n\n\n"

    printf "${YELLOW}QUICK START:${NC}\n\n"
    printf "    1. Run interactive mode: ${GREEN}$0 -i${NC}\n\n"
    printf "    2. Follow the prompts to create your project\n\n"
    printf "    3. Navigate to project: ${GREEN}cd <project_name>${NC}\n\n"
    printf "    4. Implement solution in: ${GREEN}src/<project_name>.cpp${NC}\n\n"
    printf "    5. Build and test: ${GREEN}make test${NC}\n\n\n"

    printf "${YELLOW}REQUIREMENTS:${NC}\n\n"
    printf "    • g++ with C++17 support\n\n"
    printf "    • Google Test (libgtest-dev)\n\n"
    printf "    • make\n\n\n"

    printf "${YELLOW}TIPS:${NC}\n\n"
    printf "    • Use ${GREEN}-c${NC} flag to auto-generate test templates\n\n"
    printf "    • Document your approach in README.md\n\n"
    printf "    • Run ${GREEN}$0 --guide${NC} for help choosing problem types\n\n\n"

    printf "For more information, visit: https://github.com/google/googletest\n\n\n"
    exit 0
}

# Function to show problem type guide
show_guide() {
    printf "${CYAN}╔════════════════════════════════════════════════════════════════╗${NC}\n\n"
    printf "${CYAN}║              ${BLUE}Problem Type Selection Guide${CYAN}                     ║${NC}\n\n"
    printf "${CYAN}╚════════════════════════════════════════════════════════════════╝${NC}\n\n"
    printf "\n\n"

    printf "${YELLOW}How to Choose the Right Problem Type:${NC}\n\n\n"

    printf "${GREEN}ARRAY${NC} - Choose when:\n\n"
    printf "  • Working with contiguous memory/indexed elements\n\n"
    printf "  • Sliding window, two pointers, prefix sum\n\n"
    printf "  • Examples: Two Sum, Maximum Subarray, Product of Array\n\n\n"

    printf "${GREEN}STRING${NC} - Choose when:\n\n"
    printf "  • Text processing, pattern matching\n\n"
    printf "  • Substring problems, palindromes\n\n"
    printf "  • Examples: Longest Substring, Valid Anagram, KMP\n\n\n"

    printf "${GREEN}LINKED-LIST${NC} - Choose when:\n\n"
    printf "  • Dynamic insertion/deletion needed\n\n"
    printf "  • Reverse, cycle detection, merge operations\n\n"
    printf "  • Examples: Reverse List, Detect Cycle, Merge Lists\n\n\n"

    printf "${GREEN}STACK${NC} - Choose when:\n\n"
    printf "  • LIFO order needed\n\n"
    printf "  • Parentheses matching, expression evaluation\n\n"
    printf "  • Examples: Valid Parentheses, Min Stack, Asteroid Collision\n\n\n"

    printf "${GREEN}QUEUE${NC} - Choose when:\n\n"
    printf "  • FIFO order needed\n\n"
    printf "  • Level-order traversal, scheduling\n\n"
    printf "  • Examples: Recent Counter, Design Queue, Circular Queue\n\n\n"

    printf "${GREEN}HEAP${NC} - Choose when:\n\n"
    printf "  • Need quick access to min/max element\n\n"
    printf "  • K-th largest/smallest problems\n\n"
    printf "  • Examples: Kth Largest, Merge K Lists, Top K Frequent\n\n\n"

    printf "${GREEN}TREE${NC} - Choose when:\n\n"
    printf "  • Hierarchical data structure\n\n"
    printf "  • Tree traversals (inorder, preorder, postorder)\n\n"
    printf "  • Examples: Binary Tree Traversal, LCA, Path Sum\n\n\n"

    printf "${GREEN}GRAPH${NC} - Choose when:\n\n"
    printf "  • Network/relationship problems\n\n"
    printf "  • BFS, DFS, shortest path, connectivity\n\n"
    printf "  • Examples: Number of Islands, Course Schedule, Dijkstra\n\n\n"

    printf "${GREEN}DYNAMIC PROGRAMMING${NC} - Choose when:\n\n"
    printf "  • Optimization problems (min/max)\n\n"
    printf "  • Overlapping subproblems\n\n"
    printf "  • Examples: Fibonacci, Knapsack, LCS\n\n\n"

    printf "${GREEN}GREEDY${NC} - Choose when:\n\n"
    printf "  • Local optimum leads to global optimum\n\n"
    printf "  • Interval scheduling, activity selection\n\n"
    printf "  • Examples: Jump Game, Gas Station, Meeting Rooms\n\n\n"

    printf "${GREEN}BACKTRACKING${NC} - Choose when:\n\n"
    printf "  • Need to explore all possibilities\n\n"
    printf "  • Permutations, combinations, subset problems\n\n"
    printf "  • Examples: N-Queens, Sudoku Solver, Generate Parentheses\n\n\n"

    printf "${GREEN}SORTING${NC} - Choose when:\n\n"
    printf "  • Implementing/learning sorting algorithms\n\n"
    printf "  • Custom comparators needed\n\n"
    printf "  • Examples: Quick Sort, Merge Sort, Bucket Sort\n\n\n"

    printf "${GREEN}SEARCHING${NC} - Choose when:\n\n"
    printf "  • Finding elements in sorted/unsorted arrays\n\n"
    printf "  • Binary search variants\n\n"
    printf "  • Examples: Binary Search, Search in Rotated Array\n\n\n"

    printf "${GREEN}MATH${NC} - Choose when:\n\n"
    printf "  • Mathematical computations\n\n"
    printf "  • Number theory, combinatorics\n\n"
    printf "  • Examples: Fibonacci, Prime Numbers, GCD/LCM\n\n\n"

    printf "${YELLOW}Still unsure?${NC} Use ${GREEN}$0 -i${NC} for interactive mode!\n\n\n"
    exit 0
}

# Function to get problem-specific headers
get_headers_for_type() {
    local type=$1
    case $type in
        array|sorting|searching)
            echo "#include <vector>
#include <algorithm>
#include <numeric>"
            ;;
        string)
            echo "#include <string>
#include <algorithm>
#include <sstream>
#include <cctype>"
            ;;
        tree|graph)
            echo "#include <vector>
#include <queue>
#include <stack>
#include <map>
#include <set>
#include <unordered_map>"
            ;;
        linked-list)
            echo "#include <iostream>"
            ;;
        stack|queue)
            echo "#include <stack>
#include <queue>
#include <deque>"
            ;;
        heap)
            echo "#include <queue>
#include <vector>
#include <functional>"
            ;;
        dp)
            echo "#include <vector>
#include <algorithm>
#include <climits>
#include <cstring>"
            ;;
        math)
            echo "#include <cmath>
#include <numeric>
#include <algorithm>
#include <climits>"
            ;;
        greedy|backtracking)
            echo "#include <vector>
#include <algorithm>
#include <set>
#include <map>"
            ;;
        *)
            echo "#include <vector>
#include <algorithm>"
            ;;
    esac
}

# Function to create header file
create_header() {
    local project=$1
    local type=$2
    local header_file="$project/include/${project}.h"

    cat > "$header_file" << EOF
#ifndef ${project^^}_H
#define ${project^^}_H

#include <iostream>
$(get_headers_for_type "$type")

using namespace std;

class ${project^} {
public:
    ${project^}();
    ~${project^}();

    // TODO: Add your function declarations here
    void solve();

private:
    // TODO: Add private members here
};

#endif // ${project^^}_H
EOF

    printf "${GREEN}✓${NC} Header file created: $header_file\n"
}

# Function to create source file
create_source() {
    local project=$1
    local type=$2
    local src_file="$project/src/${project}.cpp"

    cat > "$src_file" << EOF
#include "${project}.h"

${project^}::${project^}() {
    // Constructor
}

${project^}::~${project^}() {
    // Destructor
}

void ${project^}::solve() {
    // TODO: Implement your solution here
    cout << "Solving $project problem..." << endl;
}
EOF

    printf "${GREEN}✓${NC} Source file created: $src_file\n"
}

# Function to create main.cpp
create_main() {
    local project=$1
    local main_file="$project/src/main.cpp"

    cat > "$main_file" << EOF
#include "${project}.h"

int main() {
    cout << "========================================" << endl;
    cout << "Project: $project" << endl;
    cout << "========================================" << endl;

    ${project^} solution;
    solution.solve();

    cout << "========================================" << endl;
    cout << "Execution completed!" << endl;
    cout << "========================================" << endl;

    return 0;
}
EOF

    printf "${GREEN}✓${NC} Main file created: $main_file\n"
}

# Function to create test file
create_test() {
    local project=$1
    local type=$2
    local add_samples=$3
    local test_file="$project/tests/${project}Test.cpp"

    cat > "$test_file" << EOF
#include "${project}.h"
#include <gtest/gtest.h>

using namespace std;

// Test fixture class
class ${project^}Test : public ::testing::Test {
protected:
    ${project^} solution;

    void SetUp() override {
        // Setup code before each test
    }

    void TearDown() override {
        // Cleanup code after each test
    }
};

// Basic functionality test
TEST_F(${project^}Test, BasicTest) {
    // TODO: Add your basic test case here
    // Example:
    // EXPECT_EQ(solution.solve(input), expected_output);
    ASSERT_TRUE(true) << "Basic test not implemented yet";
}

EOF

    if [ "$add_samples" = true ]; then
        cat >> "$test_file" << EOF
// Sample test case 1
TEST_F(${project^}Test, SampleTest1) {
    // TODO: Test case 1
    // Input:
    // Expected Output:

    // Example assertions:
    // EXPECT_EQ(actual, expected);
    // ASSERT_NE(actual, unexpected);
    // EXPECT_TRUE(condition);
    // EXPECT_FALSE(condition);
    // EXPECT_LT(a, b);  // less than
    // EXPECT_LE(a, b);  // less than or equal
    // EXPECT_GT(a, b);  // greater than
    // EXPECT_GE(a, b);  // greater than or equal

    ASSERT_TRUE(true) << "Sample test 1 not implemented yet";
}

// Sample test case 2
TEST_F(${project^}Test, SampleTest2) {
    // TODO: Test case 2
    // Input:
    // Expected Output:

    ASSERT_TRUE(true) << "Sample test 2 not implemented yet";
}

// Edge case: Empty input
TEST_F(${project^}Test, EdgeCaseEmpty) {
    // TODO: Test with empty input
    // Example:
    // vector<int> empty_input = {};
    // EXPECT_EQ(solution.solve(empty_input), expected);

    ASSERT_TRUE(true) << "Empty input test not implemented yet";
}

// Edge case: Single element
TEST_F(${project^}Test, EdgeCaseSingleElement) {
    // TODO: Test with single element

    ASSERT_TRUE(true) << "Single element test not implemented yet";
}

// Edge case: Large input
TEST_F(${project^}Test, EdgeCaseLargeInput) {
    // TODO: Test with large input
    // Example:
    // vector<int> large_input(10000, 1);
    // EXPECT_NO_THROW(solution.solve(large_input));

    ASSERT_TRUE(true) << "Large input test not implemented yet";
}

// Edge case: Negative numbers (if applicable)
TEST_F(${project^}Test, EdgeCaseNegativeNumbers) {
    // TODO: Test with negative numbers

    ASSERT_TRUE(true) << "Negative numbers test not implemented yet";
}

EOF
    fi

    cat >> "$test_file" << EOF
// Main function for Google Test
int main(int argc, char **argv) {
    ::testing::InitGoogleTest(&argc, argv);
    return RUN_ALL_TESTS();
}
EOF

    printf "${GREEN}✓${NC} Test file created with Google Test: $test_file\n"
}

# Function to create README
create_readme() {
    local project=$1
    local type=$2
    local difficulty=$3
    local readme_file="$project/README.md"

    cat > "$readme_file" << EOF
# $project

## Problem Information
- **Type:** $type
- **Difficulty:** ${difficulty:-Not specified}
- **Date Created:** $(date +"%Y-%m-%d")

## Problem Statement
<!-- Add problem description here -->

TODO: Describe the problem

## Examples

### Example 1:
\`\`\`
Input:
Output:
Explanation:
\`\`\`

### Example 2:
\`\`\`
Input:
Output:
Explanation:
\`\`\`

## Constraints
<!-- Add constraints here -->

## Approach

### Algorithm
1. TODO: Step 1
2. TODO: Step 2
3. TODO: Step 3

### Time Complexity
- TODO: O(?)

### Space Complexity
- TODO: O(?)

## Build and Run

\`\`\`bash
# Build the project
make

# Run tests
make test

# Clean build files
make clean
\`\`\`

## Notes
<!-- Add any additional notes or learnings here -->

## Related Problems
- TODO: Add related problems

EOF

    printf "${GREEN}✓${NC} README created: $readme_file\n"
}

# Function to create Makefile
create_makefile() {
    local project=$1
    local makefile="$project/Makefile"

    cat > "$makefile" << 'EOF'
# Compiler settings
CXX = g++
CXXFLAGS = -std=c++17 -Wall -Wextra -I./include

# Google Test settings
GTEST_FLAGS = -lgtest -lgtest_main -pthread

# Directories
SRC_DIR = src
INCLUDE_DIR = include
TEST_DIR = tests
BUILD_DIR = build

# Project name (will be replaced by script)
PROJECT = PROJECT_NAME

# Source files
SOURCES = $(filter-out $(SRC_DIR)/main.cpp, $(wildcard $(SRC_DIR)/*.cpp))
MAIN_SOURCE = $(SRC_DIR)/main.cpp
TEST_SOURCES = $(wildcard $(TEST_DIR)/*.cpp)

# Object files
OBJECTS = $(SOURCES:$(SRC_DIR)/%.cpp=$(BUILD_DIR)/%.o)
MAIN_OBJECT = $(BUILD_DIR)/main.o
TEST_OBJECTS = $(TEST_SOURCES:$(TEST_DIR)/%.cpp=$(BUILD_DIR)/%.o)

# Executables
MAIN_EXEC = $(BUILD_DIR)/$(PROJECT)
TEST_EXEC = $(BUILD_DIR)/$(PROJECT)_test

# Colors for output
GREEN = \033[0;32m
YELLOW = \033[1;33m
BLUE = \033[0;34m
NC = \033[0m

# Default target
all: directories $(MAIN_EXEC)
	@echo "$(GREEN)✓ Build successful: $(MAIN_EXEC)$(NC)"

# Create directories
directories:
	@mkdir -p $(BUILD_DIR)

# Build main executable
$(MAIN_EXEC): $(OBJECTS) $(MAIN_OBJECT)
	@echo "$(BLUE)Linking main executable...$(NC)"
	$(CXX) $(CXXFLAGS) $^ -o $@

# Build test executable
test: directories $(TEST_EXEC)
	@echo "$(YELLOW)Running tests...$(NC)"
	@echo "========================================"
	@./$(TEST_EXEC)
	@echo "========================================"

$(TEST_EXEC): $(OBJECTS) $(TEST_OBJECTS)
	@echo "$(BLUE)Linking test executable...$(NC)"
	$(CXX) $(CXXFLAGS) $^ -o $@ $(GTEST_FLAGS)

# Compile source files
$(BUILD_DIR)/%.o: $(SRC_DIR)/%.cpp
	@echo "$(BLUE)Compiling $<...$(NC)"
	$(CXX) $(CXXFLAGS) -c $< -o $@

# Compile test files
$(BUILD_DIR)/%.o: $(TEST_DIR)/%.cpp
	@echo "$(BLUE)Compiling $<...$(NC)"
	$(CXX) $(CXXFLAGS) -c $< -o $@

# Run the main program
run: $(MAIN_EXEC)
	@echo "$(GREEN)Running $(PROJECT)...$(NC)"
	@./$(MAIN_EXEC)

# Clean build files
clean:
	@echo "$(YELLOW)Cleaning build files...$(NC)"
	rm -rf $(BUILD_DIR)
	@echo "$(GREEN)✓ Clean complete$(NC)"

# Rebuild
rebuild: clean all

# Help target
help:
	@echo "$(BLUE)Available targets:$(NC)"
	@echo "  $(GREEN)make$(NC) or $(GREEN)make all$(NC)  - Build the main executable"
	@echo "  $(GREEN)make test$(NC)            - Build and run tests"
	@echo "  $(GREEN)make run$(NC)             - Build and run main program"
	@echo "  $(GREEN)make clean$(NC)           - Remove build files"
	@echo "  $(GREEN)make rebuild$(NC)         - Clean and rebuild"
	@echo "  $(GREEN)make help$(NC)            - Show this help message"

.PHONY: all test run clean rebuild directories help
EOF

    # Replace PROJECT_NAME with actual project name
    sed -i "s/PROJECT_NAME/$project/g" "$makefile"

    printf "${GREEN}✓${NC} Makefile created with Google Test support: $makefile\n"
}

# Function to list all projects
list_projects() {
    printf "${BLUE}Existing DSA Projects:${NC}\n"
    echo "========================================"

    local count=0
    for dir in */; do
        if [ -d "$dir" ] && [ "$dir" != "$TEMPLATE_DIR/" ]; then
            count=$((count + 1))
            local readme="$dir/README.md"
            local type="Unknown"
            local difficulty="Unknown"

            if [ -f "$readme" ]; then
                type=$(grep "Type:" "$readme" | cut -d':' -f2 | xargs)
                difficulty=$(grep "Difficulty:" "$readme" | cut -d':' -f2 | xargs)
            fi

            printf "${GREEN}%-3d${NC} %-30s ${YELLOW}[%s]${NC} ${RED}(%s)${NC}\n" \
                "$count" "${dir%/}" "$type" "$difficulty"
        fi
    done

    if [ $count -eq 0 ]; then
        echo "No projects found."
    else
        echo "========================================"
        echo "Total projects: $count"
    fi
}

# Function to build and run project
run_project() {
    local project=$1

    if [ ! -d "$project" ]; then
        printf "${RED}Error: Project '$project' not found.${NC}\n"
        exit 1
    fi

    printf "${BLUE}Building and running: $project${NC}\n"
    cd "$project" || exit

    make clean
    make

    if [ $? -eq 0 ]; then
        printf "${GREEN}Build successful!${NC}\n"
        make test
    else
        printf "${RED}Build failed!${NC}\n"
        exit 1
    fi

    cd ..
}

# Function to clean project
clean_project() {
    local project=$1

    if [ ! -d "$project" ]; then
        printf "${RED}Error: Project '$project' not found.${NC}\n"
        exit 1
    fi

    printf "${YELLOW}Cleaning: $project${NC}\n"
    cd "$project" || exit
    make clean
    printf "${GREEN}Cleaned successfully!${NC}\n"
    cd ..
}

# Interactive mode
interactive_mode() {
    printf "${CYAN}╔════════════════════════════════════════════════════════════════╗${NC}\n"
    printf "${CYAN}║          ${BLUE}DSA Project Setup - Interactive Mode${CYAN}              ║${NC}\n"
    printf "${CYAN}╚════════════════════════════════════════════════════════════════╝${NC}\n"
    echo ""

    # Get project name
    printf "${YELLOW}Step 1/4: Project Name${NC}\n"
    printf "Enter a descriptive name (e.g., two_sum, binary_tree_traversal)\n"
    echo -ne "${GREEN}Project name:${NC} "
    read project_name
    if [ -z "$project_name" ]; then
        printf "${RED}Error: Project name cannot be empty${NC}\n"
        exit 1
    fi
    echo ""

    # Get problem type with descriptions
    printf "${YELLOW}Step 2/4: Problem Type${NC}\n"
    printf "${BLUE}Choose the data structure or algorithm paradigm:${NC}\n"
    echo ""
    printf "${CYAN}Data Structures:${NC}\n"
    echo "  1)  Array           - Indexed collections, subarrays"
    echo "  2)  String          - Text processing, patterns"
    echo "  3)  Linked List     - Dynamic lists, pointers"
    echo "  4)  Stack           - LIFO, parentheses, monotonic"
    echo "  5)  Queue           - FIFO, BFS, scheduling"
    echo "  6)  Heap            - Priority queue, K-th elements"
    echo "  7)  Tree            - Binary tree, BST, traversals"
    echo "  8)  Graph           - Networks, DFS, BFS, paths"
    echo ""
    printf "${CYAN}Algorithmic Paradigms:${NC}\n"
    echo "  9)  Sorting         - Sort algorithms"
    echo "  10) Searching       - Binary search variants"
    echo "  11) Dynamic Programming - Optimization, memoization"
    echo "  12) Greedy          - Local optimum choices"
    echo "  13) Backtracking    - Exhaustive search, recursion"
    echo "  14) Math            - Number theory, calculations"
    echo "  15) General         - Miscellaneous"
    echo ""
    echo -ne "${GREEN}Enter choice (1-15):${NC} "
    read type_choice

    case $type_choice in
        1) PROBLEM_TYPE="array" ;;
        2) PROBLEM_TYPE="string" ;;
        3) PROBLEM_TYPE="linked-list" ;;
        4) PROBLEM_TYPE="stack" ;;
        5) PROBLEM_TYPE="queue" ;;
        6) PROBLEM_TYPE="heap" ;;
        7) PROBLEM_TYPE="tree" ;;
        8) PROBLEM_TYPE="graph" ;;
        9) PROBLEM_TYPE="sorting" ;;
        10) PROBLEM_TYPE="searching" ;;
        11) PROBLEM_TYPE="dp" ;;
        12) PROBLEM_TYPE="greedy" ;;
        13) PROBLEM_TYPE="backtracking" ;;
        14) PROBLEM_TYPE="math" ;;
        *) PROBLEM_TYPE="general" ;;
    esac
    printf "${GREEN}✓${NC} Selected: ${YELLOW}$PROBLEM_TYPE${NC}\n"
    echo ""

    # Get difficulty
    printf "${YELLOW}Step 3/4: Difficulty Level${NC}\n"
    echo "  1) Easy       - Fundamental concepts, straightforward"
    echo "  2) Medium     - Multiple concepts, moderate complexity"
    echo "  3) Hard       - Complex algorithms, optimization needed"
    echo "  4) Skip       - Don't specify difficulty"
    echo ""
    echo -ne "${GREEN}Enter choice (1-4):${NC} "
    read diff_choice

    case $diff_choice in
        1) DIFFICULTY="Easy" ;;
        2) DIFFICULTY="Medium" ;;
        3) DIFFICULTY="Hard" ;;
        *) DIFFICULTY="Not specified" ;;
    esac
    printf "${GREEN}✓${NC} Selected: ${YELLOW}$DIFFICULTY${NC}\n"
    echo ""

    # Ask about test cases
    printf "${YELLOW}Step 4/4: Test Case Templates${NC}\n"
    printf "Generate sample test case templates? (Recommended)\n"
    echo "  - Basic test case"
    echo "  - Sample test cases (2)"
    echo "  - Edge cases (empty, single, large, negative)"
    echo ""
    echo -ne "${GREEN}Add test templates? (y/n):${NC} "
    read add_tests
    if [ "$add_tests" = "y" ] || [ "$add_tests" = "Y" ]; then
        ADD_TESTCASES=true
        printf "${GREEN}✓${NC} Test templates will be generated\n"
    else
        printf "${YELLOW}○${NC} Only basic test will be generated\n"
    fi
    echo ""

    # Summary
    printf "${CYAN}╔════════════════════════════════════════════════════════════════╗${NC}\n"
    printf "${CYAN}║                      Configuration Summary                     ║${NC}\n"
    printf "${CYAN}╚════════════════════════════════════════════════════════════════╝${NC}\n"
    printf "  Project Name: ${GREEN}$project_name${NC}\n"
    printf "  Type:         ${YELLOW}$PROBLEM_TYPE${NC}\n"
    printf "  Difficulty:   ${MAGENTA}$DIFFICULTY${NC}\n"
    printf "  Test Cases:   $([ "$ADD_TESTCASES" = true ] && printf "${GREEN}Enabled${NC}" || printf "${YELLOW}Basic only${NC}")\n"
    echo ""
    echo -ne "${GREEN}Proceed with creation? (y/n):${NC} "
    read confirm

    if [ "$confirm" != "y" ] && [ "$confirm" != "Y" ]; then
        printf "${YELLOW}Project creation cancelled.${NC}\n"
        exit 0
    fi

    # Create project
    create_project "$project_name"
}

# Main function to create project
create_project() {
    local project=$1

    # Check if project already exists
    if [ -d "$project" ]; then
        printf "${RED}Error: Project '$project' already exists.${NC}\n"
        exit 1
    fi

    printf "${CYAN}╔════════════════════════════════════════════════════════════════╗${NC}\n"
    printf "${CYAN}║${NC}  Creating DSA project: ${GREEN}$project${NC}\n"
    printf "${CYAN}║${NC}  Type: ${YELLOW}$PROBLEM_TYPE${NC}\n"
    printf "${CYAN}║${NC}  Difficulty: ${MAGENTA}${DIFFICULTY:-Not specified}${NC}\n"
    printf "${CYAN}╚════════════════════════════════════════════════════════════════╝${NC}\n"
    echo ""

    # Create directory structure
    mkdir -p "$project"/{src,include,tests,build}

    # Create files
    create_header "$project" "$PROBLEM_TYPE"
    create_source "$project" "$PROBLEM_TYPE"
    create_main "$project"
    create_test "$project" "$PROBLEM_TYPE" "$ADD_TESTCASES"
    create_readme "$project" "$PROBLEM_TYPE" "$DIFFICULTY"
    create_makefile "$project"

    # Create .gitignore
    cat > "$project/.gitignore" << EOF
build/
*.o
*.out
*.exe
.vscode/
.idea/
.DS_Store
*.swp
*.swo
*~
EOF

    echo ""
    printf "${GREEN}╔════════════════════════════════════════════════════════════════╗${NC}\n"
    printf "${GREEN}║  ✓ Project '$project' created successfully!${NC}\n"
    printf "${GREEN}╚════════════════════════════════════════════════════════════════╝${NC}\n"
    echo ""
    printf "${YELLOW}Next steps:${NC}\n"
    printf "  ${CYAN}1.${NC} cd $project\n"
    printf "  ${CYAN}2.${NC} Edit ${GREEN}src/${project}.cpp${NC} with your solution\n"
    printf "  ${CYAN}3.${NC} Add test cases in ${GREEN}tests/${project}Test.cpp${NC}\n"
    printf "  ${CYAN}4.${NC} Run ${GREEN}'make test'${NC} to build and test\n"
    printf "  ${CYAN}5.${NC} Run ${GREEN}'make run'${NC} to execute main program\n"
    echo ""
    printf "${YELLOW}Available commands:${NC}\n"
    printf "  ${GREEN}make${NC}        - Build the project\n"
    printf "  ${GREEN}make test${NC}   - Build and run tests (Google Test)\n"
    printf "  ${GREEN}make run${NC}    - Build and run main program\n"
    printf "  ${GREEN}make clean${NC}  - Clean build files\n"
    printf "  ${GREEN}make help${NC}   - Show all available targets\n"
    echo ""
}

# Parse command line arguments
while [[ $# -gt 0 ]]; do
    case $1 in
        -h|--help)
            usage
            ;;
        --guide)
            show_guide
            ;;
        -t|--type)
            PROBLEM_TYPE="$2"
            shift 2
            ;;
        -d|--difficulty)
            DIFFICULTY="$2"
            shift 2
            ;;
        -c|--testcases)
            ADD_TESTCASES=true
            shift
            ;;
        -i|--interactive)
            interactive_mode
            exit 0
            ;;
        -l|--list)
            list_projects
            exit 0
            ;;
        -r|--run)
            run_project "$2"
            exit 0
            ;;
        --clean)
            clean_project "$2"
            exit 0
            ;;
        -*)
            printf "${RED}Unknown option: $1${NC}\n"
            printf "Run ${GREEN}'$0 --help'${NC} for usage information\n"
            exit 1
            ;;
        *)
            PROJECT_NAME="$1"
            shift
            ;;
    esac
done

# Check if project name is provided
if [ -z "$PROJECT_NAME" ]; then
    printf "${RED}Error: Project name not provided${NC}\n"
    printf "Run ${GREEN}'$0 --help'${NC} for usage information\n"
    printf "Or use ${GREEN}'$0 -i'${NC} for interactive mode\n"
    exit 1
fi

# Create the project
create_project "$PROJECT_NAME"
