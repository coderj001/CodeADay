# Compiler settings
CXX = g++
CXXFLAGS = -std=c++17 -Wall -Wextra -I./include
GTEST_FLAGS = $(shell pkg-config --cflags gtest)
GTEST_LIBS = $(shell pkg-config --libs gtest) -pthread

# Directories
SRC_DIR = src
INCLUDE_DIR = include
TEST_DIR = tests
BUILD_DIR = build

# Project name (will be replaced by script)
PROJECT = two_sum

# Source files
SOURCES = $(wildcard $(SRC_DIR)/*.cpp)
TEST_SOURCES = $(wildcard $(TEST_DIR)/*.cpp)

# Object files
OBJECTS = $(SOURCES:$(SRC_DIR)/%.cpp=$(BUILD_DIR)/%.o)
TEST_OBJECTS = $(TEST_SOURCES:$(TEST_DIR)/%.cpp=$(BUILD_DIR)/%.o)

# Executables
MAIN_EXEC = $(BUILD_DIR)/$(PROJECT)
TEST_EXEC = $(BUILD_DIR)/$(PROJECT)_test

# Default target
all: directories $(MAIN_EXEC)

# Create directories
directories:
	@mkdir -p $(BUILD_DIR)

# Build main executable
$(MAIN_EXEC): $(OBJECTS)
	$(CXX) $(CXXFLAGS) $^ -o $@
	@echo "Build successful: $(MAIN_EXEC)"

# Build test executable
test: directories $(TEST_EXEC)
	@echo "Running tests..."
	@./$(TEST_EXEC)

$(TEST_EXEC): $(filter-out $(BUILD_DIR)/main.o, $(OBJECTS)) $(TEST_OBJECTS)
	$(CXX) $(CXXFLAGS) $(GTEST_FLAGS) $^ -o $@ $(GTEST_LIBS)

# Compile source files
$(BUILD_DIR)/%.o: $(SRC_DIR)/%.cpp
	$(CXX) $(CXXFLAGS) -c $< -o $@

# Compile test files
$(BUILD_DIR)/%.o: $(TEST_DIR)/%.cpp
	$(CXX) $(CXXFLAGS) $(GTEST_FLAGS) -c $< -o $@

# Run the main program
run: $(MAIN_EXEC)
	@./$(MAIN_EXEC)

# Clean build files
clean:
	rm -rf $(BUILD_DIR)

# Rebuild
rebuild: clean all

.PHONY: all test run clean rebuild directories
