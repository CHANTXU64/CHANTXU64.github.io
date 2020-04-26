function plan_combination_getChartOption(startDate, endDate) {
    let totalDays = calcDaysBetween2Dates(startDate, endDate);
    let xAxisData = new Array(totalDays + 1);
    for (let i = 0; i < totalDays + 1; ++i) {
        xAxisData[i] = addDate(startDate, i);
    }
    let is_sameYear = startDate.slice(0, 4) === endDate.slice(0, 4);
    let lang = language.JS;
    let reAndco_name = [lang.Manp, lang.Ammu, lang.Rati, lang.Part, lang.TPro, lang.Equi, lang.QPro, lang.QRes]
    let animation = false;
    if (!IsMobile())
        animation = true;

    let option = {
        grid: [
            {
                left: 60,
                right: 45,
                top: 30,
                height: 125,
                tooltip: {
                    trigger: 'axis',
                    axisPointer: {
                        type: 'line'
                    },
                }
            },
            {
                left: 60,
                right: 45,
                bottom: 55,
                height: 70,
                tooltip: {
                    type: 'item',
                }
            }
        ],
        tooltip: {
            trigger: 'item',
            backgroundColor: 'rgba(245, 245, 245, 0.8)',
            borderWidth: 1,
            borderColor: '#ccc',
            padding: 10,
            textStyle: {
                color: '#000'
            },
            position: function (pos, params, el, elRect, size) {
                var obj = {top: 10};
                obj[['left', 'right'][+(pos[0] < size.viewSize[0] / 2)]] = 30;
                return obj;
            },
            extraCssText: 'width: 170px'
        },
        toolbox: {
            right: 30,
            feature: {
                saveAsImage: {
                    name: 'GF',
                    title: 'Capture',
                }
            }
        },
        dataZoom: [
            {
                type: 'inside',
                xAxisIndex: [0, 1],
                minValueSpan: 7,
                filterMode: 'none'
            },
            {
                show: true,
                xAxisIndex: [0, 1],
                type: 'slider',
                showDataShadow: false,
                bottom: 9,
                height: 10,
                filterMode: 'none',
                borderColor: 'transparent',
                backgroundColor: '#e2e2e2',
                handleIcon: 'M10.7,11.9H9.3c-4.9,0.3-8.8,4.4-8.8,9.4c0,5,3.9,9.1,8.8,9.4h1.3c4.9-0.3,8.8-4.4,8.8-9.4C19.5,16.3,15.6,12.2,10.7,11.9z M13.3,24.4H6.7v-1.2h6.6z M13.3,22H6.7v-1.2h6.6z M13.3,19.6H6.7v-1.2h6.6z',
                handleSize: 16,
                handleStyle: {
                    shadowBlur: 6,
                    shadowOffsetX: 1,
                    shadowOffsetY: 2,
                    shadowColor: '#aaa'
                },
                minValueSpan: 7,
                labelFormatter: ''
            }
        ],
        legend: {
            data: reAndco_name,
            left: 30
        },
        xAxis: [
            {
                type: 'category',
                max: totalDays,
                data: xAxisData,
                axisTick: {show: false},
                scale: true,
                axisLabel: {
                    show: false,
                },
                boundaryGap: false,
                gridIndex: 0,
                axisLine: {onZero: false},
            },
            {
                // type: 'category',
                type: 'time',
                min: 0,
                scale: true,
                // boundaryGap: false,
                // data: xAxisData,
                minInterval: 1,
                // interval: 1,
                axisLabel: {
                    formatter: function (val) {
                        let date = addDate(startDate, val);
                        let shortDate = date.slice(5);
                        if (is_sameYear)
                            return shortDate;
                        else {
                            let year = date.slice(0, 4);
                            return shortDate + '\n' + year;
                        }
                    },
                },
                max: totalDays,
                // axisLine: {onZero: false},
                gridIndex: 1
            }
        ],
        yAxis: [
            {
                type: 'value',
                scale: true,
                gridIndex: 0,
                splitLine: {
                    show: false
                },
                minInterval: 1
            },
            {
                type: 'value',
                scale: true,
                gridIndex: 0,
                splitLine: {
                    show: false
                },
                minInterval: 1
            },
            {
                max: 1680,
                interval: 1440,
                axisLine: {
                    show: true,
                    step: 1440,
                },
                axisLabel: {
                    show: false,
                },
                axisTick: {
                    show: false,
                    alignWithLabel: true,
                },
                gridIndex: 1
            },
        ],
        series: [
            {
                name: language.JS.Manp,
                data: PlanCombinationChart._reAndcoData[0],
                type: 'line',
                xAxisIndex: 0,
                yAxisIndex: 0,
                markLine: {
                    silent: true,
                    label: {show: false},
                    data: [{
                        yAxis: 0
                    }, {
                        yAxis: 300000
                    }],
                    symbol: 'none',
                    precision: 0,
                }
            },
            {
                name: language.JS.Ammu,
                data: PlanCombinationChart._reAndcoData[1],
                type: 'line',
                xAxisIndex: 0,
                yAxisIndex: 0,
                markLine: {
                    silent: true,
                    label: {show: false},
                    data: [{
                        yAxis: 0
                    }, {
                        yAxis: 300000
                    }],
                    symbol: 'none',
                    precision: 0,
                }
            },
            {
                name: language.JS.Rati,
                data: PlanCombinationChart._reAndcoData[2],
                type: 'line',
                xAxisIndex: 0,
                yAxisIndex: 0,
                markLine: {
                    silent: true,
                    label: {show: false},
                    data: [{
                        yAxis: 0
                    }, {
                        yAxis: 300000
                    }],
                    symbol: 'none',
                    precision: 0,
                }
            },
            {
                name: language.JS.Part,
                data: PlanCombinationChart._reAndcoData[3],
                type: 'line',
                xAxisIndex: 0,
                yAxisIndex: 0,
                markLine: {
                    silent: true,
                    label: {show: false},
                    data: [{
                        yAxis: 0
                    }, {
                        yAxis: 300000
                    }],
                    symbol: 'none',
                    precision: 0,
                }
            },
            {
                name: language.JS.TPro,
                data: PlanCombinationChart._reAndcoData[4],
                type: 'line',
                xAxisIndex: 0,
                yAxisIndex: 1,
                markLine: {
                    silent: true,
                    label: {show: false},
                    data: {
                        yAxis: 0
                    },
                    symbol: 'none',
                    precision: 0,
                }
            },
            {
                name: language.JS.Equi,
                data: PlanCombinationChart._reAndcoData[5],
                type: 'line',
                xAxisIndex: 0,
                yAxisIndex: 1,
                markLine: {
                    silent: true,
                    label: {show: false},
                    data: {
                        yAxis: 0
                    },
                    symbol: 'none',
                    precision: 0,
                }
            },
            {
                name: language.JS.QPro,
                data: PlanCombinationChart._reAndcoData[6],
                type: 'line',
                xAxisIndex: 0,
                yAxisIndex: 1,
                markLine: {
                    silent: true,
                    label: {show: false},
                    data: {
                        yAxis: 0
                    },
                    symbol: 'none',
                    precision: 0,
                }
            },
            {
                name: language.JS.QRes,
                data: PlanCombinationChart._reAndcoData[7],
                type: 'line',
                xAxisIndex: 0,
                yAxisIndex: 1,
                markLine: {
                    silent: true,
                    label: {show: false},
                    data: {
                        yAxis: 0
                    },
                    symbol: 'none',
                    precision: 0,
                }
            },
            {
                type: 'custom',
                renderItem: PC_renderItem_Logistics,
                encode: {
                    x: [0, 1],
                    y: 2,
                    itemName: 3
                },
                data: PlanCombinationChart._LogisticsTimetableData ,
                clip: true,
                xAxisIndex: 1,
                yAxisIndex: 2,
                tooltip: {
                    formatter: language.JS.chartTooltip_L + '<br/>' + language.JS.Mission,
                    formatter: function (params) {
                        let index = params.dataIndex;
                        let name = language.JS.chartTooltip_L;
                        let LogisticsPlanData = PlanCombinationChart._LogisticsTimetableOriginalData[index];
                        let Missions = LogisticsPlanData.saved.Missions;
                        let text = name + '<br>';
                        text += language.JS.Mission + ': <br>';
                        for (let i = 0; i < Missions.length; ++i) {
                            text += Missions[i] + '<br>';
                        }
                        return text;
                    }
                },
                emphasis: {
                    itemStyle: {
                        borderColor: '#000',
                        borderWidth: 1,
                        borderType: 'solid'
                    }
                }
            },
            {
                type: 'custom',
                renderItem: PC_renderItem_Consumption,
                data: PlanCombinationChart._ConsumptionTimetableData,
                clip: true,
                xAxisIndex: 1,
                yAxisIndex: 2,
                tooltip: {
                    formatter: function (params) {
                        let index = params.dataIndex;
                        let name = language.JS.chartTooltip_C;
                        let consumptionData = PlanCombinationChart._ConsumptionTimetableOriginalData[index];
                        let reAndco = consumptionData.reAndco;
                        let text = name + '<br>';
                        // for (let i = 0; i < consumptionData.timePeriod.length; ++i) {
                        //     text += addDate(PC_ConsumptionPlan._startDate, consumptionData.timePeriod[i][0]);
                        //     text += ' ~ ';
                        //     text += addDate(PC_ConsumptionPlan._startDate, consumptionData.timePeriod[i][1]);
                        //     text += ', ';
                        // }
                        const class_name = ['Manp', 'Ammu', 'Rati', 'Part', 'TPro', 'Equi', 'QPro', 'QRes'];
                        for (let i = 0; i < 8; ++i) {
                            text += language.JS[class_name[i]];
                            text += ': ' + reAndco[i] + '<br>';
                        }
                        return text;
                    }
                },
                emphasis: {
                    itemStyle: {
                        borderColor: '#000',
                        borderWidth: 1,
                        borderType: 'solid'
                    }
                }
            }
        ],
        animation: animation,
    };
    return option;
}
