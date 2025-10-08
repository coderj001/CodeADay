#include "MultiPatternSearch.h"

#define MOD (4294967296ULL - 59) // 2^32 = 4294967296
#define d 256

using lli = long long int;

// Find Single Search Pattern in text return [...]
int MultiPatternSearch::search(
    const string &text,
    const string &pattern) {
  int p = -1;
  lli pHash = 0, tHash=0;
  int n = text.length(), m = pattern.length();

  for (int i = 0; i < m; i++) {
    pHash = pHash + (pow(d, m - i - 1) * (pattern[i]));
    tHash = tHash + (pow(d, m - i - 1) * (text[i]));
  }

  // cout << "Hash(" << pattern << "): " << pHash << endl;
  // cout << "Hash(" << text.substr(0, m) << "): " << tHash << endl;

  for (int i = 0; i < n-m; i++) {
    if (pHash == tHash) {
      if (pattern == text.substr(i, m)) {
        p = i;
        break;
      }
    }
    // Re calulate hash d is base shift
    tHash = (d * (tHash - text[i] * pow(d, m-1) ) + text[i + m]);
    //       ^     ^                                  ^
    //  base shift base^m-1 sub                       Add last base
    // cout << "Hash(" << pattern << "): " << pHash << endl;
    // cout << "Hash(" << text.substr(i, m+i) << "): " << tHash << endl;
  }

  return p;
}
