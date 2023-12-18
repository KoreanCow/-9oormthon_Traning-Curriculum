const spreadSheetContainer = document.querySelector('#spreadsheet_container');
const exportBtn = document.querySelector('#export_btn');
const ROWS = 10;
const COLS = 10;
const spreadsheet = [];

const alphabets = [
    "A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"
];

class Cell {
    constructor(isHeader, disable, data, row, column,rowName, columnName, active = false) {
        this.isHeader = isHeader;
        this.disable = disable;
        this.data = data;
        this.row = row;
        this.column = column;
        this.rowName = rowName;
        this.columnName = columnName;
        this.active = active;
    }
}

exportBtn.onclick = (e) => {
    let csv = '';
    for(let i = 0; i < spreadsheet.length; i++) {
        if(i === 0) continue;
        
        csv += spreadsheet[i]
        .filter(item => !item.isHeader)
        .map((item) => item.data)
        .join(',') + '\r\n';
    }

    const csvObj = new Blob([csv]);
    const csvUrl = URL.createObjectURL(csvObj);
    console.log(csvUrl);

    const a = document.createElement('a');
    a.href = csvUrl;
    a.download = 'spreadsheet name.csv';
    a.click();

}
initSpreadsheet();

function initSpreadsheet() {
    for(let i = 0; i < ROWS; i++) {
        let spreadsheetRow = [];
        for(let j = 0; j < COLS; j++) {
            
            let cellData = '';
            let isHeader = false; 
            let disable = false;
            let active = false;

            if(j === 0 ) {
                cellData = i;
                isHeader = true;
                disable = true;
            }
            if(i === 0) {
                cellData = alphabets[j-1];
                isHeader = true;
                disable = true;
            }
            if(!cellData) {
                cellData = '';
            }

            const rowName = i;
            const columnName = alphabets[j-1];

            const cell = new Cell(isHeader, disable, cellData, i, j, rowName, columnName, active);
            spreadsheetRow.push(cell);
        }
        spreadsheet.push(spreadsheetRow);
    }
    console.log(spreadsheet);
    drawSheet();
}

function createCellEl(cell) {
    const cellEl = document.createElement('input');
    cellEl.id = 'cell_' + cell.row + cell.column;
    cellEl.className = 'cell'; 
    cellEl.value = cell.data;
    cellEl.disabled = cell.disable;

    if(cell.isHeader) {
        cellEl.classList.add('header');
    }

    cellEl.onclick = () => handleCellClick(cell);
    cellEl.onchange = (e) => handleOnChange(e.target.value, cell)
    return cellEl;   
}

function handleOnChange(data, cell) {
    cell.data = data;
}

function handleCellClick(cell) {
    clearHeaderActiveStates();
    const columnHeader = spreadsheet[0][cell.column];
    const rowHeader = spreadsheet[cell.row][0];

    const columnHeaderEl = getElFromRowCol(columnHeader.row, columnHeader.column);    
    const rowHeaderEl = getElFromRowCol(rowHeader.row, rowHeader.column);
    
    columnHeaderEl.classList.add('active');
    rowHeaderEl.classList.add('active');
    

    document.querySelector('#cell_status').innerHTML = cell.columnName + cell.rowName;
}

function clearHeaderActiveStates() {
    const headers = document.querySelectorAll('.header');
    
    headers.forEach((header) => {
        header.classList.remove('active');
    })
}

function getElFromRowCol(row, col) {
    return document.querySelector('#cell_' + row + col);
}

function drawSheet() {
    for(let i = 0; i < spreadsheet.length; i++) {
        
        const rowContainerEl = document.createElement('div');
        rowContainerEl.className = 'cell_row';

        for(let j = 0; j < spreadsheet[i].length; j++) {
            const cell = spreadsheet[i][j];
            rowContainerEl.append(createCellEl(cell));
        }
        spreadSheetContainer.append(rowContainerEl);
    }
}
