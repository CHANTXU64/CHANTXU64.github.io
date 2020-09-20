//用于读写excel文件
//依赖class Log Log.print(message, ?type) type支持error, normal
class ExcelFile {
    constructor (file_input_id, Log) {
        this._workbook = new ExcelJS.Workbook();
        this._correct_type = ["xlsx", "xlsm"];
        this._file_input_id = file_input_id;
        this._Log = Log;
    }

    init_data () {
        return new Promise((resolve, reject) => {
            let files = document.getElementById(this._file_input_id).files;
            let is_success = true;
            if (files.length === 0) {
                is_success = false;
            }
            else {
                let excel_file = files[0];
                if (this._verify_file_type(excel_file.name) === false) {
                    this._Log.print("File type error!");
                    is_success = false;
                }
                else {
                    let reader = new FileReader;
                    reader.readAsArrayBuffer(excel_file);
                    reader.onerror = () => {
                        this._Log.print("read error!");
                        is_success = false;
                    };
                    reader.onabort = () => {
                        this._Log.print("read abort!");
                        is_success = false;
                    };
                    reader.onload = () => {
                        this._workbook.xlsx.load(reader.result).then(() => {
                            resolve();
                        });
                    };
                }
            }
            if (!is_success) {
                this.clear_data();
                reject();
            }
        });
    }

    clear_data () {
        this._workbook = new ExcelJS.Workbook();
    }

    getBook () {
        return this._workbook;
    }

    //需要FileSaver.js
    export () {
        let file_type = "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet";
        return new Promise((resolve, reject) => {
            this._workbook.xlsx.writeBuffer().then((data) => {
                var blob = new Blob([data], {type:file_type});
                try {
                    saveAs(blob, "yourexcel.xlsx");
                } catch (ex) {}
                resolve();
            });
        });
    }

    _verify_file_type (file_name) {
        let dot_index = file_name.lastIndexOf(".");
        if (dot_index === -1) {
            return false;
        }
        else {
            let type_name = file_name.slice(dot_index + 1);
            return this._correct_type.indexOf(type_name) !== -1;
        }
    }
}
