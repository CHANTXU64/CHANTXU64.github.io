class PrintTable {
    static print (table_data, search_value = "") {
        let head = table_data.head;
        let body = table_data.body;
        let head_html = this._getHeadHTML(head);
        let body_html = this._getBodyHTML(body, search_value);
        this._print_table(head_html, body_html);
    }

    static _getHeadHTML (head) {
        let html = "<thead><tr>";
        for (let i = 0; i < head.length; ++i) {
            switch (head[i].type) {
                case "read":
                    html += this._getCellHTML_typeRead(0, 0, head[i].value);
                    break;
                case "hide":
                    html += this._getCellHTML_typeHide(0, 0, head[i].value);
                    break;
            }
        }
        return html;
    }

    static _getBodyHTML (body, search_value) {
        let html = "<tbody>";
        for (let i = 0; i < body.length; ++i) {
            if (search_value != "" && !isMatch(search_value, body[i].search)) {
                html += "<tr style='display: none;'>";
            }
            else {
                html += "<tr>";
            }
            let body_data = body[i].data;
            for (let ii = 0; ii < body_data.length; ++ii) {
                html += this._getBodyCellHTML(i, ii, body_data[ii]);
            }
        }
        return html;
    }

    static _getBodyCellHTML (row, column, body_cell) {
        let type = body_cell.type;
        let html = "";
        switch (type) {
            case "read":
                html += this._getCellHTML_typeRead (row, column, body_cell.value);
                break;
            case "write":
                html += this._getCellHTML_typeWrite (row, column, body_cell.value);
                break;
            default:
                html += this._getCellHTML_typeHide (row, column, body_cell.value);
        }
        return html;
    }

    static _getCellHTML_typeRead (row, column, cell_value) {
        let html = "<td>" + cell_value;
        return html;
    }

    static _getCellHTML_typeWrite (row, column, cell_value) {
        let html = "<td><input class='td-input' id='table_body_input_" + row + "_" + column + "' value='" + cell_value + "'>";
        return html;
    }

    static _getCellHTML_typeHide (row, column, cell_value) {
        return "";
    }

    static _print_table (head_html, body_html) {
        document.getElementById("table_thead").innerHTML = head_html;
        document.getElementById("table_tbody").innerHTML = body_html;
    }
}
