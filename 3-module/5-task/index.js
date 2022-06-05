function getMinMax(str) {
    let arr = str.split(' ')
        .filter(item => !isNaN(item))
        .map(item => Number(item))

    let result = {}

    result.max = Math.max(...arr)
    result.min = Math.min(...arr)

    return result
}
