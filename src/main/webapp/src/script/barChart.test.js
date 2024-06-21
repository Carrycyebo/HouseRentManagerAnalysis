$(document).ready(function () {
    // 订单完成率图表 - 仪表盘图
    var completionRateChart = echarts.init(document.getElementById('completionRateChart'));
    var completionRateOption = {
        title: {
            text: '订单完成率分析',
            textStyle: {
                color: '#ffffff'
            }
        },
        tooltip: {
            formatter: '{a} <br/>{b} : {c}%'
        },
        series: [
            {
                name: '完成率',
                type: 'gauge',
                detail: {
                    formatter: '{value}%',
                    textStyle: {
                        color: 'rgba(0,255,255,0.5)',
                        fontSize: 20
                    }
                },
                data: [{value: 50.34, name: '订单完成率'}],
                axisLine: {
                    lineStyle: {
                        color: [[0.3, '#ff4500'], [0.7, '#ffd700'], [1, '#228b22']],
                        width: 20
                    }
                },
                axisTick: {
                    show: true,
                    splitNumber: 5,
                    length: 10,
                    lineStyle: {
                        color: 'rgba(68,225,225,0.7)'
                    }
                },
                splitLine: {
                    length: 0,
                    distance: -22,
                    lineStyle: {
                        color: 'auto'
                    }
                },
                axisLabel: {
                    distance: 25,
                    color: 'rgba(0,0,0,0.79)',
                    fontSize: 15
                },
                pointer: {
                    width: 5,
                    length: '70%',
                    color: '#fff'
                },
                animation: true,
                animationDuration: 4000
            }
        ]
    };

    completionRateChart.setOption(completionRateOption);

/*    $.ajax({
        url: '/pages/DataAnalysis',
        type: 'POST',
        dataType: "json",
        data: {action: 'orderCompletionRate'},
        success: function (response) {
            completionRateChart.setOption({
                series: [{data: [response.completionRate]}]
            });
        },
        error: function (xhr, status, error) {
            console.error('Error fetching data: ' + error);
        }
    });*/

    // 各类房间租金统计图表 - 条形图
    var roomRentStatisticsChart = echarts.init(document.getElementById('roomRentStatistics'));
    var roomRentStatisticsOption = {
        title: {
            text: '各类房间租金统计',
            textStyle: {
                color: '#fff'
            }
        },
        tooltip: {
            trigger: 'axis',
            axisPointer: {type: 'shadow'}
        },
        legend: {
            data: ['最大租金', '最小租金', '平均租金'],
            textStyle: {
                color: '#fff'
            }
        },
        xAxis: {
            type: 'category',
            data: ['一室一厅', '一室两厅', '三室两厅', '两室一厅', '两室两厅', '四室两厅'],
            axisLabel: {
                color: '#fff'
            }
        },
        yAxis: {
            type: 'value',
            axisLabel: {
                color: '#fff'
            }
        },
        series: [
            {
                name: '最大租金',
                type: 'bar',
                data: [1500, 1800, 4498, 2198, 2200, 6999],
                itemStyle: {
                    color: '#0798c9'
                }
            },
            {
                name: '最小租金',
                type: 'bar',
                data: [500, 500, 3000, 1001, 1002, 4501],
                itemStyle: {
                    color: '#30cca7'
                }
            },
            {
                name: '平均租金',
                type: 'bar',
                data: [1011.45, 1160.54, 3766.68, 1608.45, 1623.15, 5771.90],
                itemStyle: {
                    color: '#4e4e5e'
                }
            }
        ]
    };

    roomRentStatisticsChart.setOption(roomRentStatisticsOption);

/*    $.ajax({
        url: '/pages/DataAnalysis',
        type: 'POST',
        dataType: "json",
        data: {action: 'roomRentStatistics'},
        success: function (response) {
            var roomTypes = [];
            var maxPrices = [];
            var minPrices = [];
            var avgPrices = [];
            response.forEach(function (item) {
                roomTypes.push(item.roomType);
                maxPrices.push(item.maxPrice);
                minPrices.push(item.minPrice);
                avgPrices.push(item.avgPrice);
            });
            roomRentStatisticsChart.setOption({
                xAxis: {data: roomTypes},
                series: [
                    {name: '最大租金', data: maxPrices},
                    {name: '最小租金', data: minPrices},
                    {name: '平均租金', data: avgPrices}
                ]
            });
        },
        error: function (xhr, status, error) {
            console.error('Error fetching data: ' + error);
        }
    });*/

    // 各类房间受欢迎度图表 - 柱状图
    var roomPopularityChart = echarts.init(document.getElementById('roomPopularityChart'));
    var roomPopularityOption = {
        title: {
            text: '各类房间受欢迎度',
            textStyle: {
                color: '#fff'
            }
        },
        tooltip: {
            trigger: 'axis',
            axisPointer: {type: 'shadow'}
        },
        legend: {
            data: ['受欢迎度'],
            textStyle: {
                color: '#fff'
            }
        },
        xAxis: {
            type: 'category',
            data: ['一室一厅', '两室两厅', '一室两厅', '四室两厅', '两室一厅', '三室两厅'],
            axisLine: {
                lineStyle: {
                    color: '#fff'
                }
            },
            axisLabel: {
                color: '#fff'
            }
        },
        yAxis: {
            type: 'value',
            min: 750,
            axisLine: {
                lineStyle: {
                    color: '#fff'
                }
            },
            axisLabel: {
                color: '#fff'
            }
        },
        series: [
            {
                name: '受欢迎度',
                type: 'bar',
                data: [873, 842, 842, 831, 809, 803],
                itemStyle: {
                    color: '#13d5d5'
                }
            }
        ]
    };

    roomPopularityChart.setOption(roomPopularityOption);

/*    $.ajax({
        url: '/pages/DataAnalysis',
        type: 'POST',
        dataType: "json",
        data: {action: 'roomPopularityChart'},
        success: function (response) {
            var roomTypes = [];
            var popularities = [];
            response.forEach(function (item) {
                roomTypes.push(item.roomType);
                popularities.push(item.popularity);
            });
            roomPopularityChart.setOption({
                xAxis: {data: roomTypes},
                series: [{name: '受欢迎度', data: popularities}]
            });
        },
        error: function (xhr, status, error) {
            console.error('Error fetching data: ' + error);
        }
    });*/

    // 用户租期偏好图表 - 饼图
    var userPreferenceChart = echarts.init(document.getElementById('userPreferenceChart'));
    var userPreferenceOption = {
        title: {
            text: '用户租期偏好',
            left: 'left',
            textStyle: {
                color: '#fff',
                fontSize: 18,
                fontWeight: 'bold'
            }
        },
        tooltip: {
            trigger: 'item',
            formatter: '{a} <br/>{b} : {c} ({d}%)'
        },
        legend: {
            orient: 'vertical',
            top: '10%',
            left: 'left',
            textStyle: {
                color: '#fff'
            }
        },
        series: [
            {
                name: '租期偏好',
                type: 'pie',
                radius: '70%',
                center: ['50%', '50%'],
                data: [
                    {value: 2080, name: '长期'},
                    {value: 2920, name: '短期'}
                ],
                label: {
                    show: true,
                    position: 'inside',
                    formatter: '{b}:{d}%',
                    color: '#ffffff'
                },
                labelLine: {
                    show: true,
                    length: 15,
                    length2: 10,
                    smooth: true
                },
                itemStyle: {
                    borderRadius: 10,
                    borderWidth: 2
                },
                emphasis: {
                    itemStyle: {
                        shadowBlur: 10,
                        shadowOffsetX: 0,
                        shadowColor: 'rgba(0, 0, 0, 0.5)'
                    },
                    label: {
                        show: true,
                        fontSize: 25,
                        fontWeight: 'bold'
                    }
                }
            }
        ]
    };

    userPreferenceChart.setOption(userPreferenceOption);

/*
    $.ajax({
        url: '/pages/DataAnalysis',
        type: 'POST',
        dataType: "json",
        data: {action: 'userPreferenceChart'},
        success: function (response) {
            var preferenceData = [
                {value: response.longTerm, name: '长期'},
                {value: response.shortTerm, name: '短期'}
            ];
            userPreferenceChart.setOption({
                series: [{data: preferenceData}]
            });
        },
        error: function (xhr, status, error) {
            console.error('Error fetching data: ' + error);
        }
    });
*/

    // 用户支付方式占比图表 - 饼图
    var paymentMethodsChart = echarts.init(document.getElementById('paymentMethodsChart'));
    var paymentMethodsOption = {
        title: {
            text: '用户支付方式占比',
            textStyle: {
                color: '#fff'
            }
        },
        tooltip: {
            trigger: 'item',
            formatter: '{a} <br/>{b}: {c} ({d}%)'
        },
        legend: {
            top: '10%',
            left: 'center',
            textStyle: {
                color: '#fff'
            }
        },
        series: [
            {
                name: '支付方式',
                type: 'pie',
                radius: ['30%', '70%'],
                avoidLabelOverlap: false,
                itemStyle: {
                    borderRadius: 10
                },
                label: {
                    show: true,
                    position: 'inside',
                    formatter: '{b}\n{d}%',
                    color: '#fff'
                },
                emphasis: {
                    label: {
                        show: true,
                        fontSize: 25,
                        fontWeight: 'bold'
                    }
                },
                labelLine: {
                    show: false
                },
                data: [
                    {value: 1628, name: '微信', itemStyle: {color: '#01b92c'}},
                    {value: 1675, name: '支付宝', itemStyle: {color: '#094fd7'}},
                    {value: 1697, name: '现金', itemStyle: {color: '#f50707'}}
                ]
            }
        ]
    };

    paymentMethodsChart.setOption(paymentMethodsOption);

/*    $.ajax({
        url: '/pages/DataAnalysis',
        type: 'POST',
        dataType: "json",
        data: {action: 'paymentMethodsChart'},
        success: function (response) {
            var paymentMethodsData = response.map(function (item) {
                return {name: item.paymentMethod, value: item.count};
            });
            paymentMethodsChart.setOption({
                series: [{data: paymentMethodsData}]
            });
        },
        error: function (xhr, status, error) {
            console.error('Error fetching data: ' + error);
        }
    });*/

    // 每月订单数量变化图表 - 折线图
    var monthlyOrdersChart = echarts.init(document.getElementById('monthlyOrdersChart'));
    var monthlyOrdersOption = {
        title: {
            text: '每月订单数量变化',
            textStyle: {
                color: '#fff'
            }
        },
        tooltip: {
            trigger: 'axis',
            axisPointer: {type: 'shadow'}
        },
        legend: {
            data: ['订单数量'],
            textStyle: {
                color: '#fff'
            }
        },
        xAxis: {
            type: 'category',
            data: ['2023-06-15', '2023-06-16', '2023-06-17', '2023-06-18', '2023-06-19', '2023-06-20', '2023-06-21', '2023-06-22', '2023-06-23', '2023-06-24', '2023-06-25', '2023-06-26', '2023-06-27'],
            axisLabel: {
                color: '#fff'
            }
        },
        yAxis: {
            type: 'value',
            axisLabel: {
                color: '#fff'
            }
        },
        series: [
            {
                name: '订单数量',
                type: 'line',
                data: [74, 216, 214, 212, 190, 228, 212, 225, 214, 177, 194, 205, 147],
                lineStyle: {
                    width: 3,
                    color: 'rgba(0,255,245,0.7)',
                },
                itemStyle: {
                    color: 'rgb(0,138,252)',
                },
                label: {
                    show: true,
                    color: 'rgba(0,255,245,0.7)'
                },
                emphasis: {
                    focus: 'series',
                }
            }
        ],
        animation: true
    };

    monthlyOrdersChart.setOption(monthlyOrdersOption);

    /*$.ajax({
        url: '/pages/DataAnalysis',
        type: 'POST',
        dataType: "json",
        data: {action: 'monthlyOrdersChart'},
        success: function (response) {
            var months = [];
            var orderCounts = [];
            response.forEach(function (item) {
                months.push(item.month);
                orderCounts.push(item.count);
            });
            monthlyOrdersChart.setOption({
                xAxis: {data: months},
                series: [{data: orderCounts}]
            });
        },
        error: function (xhr, status, error) {
            console.error('Error fetching data: ' + error);
        }
    });*/
});
