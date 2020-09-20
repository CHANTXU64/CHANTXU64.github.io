const HEAD_FLAG = ".head";
const BODY_FLAG = ".data";
const sheet_name_prefix = ".";

class Excel2Data {
    static init (file_input_id, Log) {
        return new Promise((resolve, reject) => {
            this._excel_file = new ExcelFile(file_input_id, Log);
            this._excel_file.init_data()
                .then(() => {
                    this._set_data();
                    resolve();
                }, () => {
                    this._init_failed();
                    reject();
                }
                );
        });
    }

    static setCell (row, column, value) {
        let cell = this._SheetAndArr[row][column];
        let originalRow = cell.originalRow;
        let originalColumn = cell.originalColumn;
        this._originalSheetAndArr.setCell(originalRow, originalColumn, value);
        cell.value = value;
    }

    static getCell (row, column) {
        let cell = this._SheetAndArr[row][column];
        return cell.value;
    }

    static getData () {
        return this._SheetAndArr;
    }

    static export () {
        this._excel_file.export();
    }

    static _set_data () {
        let sheetAndArr = [];
        let worksheets = this._excel_file.getBook().worksheets;
        for (let i = 0; i < worksheets.length; ++i) {
            let worksheet = worksheets[i];
            if (this._is_validSheet(worksheet.name)) {
                let sheet_allData = new SheetAndArr(worksheet);
                sheetAndArr = this._trans2Data(sheet_allData);
                this._originalSheetAndArr = sheet_allData;
                break;
            }
        }
        this._SheetAndArr = sheetAndArr;
        console.log(sheetAndArr);
    }

    static _is_validSheet (sheet_name) {
        if (sheet_name[0] === sheet_name_prefix) {
            return true;
        }
        else {
            return false;
        }
    }

    static _trans2Data (sheet_allData) {
        let data = [];
        let value_array = sheet_allData.getArr();
        let row_totalNum = value_array.length;
        let column_totalNum = value_array[0].length;
        for (let row = 0; row < row_totalNum; ++row) {
            if (value_array[row][0] === HEAD_FLAG) {
                let head_row = [];
                for (let column = 1; column < column_totalNum; ++column) {
                    let value = sheet_allData.getCell(row, column);
                    if (value != "") {
                        let cell = {};
                        cell.value = value;
                        cell.originalRow = row;
                        cell.originalColumn = column;
                        cell.isSupportSet = sheet_allData.isCellSupportSet(row, column);
                        head_row.push(cell);
                    }
                }
                data.push(head_row);
                break;
            }
        }
        for (let row = 0; row < row_totalNum; ++row) {
            if (value_array[row][0] === BODY_FLAG) {
                let body_row = [];
                let head_row = data[0];
                for (let i = 0; i < head_row.length; ++i) {
                    let column = head_row[i].originalColumn;
                    let cell = {};
                    cell.originalRow = row;
                    cell.originalColumn = column;
                    cell.value = sheet_allData.getCell(row, column);
                    cell.isSupportSet = sheet_allData.isCellSupportSet(row, column);
                    body_row.push(cell);
                }
                data.push(body_row);
            }
        }
        return data;
    }

    static _init_failed () {
    }
}
