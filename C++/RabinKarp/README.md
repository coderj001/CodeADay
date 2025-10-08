## Rabin Karp

Let’s say you're searching for "CAB" in "DAACABCDBA":

    - Assign ranks to characters (e.g., A=1, B=2, ..., J=10).
    - Use a base (e.g., 10) and a prime modulus (e.g., 11).
    - Hash "CAB" and compare it with hashes of substrings like "DAA", "AAC", "ACA", etc.
    - If a hash matches, verify the actual characters.
