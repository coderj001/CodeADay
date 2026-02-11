# Quick Installation Guide

## 1. Install Google Test

### Ubuntu/Debian
```bash
sudo apt-get update
sudo apt-get install libgtest-dev cmake build-essential
cd /usr/src/gtest
sudo cmake CMakeLists.txt
sudo make
sudo cp lib/*.a /usr/lib
```

### Alternative Method (Ubuntu/Debian)
```bash
sudo apt-get install libgtest-dev cmake
cd /usr/src/googletest
sudo cmake .
sudo make
sudo cp lib/*.a /usr/lib
sudo ln -s /usr/lib/libgtest.a /usr/local/lib/libgtest.a
sudo ln -s /usr/lib/libgtest_main.a /usr/local/lib/libgtest_main.a
```

### macOS
```bash
brew install googletest
```

### Fedora/RHEL
```bash
sudo dnf install gtest-devel cmake gcc-c++
```

### Verify Installation
```bash
# Check if libraries exist
ldconfig -p | grep gtest

# Expected output:
# libgtest.so (libc6,x86-64) => /usr/lib/x86_64-linux-gnu/libgtest.so
# libgtest_main.so (libc6,x86-64) => /usr/lib/x86_64-linux-gnu/libgtest_main.so
```

## 2. Install manager.sh

```bash
# Download the script
wget https://your-url/manager.sh
# OR
curl -O https://your-url/manager.sh

# Make it executable
chmod +x manager.sh

# Test it
./manager.sh --help
```

## 3. Optional: Add to PATH

```bash
# Copy to /usr/local/bin
sudo cp manager.sh /usr/local/bin/dsa

# Now you can run from anywhere
dsa -i
```

## 4. Quick Test

```bash
# Create a test project
./manager.sh -t array -d easy -c test_project

# Navigate to project
cd test_project

# Try building
make

# Try testing
make test

# Success! You're ready to go!
```

## Troubleshooting

### Error: gtest/gtest.h: No such file or directory
```bash
# Install development headers
sudo apt-get install libgtest-dev

# Or manually copy headers
sudo cp -r /usr/src/googletest/googletest/include/gtest /usr/include/
```

### Error: cannot find -lgtest
```bash
# Check library location
find /usr -name "libgtest.a" 2>/dev/null

# If found, create symlink
sudo ln -s /path/to/libgtest.a /usr/lib/libgtest.a
sudo ln -s /path/to/libgtest_main.a /usr/lib/libgtest_main.a
```

### Error: make: g++: Command not found
```bash
# Install g++
sudo apt-get install g++
# OR
sudo dnf install gcc-c++
```

## Requirements Checklist

- [ ] g++ (version 7.0 or higher)
- [ ] make
- [ ] cmake
- [ ] Google Test (libgtest-dev)
- [ ] manager.sh (executable)

Check versions:
```bash
g++ --version      # Should be 7.0+
make --version
cmake --version
pkg-config --modversion gtest  # Should show version
```

## All Set!

You're ready to start your DSA journey:

```bash
# Launch interactive mode
./manager.sh -i

# Or create your first problem
./manager.sh -t array -d easy -c two_sum
```

Happy Coding! 🚀
