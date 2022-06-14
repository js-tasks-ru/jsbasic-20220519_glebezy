function highlight(table) {
    let headRow = table.tHead.rows[0]
    let statusCellIndex
    let genderCellIndex
    let ageCellIndex

    //перебор заголовка с поиском индексов нужных ячеек
    for (let elem of headRow.cells) {
        if (elem.innerText == 'Status') {
            statusCellIndex = elem.cellIndex
        }
        else if (elem.innerText == 'Gender') {
            genderCellIndex = elem.cellIndex
        }
        else if (elem.innerText == 'Age') {
            ageCellIndex = elem.cellIndex
        }
    }

    //перебор строк и их изменение в зависимости от параметров в нужных ячейках
    for (let i = 0; i < table.tBodies[0].rows.length; i++) {
        let row = table.tBodies[0].rows[i]
        let statusCell = row.cells[statusCellIndex]
        let genderCell = row.cells[genderCellIndex]
        let ageCell = row.cells[ageCellIndex]

        for (let elem of row.cells) {
            if (elem.dataset.available == 'true') {
                row.classList.add('available')
            }
            else if (elem.dataset.available == 'false') {
                row.classList.add('unavailable')
            }
        }

        if (!statusCell.hasAttribute('data-available')) {
            row.setAttribute('hidden', '')
        }

        if (genderCell.innerText == 'm') {
            row.classList.add('male')
        } else if (genderCell.innerText == 'f') {
            row.classList.add('female')
        }

        if (ageCell.innerText < 18) {
            row.style.textDecoration = 'line-through'
        }
    }
}
