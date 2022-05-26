function checkSpam(str) {
    str = str.toLowerCase()

    if (str.match('xxx') || str.match('1xbet')) {
        return true
    }

    return false
}
