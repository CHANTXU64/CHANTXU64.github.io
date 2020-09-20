//用于输入excel sheet数据并处理成数组
class SheetAndArr {
    constructor (excel_sheet, rowNum_arr, columnNum_arr) {
        if (rowNum_arr === undefined) {
            rowNum_arr = this._getAllRowNumArr(excel_sheet);
        }
        if (columnNum_arr === undefined) {
            columnNum_arr = this._getAllColumnNumArr(excel_sheet);
        }
        let row_totalNum = rowNum_arr.length;
        let column_totalNum = columnNum_arr.length;
        let array = [];
        for (let x = 0; x < row_totalNum; ++x) {
            let original_row = excel_sheet.getRow(rowNum_arr[x]);
            let row = [];
            for (let y = 0; y < column_totalNum; ++y) {
                let original_cell = original_row.getCell(columnNum_arr[y]);
                let arr_elem = this._getArrElemByCell(original_cell);
                row.push(arr_elem);
            }
            array.push(row);
        }
        this._array = array;
        this._value_array = this._trans2ValueArr(array);
        this._excel_sheet = excel_sheet;
    }

    getArr () {
        let value_array = [];
        for (let i = 0; i < this._value_array.length; ++i) {
            value_array.push(this._value_array[i].slice());
        }
        return value_array;
    }

    getCell (row, column) {
        return this._value_array[row][column];
    }

    //还不完善
    setCell (row, column, value) {
        this._value_array[row][column] = value;
        this._setArr(row, column, value);
        this._setSheet(row, column, value);
    }

    isCellSupportSet (row, column) {
        let address = this._array[row][column].address;
        let cell = this._excel_sheet.getCell(address);
        let excel_cell_object = creat_ExcelCellGASV(cell);
        return excel_cell_object.isSupportSet();
    }

    _getAllRowNumArr (excel_sheet) {
        let row_totalNum = excel_sheet.rowCount;
        let all_rowNum_arr = new Array(row_totalNum);
        for (let i = 0; i < row_totalNum; ++i) {
            all_rowNum_arr[i] = i + 1;
        }
        return all_rowNum_arr;
    }

    _getAllColumnNumArr (excel_sheet) {
        let column_totalNum = excel_sheet.columnCount;
        let all_columnNum_arr = new Array(column_totalNum);
        for (let i = 0; i < column_totalNum; ++i) {
            all_columnNum_arr[i] = i + 1;
        }
        return all_columnNum_arr;
    }

    _getArrElemByCell (cell) {
        let arr_elem = {};
        arr_elem.address = cell.address;
        arr_elem.type = cell.type;
        arr_elem.value = this._getValueFromCell(cell);
        return arr_elem;
    }

    _getValueFromCell (cell) {
        let value = "";
        let excel_cell_object = creat_ExcelCellGASV(cell);
        value = excel_cell_object.get();
        return value;
    }

    _trans2ValueArr (array) {
        let value_array = [];
        for (let x = 0; x < array.length; ++x) {
            let row_x_length = array[x].length;
            let value_array_row_x = [];
            for (let y = 0; y < row_x_length; ++y) {
                value_array_row_x.push(array[x][y].value);
            }
            value_array.push(value_array_row_x);
        }
        return value_array;
    }

    _setArr (row, column, value) {
        let cell = this._array[row][column];
        cell.value = value;
    }

    _setSheet (row, column, value) {
        let cell = this._array[row][column];
        let address = cell.address;
        let original_cell = this._excel_sheet.getCell(address);
        this._setOriginalCell(original_cell, value);
    }

    _setOriginalCell (original_cell, value) {
        let excel_cell_object = creat_ExcelCellGASV(original_cell);
        excel_cell_object.set(value);
    }
}
