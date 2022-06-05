function camelize(str = '') {
    return str.split('-')
        .map((item, i) => {
            return (i > 0) ? item.charAt(0).toUpperCase() + item.slice(1) : item
        })
        .join('')
}
