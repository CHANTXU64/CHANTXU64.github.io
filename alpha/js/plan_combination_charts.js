class PlanCombinationCharts {
    static resize_Timetable() {
        let Chart_elem = document.getElementById("PlanCombination_chart");
        if (Chart_elem.getAttribute("_echarts_instance_") === null || !document.getElementById("PlanCombinationSwitch").checked)
            return ;
        let Chart = echarts.getInstanceByDom(Chart_elem);
        Chart.resize();
    }

    static printChart_Timetable(plansTimeData) {
        let Chart_elem = document.getElementById("PlanCombination_chart");
        let Chart; //图表实例
        if (Chart_elem.getAttribute("_echarts_instance_") === null)
            Chart = echarts.init(Chart_elem);
        else
            Chart = echarts.getInstanceByDom(Chart_elem);

        let totalDays = calcDaysBetween2Dates(Input_getPC_startDate(true), Input_getPC_endDate(true));
        let data = this.plansTimeDataToChartData(plansTimeData, totalDays);
        this._data = data;

        let animation = false;
        if (!IsMobile())
            animation = true;

        let option = {
            grid: {
                left: 20,
                right: 20,
                top: 5,
                bottom: 25,
                height: 'auto'
            },
            xAxis: {
                min: 0,
                scale: true,
                axisLabel: {
                    formatter: function (val) {
                        return addDate(Input_getPC_startDate(true), val).slice(5);
                    },
                },
                max: totalDays,
            },
            yAxis: {
                max: 1680,
                interval: 1440,
                axisLine: {
                    show: true,
                    step: 1440,
                },
                axisLabel: {
                    // show: false,
                },
                axisTick: {
                    // show: false,
                    // alignWithLabel: true,
                }
            },
            series: [{
                type: 'custom',
                renderItem: PC_renderItem,
                encode: {
                    x: [0, 1],
                    y: 2,
                    itemName: 3
                },
                data: data
            }],
            animation: animation,
        };

        Chart.setOption(option);
    }

    static plansTimeDataToChartData(plansTimeData, totalDays) {
        if(!plansTimeData)
            return ;

        let data = [];
        let timetable = new Array(totalDays);
        timetable.fill(0);

        let plans_length = plansTimeData.length;
        for (let i = 0; i < plans_length; ++i) {
            let newData = {};
            newData.name = plansTimeData[i].number;
            let thisTimeData = plansTimeData[i];
            let thisPlanTotalTime = thisTimeData.time;
            //格式[height, (xindex, yindex, width,) (xindex......]
            newData.value = [thisPlanTotalTime];
            let timePeriod_length = thisTimeData.timePeriod.length;
            for (let ii = 0; ii < timePeriod_length; ++ii) {
                let startDate = thisTimeData.timePeriod[ii][0];
                let endDate = thisTimeData.timePeriod[ii][1];
                let lastYIndex = -1;
                for (let date = startDate; date < endDate; ++date) {
                    timetable[date] += thisPlanTotalTime;
                    let yIndex = timetable[date];
                    let timeData = newData.value;
                    if (yIndex === lastYIndex) {
                        timeData[timeData.length - 1]++;
                    }
                    else {
                        let xIndex = date;
                        timeData.push(xIndex);
                        timeData.push(yIndex);
                        timeData.push(1);
                        lastYIndex = timetable[date];
                    }
                }
            }
            newData.itemStyle = {};
            newData.itemStyle.color = this.colorList[i];
            data.push(newData);
        }
        return data;
    }
}

PlanCombinationCharts.colorList = [
    "#D98880", "#F1948A", "#C39BD3", "#A569BD", "#7FB3D5", "#85C1E9", "#76D7C4",
    "#73C6B6", "#A9DFBF", "#2ECC71", "#F7DC6F", "#F8C471", "#F0B27A", "#BFC9CA",
    "#B2BABB", "#85929E"
];

PlanCombinationCharts._data = [];

function PC_renderItem(params, api) {
    let style = api.style();
    let groupChildren = [];
    let totalTime = api.value(0);
    let index = params.dataIndex;
    let data_value = PlanCombinationCharts._data[index].value;
    let i = 0;
    while (!isNaN(data_value[3 * i + 1])) {
        let start = api.coord([data_value[3 * i + 1], data_value[3 * i + 2]]);
        let size = api.size([data_value[3 * i + 3], totalTime]);
        let child = {};
        child.type = 'rect';
        child.shape = {};
        child.shape.x = start[0];
        child.shape.y = start[1];
        child.shape.width = size[0];
        child.shape.height = size[1];
        child.style = style;
        groupChildren.push(child);
        ++i;
    }

    return {
        type: 'group',
        children: groupChildren,
   };
}
