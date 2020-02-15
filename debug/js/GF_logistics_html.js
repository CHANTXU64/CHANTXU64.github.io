window.onload = function () {
    checkLocalStorageWork();
    updateLocalStorage();

    setLanguage();

    loadHTML_Target();
    loadHTML_ChapterLimit();

    setPageByLocalStorage();

    //设置契约值(必要)
    let TotalGreatSuccessRate = Input_getTotalGreatSuccessRate(true);
    setQContract(TotalGreatSuccessRate);

    MissionsDetails.print();
    let ShownTab = getShownTab();
    PlanDetails.printShownTab(ShownTab.name);
    PlanDetails.printTotalTime(ShownTab.getTotalTime(false));
    PlanDetails.printGreatSuccessRate(TotalGreatSuccessRate);
    PlanDetails.printExecutionTimes(Input_getExecutionTimes());

    loadHTML_language();

    //根据移动设备或PC设备更改样式
    MobilePCDevice();

    //根据页面分辨率更改样式
    if (document.getElementById("setTargetInput").getBoundingClientRect().width <= 260)
        disableTargetButton();
    if (document.getElementById("wrapper").getBoundingClientRect().width <= 1600)
        document.getElementById("page-wrapper").style.marginLeft = "0";

    //用于checkLocalStorageWork()中检测是否由于localstorage不正确的数据导致浏览器崩溃
    if (CAN_LOCALSTORAGE_WORK)
        localStorage.setItem("GF_Logistics_windowOnload", "success");
};

//当页面分辨率改变时调整样式
$(window).resize(function () {
    if (document.getElementById("setTargetInput").getBoundingClientRect().width <= 260)
        disableTargetButton();
    else
        enableTargetButton();
    if (document.getElementById("wrapper").getBoundingClientRect().width <= 1600)
        document.getElementById("page-wrapper").style.marginLeft = "0";
    else
        document.getElementById("page-wrapper").style.marginLeft = "250px";
});
/**Target宽度太短, 为避免输入框中看不全输入数字, 隐藏一些按钮 */
function disableTargetButton() {
    $("button[id^=Target_plus_10_]").attr("style", "display:none;");
    $("button[id^=Target_plus_0]").attr("style", "display:none;");
    $("button[id^=Target_minus_10_]").attr("style", "display:none;");
    $("button[id^=Target_minus_0]").attr("style", "display:none;");
}
/**Target宽度足够, 启用一些按钮 */
function enableTargetButton() {
    $("button[id^=Target_plus_10_]").attr("style", "padding-right:10px;padding-left:10px;border-radius:0;");
    $("button[id^=Target_plus_0]").attr("style", "padding-right:10px;padding-left:10px;border-radius:0;");
    $("button[id^=Target_minus_10_]").attr("style", "padding-right:10px;padding-left:10px;border-radius:0;");
    $("button[id^=Target_minus_0]").attr("style", "padding-right:10px;padding-left:10px;border-radius:0;");
}

/**根据localstorage或浏览器语言设置语言 */
function setLanguage() {
    let lang = storageGetItem("Lang");
    if (lang === "noStorage")
        lang = navigator.language||navigator.userLanguage;
    if (lang.substr(0, 2) === "zh") {
        switch(lang) {
            case "zh-HK":
            case "zh-TW":
            case "zh-MO":
                language = language_zh_TW;
                storageSetItem("Lang", "zh-TW");
                break;
            default:
                language = language_zh_CN;
                storageSetItem("Lang", "zh-CN");
        }
    }
    else {
        language = language_en;
        storageSetItem("Lang", "en");
    }
}

/**
 * 更改语言
 * @param {string} lang
 */
function changeLanguage(lang) {
    switch(lang) {
        case "zh-CN":
            storageSetItem("Lang", "zh-CN");
            language = language_zh_CN;
            break;
        case "zh-TW":
            storageSetItem("Lang", "zh-TW");
            language = language_zh_TW;
            break;
        case "en":
            storageSetItem("Lang", "en");
            language = language_en;
            break;
    }
    loadHTML_language();
}

/**根据移动设备或PC设备切换不同样式或进行优化 */
function MobilePCDevice() {
    if (IsMobile()) {
        document.getElementById("Saved").style.transition = "none";
        document.getElementById("MissionTable_panel").style.transition = "none";
        document.getElementById("calcTargetValueTool_panel").style.transition = "none";
        if (storageGetItem("IsSavedPanelShow") === "noStorage") {
            $("#MissionTable_panel").collapse("hide");
        }
        document.getElementById("page-header").style.marginTop = "20px";
        document.getElementById("page-wrapper").style.padding = "0";
        document.getElementById("calcTargetValueTool_apply").innerHTML = "<span id=\"calcTargetValueTool_apply_text\">" + language.HTML.calcTargetValueTool_apply_text + "</span> &darr;";
    }
    else {
        document.getElementById("page-wrapper").style.marginLeft = "250px";
    }
}

