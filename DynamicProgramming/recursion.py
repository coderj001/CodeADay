def fn(n: int):
    if n == 0:
        return 1
    fn(n-1)
    print(n)

if __name__ == '__main__':
    fn(10)
