#include <iostream>
#include "RabinKarp.h"

int main(int argc, char *argv[])
{
    std::string text = "GEEKSFORGEEKS";
    std::string pattern = "GEEK";
    std::cout << "Text: " << text << std::endl;
    std::cout << "Pattern: " << pattern << std::endl;
    rabinKarp(text, pattern);

    std::cout << "Find Hash: " << std::endl;
    std::cout << findHash("cat") << std::endl;
    std::cout << findHash("bat") << std::endl;
    return 0;
}

