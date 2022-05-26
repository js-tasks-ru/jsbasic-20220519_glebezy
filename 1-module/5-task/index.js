function truncate(str, maxlength) {
    if (str.length > maxlength) {
        return str.replace(str.slice(maxlength - 1), "…")
    }
    return str
}
