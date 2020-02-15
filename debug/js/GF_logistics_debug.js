//重写console方法, 获取控制台信息
let CONSOLE = "";
if (console) {
    var _console = {
        log: console.log,
        info: console.info,
        debug: console.debug,
        warn: console.warn,
        error: console.error,
    };
    console.log = function (data) {
        CONSOLE += "log: ";
        CONSOLE += JSON.stringify(data);
        CONSOLE += "\t";
        _console.log.apply(this, Array.prototype.slice.call(arguments, 0));
    };
    console.info = function (data) {
        CONSOLE += "info: ";
        CONSOLE += JSON.stringify(data);
        CONSOLE += "\t";
        _console.info.apply(this, Array.prototype.slice.call(arguments, 0));
    };
    console.debug = function (data) {
        CONSOLE += "debug: ";
        CONSOLE += JSON.stringify(data);
        CONSOLE += "\t";
        _console.debug.apply(this, Array.prototype.slice.call(arguments, 0));
    };
    console.warn = function (a) {
        CONSOLE += "warn: ";
        CONSOLE += JSON.stringify(a);
        CONSOLE += "\t";
        _console.warn.apply(this, Array.prototype.slice.call(arguments, 0));
    };
    console.error = function (a) {
        CONSOLE += "error: ";
        CONSOLE += JSON.stringify(a);
        CONSOLE += "\t";
        _console.error.apply(this, Array.prototype.slice.call(arguments, 0));
    };
}

window.onerror = function(errorMessage, scriptURI, lineNumber, columnNumber, errorObj) {
    console.log("错误信息：" , errorMessage);
    console.log("出错文件：" , scriptURI);
    console.log("出错行号：" , lineNumber);
    console.log("出错列号：" , columnNumber);
    console.log("错误详情：" , errorObj);
}