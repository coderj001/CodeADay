#include <iostream> 
#include <cmath>

using namespace std;

void rabinKarp(string text, string pat) {
    int n = text.length();
    int m = pat.length();
    int p = 31; // Prime number
    int mod = 1111000007; // A large prime number for modulo

    long long pHash = 0; // Hash value for pattern
    long long tHash = 0; // Hash value for text window
    long long h = 1; // p^(m-1) % mod

    // Calculate h = p^(m-1) % mod
    for (int i = 0; i < m - 1; i++) {
        h = (h * p) % mod;
    }

    // Calculate initial hash values for pattern and first text window
    for (int i = 0; i < m; i++) {
        pHash = (pHash * p + (pat[i] - 'a' + 1)) % mod;
        tHash = (tHash * p + (text[i] - 'a' + 1)) % mod;
    }

    // Slide the pattern over text
    for (int i = 0; i <= n - m; i++) {
        // Check for hit
        if (pHash == tHash) {
            // If hashes match, check characters one by one
            bool match = true;
            for (int j = 0; j < m; j++) {
                if (text[i+j] != pat[j]) {
                    match = false;
                    break;
                }
            }
            if (match) {
                cout << "Pattern found at index " << i << endl;
            }
        }

        // Calculate hash for next window
        if (i < n - m) {
            tHash = (p * (tHash - (text[i] - 'a' + 1) * h) + (text[i + m] - 'a' + 1)) % mod;
            // Ensure tHash is positive
            if (tHash < 0) {
                tHash = (tHash + mod);
            }
        }
    }
}
