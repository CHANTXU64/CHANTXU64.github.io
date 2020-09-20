function creat_ExcelCellGASV (excel_cell) {
    let type = excel_cell.type;
    let object;
    switch (type) {
        case ExcelCellGASV_Null.getValueType():
            object = new ExcelCellGASV_Null(excel_cell);
            break;
        case ExcelCellGASV_Merge.getValueType():
            object = new ExcelCellGASV_Merge(excel_cell);
            break;
        case ExcelCellGASV_Number.getValueType():
            object = new ExcelCellGASV_Number(excel_cell);
            break;
        case ExcelCellGASV_String.getValueType():
            object = new ExcelCellGASV_String(excel_cell);
            break;
        case ExcelCellGASV_Date.getValueType():
            object = new ExcelCellGASV_Date(excel_cell);
            break;
        case ExcelCellGASV_Hyperlink.getValueType():
            object = new ExcelCellGASV_Hyperlink(excel_cell);
            break;
        case ExcelCellGASV_Formula.getValueType():
            object = new ExcelCellGASV_Formula(excel_cell);
            break;
        case ExcelCellGASV_SharedString.getValueType():
            object = new ExcelCellGASV_SharedString(excel_cell);
            break;
        case ExcelCellGASV_RichText.getValueType():
            object = new ExcelCellGASV_RichText(excel_cell);
            break;
        case ExcelCellGASV_Boolean.getValueType():
            object = new ExcelCellGASV_Boolean(excel_cell);
            break;
        case ExcelCellGASV_Error.getValueType():
            object = new ExcelCellGASV_Error(excel_cell);
            break;
    }
    return object;
}

class ExcelCellGASV {
    constructor (excel_cell) {
        this.excel_cell = excel_cell;
    };
    static getValueType () {};
    get () {};
    set (value, value_type) {};
    isSupportSet () {};
}

class ExcelCellGASV_Null extends ExcelCellGASV {
    static getValueType () {
        return ExcelJS.ValueType.Null;
    }

    get () {
        return "";
    }

    set (value, value_type) {
        this.excel_cell.value = value;
    }

    isSupportSet () {
        return true;
    }
}

class ExcelCellGASV_Merge extends ExcelCellGASV {
    static getValueType () {
        return ExcelJS.ValueType.Merge;
    }

    get () {
        let excel_cell_object = creat_ExcelCellGASV(this.excel_cell.master);
        let value = excel_cell_object.get();
        return value;
    }

    set (value, value_type) {
        let excel_cell_object = creat_ExcelCellGASV(this.excel_cell.master);
        excel_cell_object.set(value, value_type);
    }

    isSupportSet () {
        let excel_cell_object = creat_ExcelCellGASV(this.excel_cell.master);
        return excel_cell_object.isSupportSet();
    }
}

class ExcelCellGASV_Number extends ExcelCellGASV {
    static getValueType () {
        return ExcelJS.ValueType.Number;
    }

    get () {
        return this.excel_cell.value;
    }

    set (value, value_type) {
        this.excel_cell.value = value;
    }

    isSupportSet () {
        return true;
    }
}

class ExcelCellGASV_String extends ExcelCellGASV {
    static getValueType () {
        return ExcelJS.ValueType.String;
    }

    get () {
        return this.excel_cell.value;
    }

    set (value, value_type) {
        this.excel_cell.value = value;
    }

    isSupportSet () {
        return true;
    }
}

class ExcelCellGASV_Date extends ExcelCellGASV {
    static getValueType () {
        return ExcelJS.ValueType.Date;
    }

    get () {
        return this.excel_cell.value.toLocaleDateString();
    }

    set (value, value_type) {
    }

    isSupportSet () {
        return false;
    }
}

class ExcelCellGASV_Hyperlink extends ExcelCellGASV {
    static getValueType () {
        return ExcelJS.ValueType.Hyperlink;
    }

    get () {
        return this.excel_cell.value.text;
    }

    set (value, value_type) {
        this.excel_cell.value.text = value;
    }

    isSupportSet () {
        return true;
    }
}

class ExcelCellGASV_Formula extends ExcelCellGASV {
    static getValueType () {
        return ExcelJS.ValueType.Formula;
    }

    get () {
        return this.excel_cell.value.result || "";
    }

    set (value, value_type) {
    }

    isSupportSet () {
        return false;
    }
}

class ExcelCellGASV_SharedString extends ExcelCellGASV {
    static getValueType () {
        return ExcelJS.ValueType.SharedString;
    }

    get () {
        return this.excel_cell.value;
    }

    set (value, value_type) {
    }

    isSupportSet () {
        return false;
    }
}

class ExcelCellGASV_RichText extends ExcelCellGASV {
    static getValueType () {
        return ExcelJS.ValueType.RichText;
    }

    get () {
        let text = "";
        let richText = this.excel_cell.value.richText;
        for (let i = 0; i < richText.length; ++i) {
            text += richText[i].text;
        }
        return text;
    }

    set (value, value_type) {
        let richText = this.excel_cell.value.richText;
        for (let i = 0; i < richText.length; ++i) {
            richText[i].text = "";
        }
        richText[0].text = value;
    }

    isSupportSet () {
        return true;
    }
}

class ExcelCellGASV_Boolean extends ExcelCellGASV {
    static getValueType () {
        return ExcelJS.ValueType.Boolean;
    }

    get () {
        return this.excel_cell.value;
    }

    set (value, value_type) {
        this.excel_cell.value = value;
    }

    isSupportSet () {
        return true;
    }
}

class ExcelCellGASV_Error extends ExcelCellGASV {
    static getValueType () {
        return ExcelJS.ValueType.Error;
    }

    get () {
        return "";
    }

    set (value, value_type) {
    }

    isSupportSet () {
        return false;
    }
}
