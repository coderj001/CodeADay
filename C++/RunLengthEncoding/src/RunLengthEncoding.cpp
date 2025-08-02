#include "../include/RunLengthEncoding.h"

// Compression function - converts string to RLE format
string Compression(string str) {
  if (str.empty())
    return "";

  char initChar = str[0];
  int counter = 0;
  string newStr = "";

  for (const char &c : str) {
    if (initChar != c) {
      newStr += initChar + to_string(counter);
      initChar = c;
      counter = 0;
    }
    counter++;
  }
  newStr += initChar + to_string(counter);
  return newStr;
}

// Decompression function - converts RLE format back to original string
string Decompression(string str) { return ""; }
