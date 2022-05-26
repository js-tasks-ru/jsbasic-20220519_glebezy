function ucFirst(str = '') {
    let firstSymbol = str.charAt(0)
    return str.replace(firstSymbol, firstSymbol.toUpperCase())
}
