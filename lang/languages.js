var language;
var languages = 
{
    "zh-CN": {
        "lang": "zh-Hans",
        "title": "少女前线-后勤组合排序器",
        "HTML": {
            "header": "后勤组合排序器（开发中）",
            "Config_text": "全局数据",
            "description_text": "计算结果只和资源（或契约）之间的比例有关。计算结果为均值。",
            "neverShowAgain_description": "[&times;]<u>不再显示</u>",
            "localstorageDoesNotWork": "因某些原因，Web存储无法工作，需要手动导出配置",
            "localstorageWarning_text": "网页使用Web存储，清除浏览器缓存会导致数据清除，请定期手动导出并保存你的数据。",
            "neverShowAgain_localstorageWarning": "[&times;]<u>不再显示</u>",
            "setting": "设置",
            "Tab_Anytime_name": "随时能收后勤",
            "Tab_Timetable_name": "时间计划表",
            "tab_Anytime_time": "后勤总时长",
            "tab_Anytime_hour": "小时",
            "tab_Anytime_minute": "分钟",
            "tab_Anytime_MinimumIntervalTime": "最短间隔时间",
            "tab_Anytime_MinimumIntervalTime_minute": "分钟",
            "tab_Timetable_time": "后勤总时长",
            "tab_Timetable_hour": "小时",
            "tab_Timetable_minute": "分钟",
            "tab_Timetable_addtimeh5": "新添加一个收取后勤时间点:",
            "tab_Timetable_new_hour": "小时",
            "tab_Timetable_new_minute": "分钟",
            "h4GreatSuccessRate": "后勤队伍平均大成功概率",
            "GreatSuccessRateUp_text": "后勤大成功UP",
            "h4ChapterLimit": "关卡解锁",
            "chapter6": "第六战役",
            "chapter7": "第七战役",
            "chapter8": "第八战役",
            "chapter9": "第九战役",
            "chapter10": "第十战役",
            "chapter11": "第十一战役",
            "chapter12": "第十二战役",
            "Display_PerHour_text": "以每小时显示",
            "Display_Total_text": "以总计显示",
            "ContractWeight_notImportant": "契约不重要",
            "ContractWeight_Important": "契约重要",
            "start_sorting": "开始排序",
            "clear_sorting": "清除排序结果",
            "result": "排序结果",
            "Manp": "人力",
            "Ammu": "弹药",
            "Rati": "口粮",
            "Part": "零件",
            "TPro": "人形",
            "Equi": "装备",
            "QPro": "快建",
            "QRes": "快修",
            "setTarget_HG": "手枪HG",
            "setTarget_SMG": "冲锋枪SMG",
            "setTarget_RF": "步枪RF",
            "setTarget_AR": "突击步枪AR",
            "setTarget_MG": "机枪MG",
            "setTarget_SG": "霰弹枪SG",
            "setTarget_2221": "均衡",
            "setTarget_Clear": "清零",
            "MissionTableTitle": "关卡",
            "MissionTable_head_Mission": "关卡",
            "MissionTable_head_Manp": "人力",
            "MissionTable_head_Ammu": "弹药",
            "MissionTable_head_Rati": "口粮",
            "MissionTable_head_Part": "零件",
            "MissionTable_head_TPro": "人形",
            "MissionTable_head_Equi": "装备",
            "MissionTable_head_QPro": "快建",
            "MissionTable_head_QRes": "快修",
            "MissionTable_head_Time": "时间",
            "PlanDetailsTitle": "方案详情",
            "PlanDetails_Mission": "关卡",
            "PlanDetails_Manp": "人力",
            "PlanDetails_Ammu": "弹药",
            "PlanDetails_Rati": "口粮",
            "PlanDetails_Part": "零件",
            "PlanDetails_TPro": "人形",
            "PlanDetails_Equi": "装备",
            "PlanDetails_QPro": "快建",
            "PlanDetails_QRes": "快修",
            "PlanDetails_Time": "时间",
            "savePlan": "保存方案",
            "Capture": "捕获",
            "Saved_Title": "已保存的",
            "NoSaved": "空",
            "start_sorting_html": "点击 <span style=\"color:#165399\">开始排序</span> 按钮，排序前十六的结果将在这里显示",
        },
        "HTMLJS": {
            "placeholder": {
                "Config_importInput": "要导入的数据",
                "Time_Anytime_hours": "总时长小时数",
                "Time_Anytime_minutes": "总时长分钟数",
                "Tab_Anytime_MinimumIntervalTime_minutes": "最小时间间隔分钟数",
                "Time_Timetable_hours": "总时长小时数",
                "Time_Timetable_minutes": "总时长分钟数",
                "Tab_Timetable_new_hours": "新时间点小时数",
                "Tab_Timetable_new_minutes": "新时间点分钟数",
                "GreatSuccessRate": "大成功基础概率",
                "MT": "人力需求量",
                "AT": "弹药需求量",
                "RT": "口粮需求量",
                "PT": "零件需求量",
                "TT": "人形需求量",
                "ET": "装备需求量",
                "QPT": "快建需求量",
                "QRT": "快修需求量",
                "importSaved_input": "要导入的数据",
            },
            "title": {
                "Config_importButton": "导入全局数据",
                "Config_export": "导出全局数据",
                "tab_Timetable_deleteall": "删除全部时间点",
                "Tab_Timetable_AddNewTimePoint": "添加一个收取后勤时间点",
                "ChapterLimit": "最大已解锁的战役章节",
                "ContractWeight": "契约权重",
                "Target_minus_100_MT": "人力需求量减少100",
                "Target_minus_10_MT": "人力需求量减少10",
                "Target_plus_10_MT": "人力需求量增加10",
                "Target_plus_100_MT": "人力需求量增加100",
                "Target_minus_100_AT": "弹药需求量减少100",
                "Target_minus_10_AT": "弹药需求量减少10",
                "Target_plus_10_AT": "弹药需求量增加10",
                "Target_plus_100_AT": "弹药需求量增加100",
                "Target_minus_100_RT": "口粮需求量减少100",
                "Target_minus_10_RT": "口粮需求量减少10",
                "Target_plus_10_RT": "口粮需求量增加10",
                "Target_plus_100_RT": "口粮需求量增加100",
                "Target_minus_100_PT": "零件需求量减少100",
                "Target_minus_10_PT": "零件需求量减少10",
                "Target_plus_10_PT": "零件需求量增加10",
                "Target_plus_100_PT": "零件需求量增加100",
                "Target_minus_1_TT": "人形需求量减少1",
                "Target_minus_0.1_TT": "人形需求量减少0.1",
                "Target_plus_0.1_TT": "人形需求量增加0.1",
                "Target_plus_1_TT": "人形需求量增加1",
                "Target_minus_1_ET": "装备需求量减少1",
                "Target_minus_0.1_ET": "装备需求量减少0.1",
                "Target_plus_0.1_ET": "装备需求量增加0.1",
                "Target_plus_1_ET": "装备需求量增加1",
                "Target_minus_1_QPT": "快建需求量减少1",
                "Target_minus_0.1_QPT": "快建需求量减少0.1",
                "Target_plus_0.1_QPT": "快建需求量增加0.1",
                "Target_plus_1_QPT": "快建需求量增加1",
                "Target_minus_1_QRT": "快修需求量减少1",
                "Target_minus_0.1_QRT": "快修需求量减少0.1",
                "Target_plus_0.1_QRT": "快修需求量增加0.1",
                "Target_plus_1_QRT": "快修需求量增加1",
                "importSaved_importButton": "导入数据",

            },
            "Demand_hour": "平均每小时需求量",
            "Demand_total": "总需求量",
            "Timetable_deletePoint": "删除这个时间点",
            "SavedTable_apply": "应用方案",
            "SavedTable_name": "方案名称",
            "SavedTable_rename": "重命名方案",
            "SavedTable_up": "往上移动",
            "SavedTable_down": "往下移动",
            "SavedTable_export": "导出方案",
            "SavedTable_delete": "删除方案",
            "FineTuning_minus": "减小需求量",
            "FineTuning_plus": "增大需求量",
        },
        "JS": {
            "Manp": "人力",
            "Ammu": "弹药",
            "Rati": "口粮",
            "Part": "零件",
            "TPro": "人形",
            "Equi": "装备",
            "QPro": "快建",
            "QRes": "快修",
            "FineTuningTool": "微调工具",
            "TargetValue0_alert": "需求不能全为0！",
            "tab_Anytime_alert1": "总时长不能为0！",
            "tab_Timetable_alert1": "不需要在后勤开始点再添加收取时间点",
            "tab_Timetable_alert2": "添加的收取时间点不能超过最大时限",
            "tab_Timetable_alert3": "已经添加过这个收取时间点",
            "tab_Timetable_alert4": "总时长不能为0！",
            "Mission": "关卡",
            "MinIntervalTime": "最短间隔",
            "NoPlan": "没有合适的方案",
            "NoMission": "没有可用的关卡",
            "Time": "时间",
            "PlanDetails_calculateMethod": "计算方式",
            "total_time": "总时长",
            "total_greatSuccessRate": "大成功总概率",
            "PerHour": "平均/h",
            "Total" : "总计",
            "plzInputPlanName": "请输入方案名称",
            "planDefaultName": "自定义",
            "deleteSavedWarning_1": "是否要删除这个名为",
            "deleteSavedWarning_2": "的配置？",
            "Saved_alert": "导入的数据有问题！",
        }
    },
    "zh-TW": {
        "lang": "zh-Hant",
        "title": "少女前線-後勤組合排序器",
        "HTML": {
            "header": "後勤組合排序器（開發中）",
            "Config_text": "全局數據",
            "description_text": "計算結果只和資源（或契約）之間的比例有關。計算結果為期望值。",
            "neverShowAgain_description": "[&times;]<u>不再顯示</u>",
            "localstorageDoesNotWork": "因某些原因，Web存儲無法工作，需要手動導出配置",
            "localstorageWarning_text": "網頁使用Web存儲，清除瀏覽器緩存會導致數據清除，請定期手動導出並保存你的數據。",
            "neverShowAgain_localstorageWarning": "[&times;]<u>不再顯示</u>",
            "setting": "設置",
            "Tab_Anytime_name": "隨時能收後勤",
            "Tab_Timetable_name": "時間計劃表",
            "tab_Anytime_time": "後勤總時長",
            "tab_Anytime_hour": "小時",
            "tab_Anytime_minute": "分鐘",
            "tab_Anytime_MinimumIntervalTime": "最短間隔時間",
            "tab_Anytime_MinimumIntervalTime_minute": "分鐘",
            "tab_Timetable_time": "後勤總時長",
            "tab_Timetable_hour": "小時",
            "tab_Timetable_minute": "分鐘",
            "tab_Timetable_addtimeh5": "新添加一個收取後勤時間點:",
            "tab_Timetable_new_hour": "小時",
            "tab_Timetable_new_minute": "分鐘",
            "h4GreatSuccessRate": "後勤隊伍平均大成功概率",
            "GreatSuccessRateUp_text": "後勤大成功UP",
            "h4ChapterLimit": "關卡解鎖",
            "chapter6": "第六戰役",
            "chapter7": "第七戰役",
            "chapter8": "第八戰役",
            "chapter9": "第九戰役",
            "chapter10": "第十戰役",
            "chapter11": "第十一戰役",
            "chapter12": "第十二戰役",
            "Display_PerHour_text": "以每小時顯示",
            "Display_Total_text": "以總計顯示",
            "ContractWeight_notImportant": "契約不重要",
            "ContractWeight_Important": "契約重要",
            "start_sorting": "開始排序",
            "clear_sorting": "清除排序結果",
            "result": "排序結果",
            "Manp": "人力",
            "Ammu": "彈藥",
            "Rati": "口糧",
            "Part": "零件",
            "TPro": "人形",
            "Equi": "裝備",
            "QPro": "快建",
            "QRes": "快修",
            "setTarget_HG": "手槍HG",
            "setTarget_SMG": "衝鋒槍SMG",
            "setTarget_RF": "步槍RF",
            "setTarget_AR": "突擊步槍AR",
            "setTarget_MG": "機槍MG",
            "setTarget_SG": "霰彈槍SG",
            "setTarget_2221": "均衡",
            "setTarget_Clear": "清零",
            "MissionTableTitle": "關卡",
            "MissionTable_head_Mission": "關卡",
            "MissionTable_head_Manp": "人力",
            "MissionTable_head_Ammu": "彈藥",
            "MissionTable_head_Rati": "口糧",
            "MissionTable_head_Part": "零件",
            "MissionTable_head_TPro": "人形",
            "MissionTable_head_Equi": "裝備",
            "MissionTable_head_QPro": "快建",
            "MissionTable_head_QRes": "快修",
            "MissionTable_head_Time": "時間",
            "PlanDetailsTitle": "方案詳情",
            "PlanDetails_Mission": "關卡",
            "PlanDetails_Manp": "人力",
            "PlanDetails_Ammu": "彈藥",
            "PlanDetails_Rati": "口糧",
            "PlanDetails_Part": "零件",
            "PlanDetails_TPro": "人形",
            "PlanDetails_Equi": "裝備",
            "PlanDetails_QPro": "快建",
            "PlanDetails_QRes": "快修",
            "PlanDetails_Time": "時間",
            "savePlan": "保存方案",
            "Capture": "捕獲",
            "Saved_Title": "已保存的",
            "NoSaved": "空",
            "start_sorting_html": "點擊 <span style=\"color:#165399\">開始排序</span> 按鈕，排序前十六的結果將在這裡顯示",
        },
        "HTMLJS": {
            "placeholder": {
                "Config_importInput": "要導入的數據",
                "Time_Anytime_hours": "總時長小時數",
                "Time_Anytime_minutes": "總時長分鐘數",
                "Tab_Anytime_MinimumIntervalTime_minutes": "最小時間間隔分鐘數",
                "Time_Timetable_hours": "總時長小時數",
                "Time_Timetable_minutes": "總時長分鐘數",
                "Tab_Timetable_new_hours": "新時間點小時數",
                "Tab_Timetable_new_minutes": "新時間點分鐘數",
                "GreatSuccessRate": "大成功基礎概率",
                "MT": "人力需求量",
                "AT": "彈藥需求量",
                "RT": "口糧需求量",
                "PT": "零件需求量",
                "TT": "人形需求量",
                "ET": "裝備需求量",
                "QPT": "快建需求量",
                "QRT": "快修需求量",
                "importSaved_input": "要導入的數據",
            },
            "title": {
                "Config_importButton": "導入全局數據",
                "Config_export": "導出全局數據",
                "tab_Timetable_deleteall": "刪除全部時間點",
                "Tab_Timetable_AddNewTimePoint": "添加一個收取後勤時間點",
                "ChapterLimit": "最大已解鎖的戰役章節",
                "ContractWeight": "契約權重",
                "Target_minus_100_MT": "人力需求量減少100",
                "Target_minus_10_MT": "人力需求量減少10",
                "Target_plus_10_MT": "人力需求量增加10",
                "Target_plus_100_MT": "人力需求量增加100",
                "Target_minus_100_AT": "彈藥需求量減少100",
                "Target_minus_10_AT": "彈藥需求量減少10",
                "Target_plus_10_AT": "彈藥需求量增加10",
                "Target_plus_100_AT": "彈藥需求量增加100",
                "Target_minus_100_RT": "口糧需求量減少100",
                "Target_minus_10_RT": "口糧需求量減少10",
                "Target_plus_10_RT": "口糧需求量增加10",
                "Target_plus_100_RT": "口糧需求量增加100",
                "Target_minus_100_PT": "零件需求量減少100",
                "Target_minus_10_PT": "零件需求量減少10",
                "Target_plus_10_PT": "零件需求量增加10",
                "Target_plus_100_PT": "零件需求量增加100",
                "Target_minus_1_TT": "人形需求量減少1",
                "Target_minus_0.1_TT": "人形需求量減少0.1",
                "Target_plus_0.1_TT": "人形需求量增加0.1",
                "Target_plus_1_TT": "人形需求量增加1",
                "Target_minus_1_ET": "裝備需求量減少1",
                "Target_minus_0.1_ET": "裝備需求量減少0.1",
                "Target_plus_0.1_ET": "装备需求量增加0.1",
                "Target_plus_1_ET": "装备需求量增加1",
                "Target_minus_1_QPT": "快建需求量減少1",
                "Target_minus_0.1_QPT": "快建需求量減少0.1",
                "Target_plus_0.1_QPT": "快建需求量增加0.1",
                "Target_plus_1_QPT": "快建需求量增加1",
                "Target_minus_1_QRT": "快修需求量減少1",
                "Target_minus_0.1_QRT": "快修需求量減少0.1",
                "Target_plus_0.1_QRT": "快修需求量增加0.1",
                "Target_plus_1_QRT": "快修需求量增加1",
                "importSaved_importButton": "導入數據",

            },
            "Demand_hour": "平均每小時需求量",
            "Demand_total": "總需求量",
            "Timetable_deletePoint": "刪除這個時間點",
            "SavedTable_apply": "應用方案",
            "SavedTable_name": "方案名稱",
            "SavedTable_rename": "重命名方案",
            "SavedTable_up": "往上移動",
            "SavedTable_down": "往下移動",
            "SavedTable_export": "導出方案",
            "SavedTable_delete": "刪除方案",
            "FineTuning_minus": "減小需求量",
            "FineTuning_plus": "增大需求量",
        },
        "JS": {
            "Manp": "人力",
            "Ammu": "彈藥",
            "Rati": "口糧",
            "Part": "零件",
            "TPro": "人形",
            "Equi": "裝備",
            "QPro": "快建",
            "QRes": "快修",
            "FineTuningTool": "微調工具",
            "TargetValue0_alert": "需求不能全為0！",
            "tab_Anytime_alert1": "總時長不能為0！",
            "tab_Timetable_alert1": "不需要在後勤開始點再添加收取時間點",
            "tab_Timetable_alert2": "添加的收取時間點不能超過最大時限",
            "tab_Timetable_alert3": "已經添加過這個收取時間點",
            "tab_Timetable_alert4": "總時長不能為0！",
            "Mission": "關卡",
            "MinIntervalTime": "最短間隔",
            "NoPlan": "沒有合適的方案",
            "NoMission": "沒有可用的關卡",
            "Time": "時間",
            "PlanDetails_calculateMethod": "計算方式",
            "total_time": "總時長",
            "total_greatSuccessRate": "大成功總概率",
            "PerHour": "平均/h",
            "Total" : "總計",
            "plzInputPlanName": "請輸入方案名稱",
            "planDefaultName": "自定義",
            "deleteSavedWarning_1": "是否要刪除這個名為",
            "deleteSavedWarning_2": "的配置？",
            "Saved_alert": "導入的數據有問題！",
        }
    }
};