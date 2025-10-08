## Multiple Pattern Search using Rabin-Karp Algorithm 

**Problem Statement**

You are tasked with implementing a multiple pattern search algorithm using the Rabin-Karp string matching technique. Given a text string and multiple pattern strings, find all occurrences of each pattern in the text. 

**Requirements**
Write a function that: 
    Takes as input:
        - A text string text
        - An array of pattern strings patterns

    Returns:
        - A dictionary/object where each key is a pattern and the value is an array of starting positions where that pattern occurs in the text

**Algorithm Details**
Use the Rabin-Karp algorithm with the following specifications: 
- Use a rolling hash function to efficiently compute hash values
- Handle multiple patterns simultaneously using a hash table of pattern hashes
- Implement proper collision handling (verify matches by comparing actual strings)
- Use a prime number for the hash function (recommend: 101 or larger prime)
- Handle the case where patterns have different lengths

```
Input:
text = "ababcabcab"
patterns = ["ab", "abc", "c"]

Output:
{
    "ab": [0, 2, 7],
    "abc": [2, 5],
    "c": [4, 8]
}
```

**Constraints**:
- Text length: 1 ≤ len(text) ≤ 10^5
- Number of patterns: 1 ≤ len(patterns) ≤ 100
- Pattern length: 1 ≤ len(pattern) ≤ len(text)
- All strings contain only lowercase English letters


**Challenge Extensions**

1. Optimize for cases where multiple patterns have the same length
2. Handle overlapping patterns efficiently
3. Consider memory optimization for large numbers of patterns

Test Cases to Consider 
- Empty text or patterns
- Patterns not found in text
- Overlapping matches
- Identical patterns in the input
- Single character patterns
- Patterns longer than text

