#include <stdio.h>
#include <stdlib.h>

typedef struct {
    int *items;
    size_t count;
    size_t capacity;
} Numbers;

int main(void) {
    Numbers xs = {0, 1, 0}; // Initialize capacity to 1
    for (int x = 0; x < 10; ++x) {
        if (xs.count >= xs.capacity) {
            xs.capacity *= 2;
            xs.items = realloc(xs.items, xs.capacity * sizeof(*xs.items));
        }
        xs.items[xs.count++] = x;
    }

    for (size_t i = 0; i < xs.count; ++i) printf("%d\n", xs.items[i]);

    free(xs.items); // Don't forget to free the allocated memory
    return 0;
}
