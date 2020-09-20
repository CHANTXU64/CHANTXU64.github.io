document.onkeydown = function () {
    if (window.event && window.event.key === "/") {
        document.activeElement.blur();
        setTimeout(function () {
            $("#search_input").focus();
            $("#search_input").select();
        }, 1);
    }
}

$("#file").on("change", function (e) {
    let files = document.getElementById("file").files;
    if (files.length === 0) {
        document.getElementById("file_label").innerHTML = "Choose file...";
    }
    else {
        document.getElementById("file_label").innerHTML = files[0].name;
    }
    Excel2Data.init("file").then(() => {
        ExcelData2PrintData.init(Excel2Data.getData());
        PrintTable.print(ExcelData2PrintData.get_data());
        console.log(ExcelData2PrintData._data);
    });
});

$("#table").on("input propertychange", "input[id^=table_body_input_]", function () {
    let id = this.id;
    let row = parseInt(id.split("_")[3]);
    let column = parseInt(id.split("_")[4]);
    let value = this.value;
    ExcelData2PrintData.set_body(row, column, value);
});

$("#table").on("focus", "input[id^=table_body_input_]", function () {
    this.select();
});

$("#search_input").on("input propertychange", function () {
    PrintTable.print(ExcelData2PrintData.get_data(), this.value);
});

$("#export").on("click", function () {
    Excel2Data.export();
})