//标签页
/**
 * 只更改Tab显示, 不更改由于Tab切换导致的其他模块
 * @param {string} tabName - tab名字
 * @param {boolean} isShow - 当点击HTML页面上的Tab标签切换, 不需要再通过该代码来重复切换Tab
 */
function ChangeTab(tabName, isShow = true) {
    let Timetable_JQ_selector = $("#Tab_Timetable");
    let Anytime_JQ_selector = $("#Tab_Anytime");
    switch (tabName) {
        case "Anytime":
            if (isShow)
                $("#Tab_Anytime_name").tab("show");
            //用于getShownTab()判断目前显示的Tab, 现在添加class"in"会导致闪烁
            Timetable_JQ_selector.removeClass("active in");
            Anytime_JQ_selector.addClass("active");
            break;
        case "Timetable":
            if (isShow)
                $("#Tab_Timetable_name").tab("show");
            Anytime_JQ_selector.removeClass("active in");
            Timetable_JQ_selector.addClass("active");
            break;
    }
    storageSetItem("TabName", tabName);
}
/**更改Tab为Anytime, 包括其他模块 */
function ChangeTab_Anytime() {
    storageSetItem("TabName", "Anytime");
    ChangeTab("Anytime", false);
    delete_rankingResults();
    HTML_AllowRankingInput();
    MissionsDetails.print();
    printPlanDetails();
}
/**更改Tab为Timetable, 包括其他模块 */
function ChangeTab_Timetable() {
    storageSetItem("TabName", "Timetable");
    ChangeTab("Timetable", false);
    delete_rankingResults();
    HTML_AllowRankingInput();
    MissionsDetails.print();
    printPlanDetails();
}

/**更改为以每小时显示 */
function changeCalculateOutput_Hourly() {
    storageSetItem("HourlyOrTotal", "PerHour");
    $("#Demand").html(language.HTMLJS.Demand_hour);
    let ShownTab = getShownTab();
    const time = ShownTab.getTotalTime();
    let TargetValue = Input_getTarget_Correct();
    for (let i = 0; i < 8; i++) {
        TargetValue[i] = Math.round(TargetValue[i] / time * 6000) / 100;
    }
    Input_setTarget(TargetValue);
    MissionsDetails.print();
    if (hasResultPlan())
        printResultsPlan();
}
/**更改为以总计显示 */
function changeCalculateOutput_Total() {
    storageSetItem("HourlyOrTotal", "Total");
    $("#Demand").html(language.HTMLJS.Demand_total);
    let ShownTab = getShownTab();
    const time = ShownTab.getTotalTime();
    let TargetValue = Input_getTarget_Correct();
    for (let i = 0; i < 8; i++) {
        TargetValue[i] = Math.round(TargetValue[i] * time * 100 / 60) / 100;
    }
    Input_setTarget(TargetValue);
    MissionsDetails.print();
    if (hasResultPlan())
        printResultsPlan();
}

/**
 * 根据需求量的设定的按钮来设置需求量
 * @param {string} TargetInfo
 */
function setTarget(TargetInfo) {
    switch (TargetInfo) {
        case "HG":
            Input_setTarget([130, 130, 130, 130, 0, 0, 0, 0]); break;
        case "SMG":
            Input_setTarget([430, 430, 130, 230, 0, 0, 0, 0]); break;
        case "RF":
            Input_setTarget([430, 130, 430, 230, 0, 0, 0, 0]); break;
        case "AR":
            Input_setTarget([130, 430, 430, 130, 0, 0, 0, 0]); break;
        case "MG":
            Input_setTarget([730, 630, 130, 430, 0, 0, 0, 0]); break;
        case "SG":
            Input_setTarget([800, 200, 800, 400, 0, 0, 0, 0]); break;
        case "2221":
            Input_setTarget([400, 400, 400, 200, 0, 0, 0, 0]); break;
        case "Clear":
            Input_setTarget();
            Input_setContractWeight();
            break;
    }
}

/**
 * 按下某一需求量增减按钮来更改需求量
 * @param {string} FullID - 某一需求量增减按钮ID
 */
function ChangeTarget(FullID) {
    const ID = stringSliceFromLast_(FullID);
    const IDStart = FullID.indexOf(ID);
    const FullID_2 = FullID.slice(0, IDStart - 1);
    let changeValue = parseFloat(stringSliceFromLast_(FullID_2));
    if (FullID_2.slice(7, 8) === "m")
        changeValue *= -1;
    let id_JQ_selector = $("#" + ID);
    const OriginalValue = Input_getTarget_Correct(id_JQ_selector, false);
    Input_setTarget(OriginalValue + changeValue, id_JQ_selector);
}

