const TYPE_SEARCH = "s";
const TYPE_READ = "r";
const TYPE_WRITE = "w";

class ExcelData2PrintData {
    static init (excel_data) {
        this._excel_data = excel_data;
        this._set_printData();
    }

    static _set_printData () {
        let head_data = this._excel_data[0];
        for (let i = 0; i < this._excel_data[0].length; ++i) {
            if (head_data[i].value.split("/")[0] == TYPE_READ || head_data[i].value.split("/")[0] == TYPE_WRITE || head_data[i].value.split("/")[0] == TYPE_SEARCH) {
                head_data[i].type = "read";
            }
            else {
                head_data[i].type = "hide";
            }
        }
        let body_data = [];
        for (let row = 1; row < this._excel_data.length; ++row) {
            let body_row = {};
            body_row.data = new Array(this._excel_data[row].length);
            let body_row_search_value = "";
            for (let i = 0; i < body_row.data.length; ++i) {
                body_row.data[i] = {};
                body_row.data[i].value = this._excel_data[row][i].value;
                if (this._excel_data[row][i].isSupportSet && head_data[i].value.split("/")[0] == TYPE_WRITE) {
                    body_row.data[i].type = "write";
                }
                else if (head_data[i].value.split("/")[0] == TYPE_READ ||
                         head_data[i].value.split("/")[0] == TYPE_WRITE) {
                    body_row.data[i].type = "read";
                }
                else if (head_data[i].value.split("/")[0] == TYPE_SEARCH) {
                    body_row.data[i].type = "read";
                    body_row_search_value = body_row.data[i].value;
                }
                else {
                    body_row.data[i].type = "hide";
                }
            }
            body_row.search = getLookupValue_arr(body_row_search_value);
            body_data.push(body_row);
        }
        this._data = {};
        this._data.head = head_data;
        this._data.body = body_data;
    }

    static get_data () {
        return this._data;
    }

    static get_column_totalNum () {
        return this._data.head.length;
    }

    static get_body_row_totalNum () {
        return this._data.body.length;
    }

    static get_body (row, column) {
        return this._data.body[row].data[column];
    }

    static set_body (row, column, value) {
        Excel2Data.setCell(row + 1, column, value);
    }
}
