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
PROJECT = max_consecutive_ones_flip_k

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
