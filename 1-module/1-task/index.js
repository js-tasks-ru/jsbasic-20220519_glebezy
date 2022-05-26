function factorial(n) {
    let abc
    if (n == 0 || n == 1) {
        abc = 1
    }
    else {
        abc = n
        for (let i = 1; i < n; i++) {
            abc *= n - i
        }
    }
    return abc
}