function HTML_DisableRankingInput() {
    if (document.getElementById("start_ranking").style.display === "none")
        return ;
    $("#Time_Anytime_hours").attr("disabled", "true");
    $("#Time_Anytime_minutes").attr("disabled", "true");
    $("#Tab_Anytime_MinimumIntervalTime_minutes").attr("disabled", "true");
    $("#Time_Timetable_hours").attr("disabled", "true");
    $("#Time_Timetable_minutes").attr("disabled", "true");
    $("#tab_Timetable_deleteall").attr("disabled", "true");
    $("button[id^=Tab_Timetable_range_thumb_]").attr("disabled", "true");
    $("#Tab_Timetable_new_hours").attr("disabled", "true");
    $("#Tab_Timetable_new_minutes").attr("disabled", "true");
    $("#Tab_Timetable_AddNewTimePoint").attr("disabled", "true");
    $("#GreatSuccessRate").attr("disabled", "true");
    $("#GreatSuccessRateUp").attr("disabled", "true");
    document.getElementById("GreatSuccessRateUp_text").style.cursor="not-allowed";
    document.getElementById("GreatSuccessRateUp_label").style.cursor="not-allowed";
    $("#ChapterLimit").attr("disabled", "true");
    $("#calcTargetValueTool_apply").attr("disabled", "true");
    $("#ContractWeight").attr("disabled", "true");
    document.getElementById("ContractWeight_thumb").style.backgroundColor="#CCC";
    $("button[id^=setTarget_]").attr("disabled", "true");
    $("#MT").attr("disabled", "true");
    $("#AT").attr("disabled", "true");
    $("#RT").attr("disabled", "true");
    $("#PT").attr("disabled", "true");
    $("#TT").attr("disabled", "true");
    $("#ET").attr("disabled", "true");
    $("#QPT").attr("disabled", "true");
    $("#QRT").attr("disabled", "true");
    $("button[id^=Target_minus_]").attr("disabled", "true");
    $("button[id^=Target_plus_]").attr("disabled", "true");
    document.getElementById("start_ranking").style.display = "none";
    document.getElementById("clear_ranking").style.display = "";
}

function HTML_AllowRankingInput() {
    if (document.getElementById("start_ranking").style.display !== "none")
        return ;
    $("#Time_Anytime_hours").removeAttr("disabled");
    $("#Time_Anytime_minutes").removeAttr("disabled");
    $("#Tab_Anytime_MinimumIntervalTime_minutes").removeAttr("disabled");
    if (Tab_Timetable_TIMELIST.length === 0) {
        $("#Time_Timetable_hours").removeAttr("disabled");
        $("#Time_Timetable_minutes").removeAttr("disabled");
    }
    $("#tab_Timetable_deleteall").removeAttr("disabled");
    $("button[id^=Tab_Timetable_range_thumb_]").removeAttr("disabled");
    $("#Tab_Timetable_new_hours").removeAttr("disabled");
    $("#Tab_Timetable_new_minutes").removeAttr("disabled");
    $("#Tab_Timetable_AddNewTimePoint").removeAttr("disabled");
    $("#GreatSuccessRate").removeAttr("disabled");
    $("#GreatSuccessRateUp").removeAttr("disabled");
    document.getElementById("GreatSuccessRateUp_text").style.cursor="pointer";
    document.getElementById("GreatSuccessRateUp_label").style.cursor="pointer";
    $("#ChapterLimit").removeAttr("disabled");
    $("#calcTargetValueTool_apply").removeAttr("disabled");
    $("#ContractWeight").removeAttr("disabled");
    document.getElementById("ContractWeight_thumb").style.backgroundColor="rgb(112, 166, 236)";
    $("button[id^=setTarget_]").removeAttr("disabled");
    $("#MT").removeAttr("disabled");
    $("#AT").removeAttr("disabled");
    $("#RT").removeAttr("disabled");
    $("#PT").removeAttr("disabled");
    $("#TT").removeAttr("disabled");
    $("#ET").removeAttr("disabled");
    $("#QPT").removeAttr("disabled");
    $("#QRT").removeAttr("disabled");
    $("button[id^=Target_minus_]").removeAttr("disabled");
    $("button[id^=Target_plus_]").removeAttr("disabled");
    document.getElementById("start_ranking").style.display = "";
    document.getElementById("clear_ranking").style.display = "none";
}

function delete_rankingResults() {
    document.getElementById("start_ranking_html").style.display = "";
    document.getElementById("FineTuning").innerHTML = "";
    document.getElementById("Plan_Table").innerHTML = "";
    FineTuning.clear();
    ResultsPlan.clear();
}