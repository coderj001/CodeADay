## NOTE
It's been while almost 2 weeks now. Will start now...

## Questions

# Google is the Only Company to Ask this Coding Question! | 1st Letter to Appear Twice - Leetcode 2351
# https://www.youtube.com/watch/yTVBxEqGMa4

Google is the only company that's asked this interview question so let's check it out the problem is called first letter to appear twice and it is actually an easy problem we're given a string s that has only lowercase English letters and we need to return simply the first letter that appears twice and we're actually guaranteed that s will contain at least one letter that appears twice we keep track of a list of all of the letters we've seen and for each character in the string if we've seen that character already we can immediately return that character but if we haven't seen that string we will append it to the list of stuff that we've seen you might be wondering why would Google ask this easy question well they would actually want to ask you this follow-up question should you use a hash set and your answer would be no it actually doesn't matter the reason we can get away with the list here is because our constraint is that we only have lowercase English characters that means there is at most 26 items in this list so it's a very fast lookup now all we have to do is just cross our fingers that Google asks us this question wouldn't that be awesome

In Short,
Given a string s consisting of only lowercase English letters, return the first letter that appears twice.
