$(document).ready(function () {
    // 订单完成率图表 - 仪表盘图
    var completionRateChart = echarts.init(document.getElementById('completionRateChart'));
    completionRateChart.showLoading();
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
                data: [],
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

    $.ajax({
        url: '/pages/DataAnalysis',
        type: 'POST',
        dataType: "json",
        data: {action: 'orderCompletionRate'},
        success: function (response) {
            completionRateChart.hideLoading();
            completionRateChart.setOption({
                series: [{
                    data: [{value: response.completionRate, name: '订单完成率'}]
                }]
            });
        },
        error: function (xhr, status, error) {
            console.error('Error fetching data: ' + error);
            completionRateChart.hideLoading();
        }
    });

    // 各类房间租金统计图表 - 条形图
    var roomRentStatisticsChart = echarts.init(document.getElementById('roomRentStatistics'));
    roomRentStatisticsChart.showLoading();
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
            data: [],
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
                data: [],
                itemStyle: {
                    color: '#0798c9'
                }
            },
            {
                name: '最小租金',
                type: 'bar',
                data: [],
                itemStyle: {
                    color: '#30cca7'
                }
            },
            {
                name: '平均租金',
                type: 'bar',
                data: [],
                itemStyle: {
                    color: '#4e4e5e'
                }
            }
        ]
    };

    roomRentStatisticsChart.setOption(roomRentStatisticsOption);

    $.ajax({
        url: '/pages/DataAnalysis',
        type: 'POST',
        dataType: "json",
        data: {action: 'roomRentStatistics'},
        success: function (response) {
            roomRentStatisticsChart.hideLoading();
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
            roomRentStatisticsChart.hideLoading();
        }
    });

    // 各类房间受欢迎度图表 - 柱状图
    var roomPopularityChart = echarts.init(document.getElementById('roomPopularityChart'));
    roomPopularityChart.showLoading();
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
            data: [],
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
                data: [],
                itemStyle: {
                    color: '#13d5d5'
                }
            }
        ]
    };

    roomPopularityChart.setOption(roomPopularityOption);

    $.ajax({
        url: '/pages/DataAnalysis',
        type: 'POST',
        dataType: "json",
        data: {action: 'roomPopularityChart'},
        success: function (response) {
            roomPopularityChart.hideLoading();
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
            roomRentStatisticsChart.hideLoading();
        }
    });

    // 用户租期偏好图表 - 饼图
    var userPreferenceChart = echarts.init(document.getElementById('userPreferenceChart'));
    userPreferenceChart.showLoading();
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
                data: [],
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

    $.ajax({
        url: '/pages/DataAnalysis',
        type: 'POST',
        dataType: "json",
        data: {action: 'userPreferenceChart'},
        success: function (response) {
            userPreferenceChart.hideLoading();
            var colors = {
                '长期': '#FF5733',
                '短期': '#139d14'
            };
            var preferenceData = response.map(function (item) {
                var rentalType = item.rentalType === 'long-term' ? '长期' : '短期';
                return {
                    name: rentalType,
                    value: item.count,
                    itemStyle: {
                        color: colors[rentalType] // 根据租期偏好设置颜色
                    }
                };
            });
            userPreferenceChart.setOption({
                series: [{data: preferenceData}]
            });
        },
        error: function (xhr, status, error) {
            console.error('Error fetching data: ' + error);
            userPreferenceChart.hideLoading();
        }
    });


    // 用户支付方式占比图表 - 饼图
    var paymentMethodsChart = echarts.init(document.getElementById('paymentMethodsChart'));
    paymentMethodsChart.showLoading();
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
                data: []
            }
        ]
    };

    paymentMethodsChart.setOption(paymentMethodsOption);

    $.ajax({
        url: '/pages/DataAnalysis',
        type: 'POST',
        dataType: "json",
        data: {action: 'paymentMethodsChart'},
        success: function (response) {
            paymentMethodsChart.hideLoading();
            // 为三种支付方式指定颜色
            var colors = {
                '微信': '#01b92c',
                '支付宝': '#094fd7',
                '现金': '#f50707'
            };
            var paymentMethodsData = response.map(function (item) {
                return {
                    name: item.paymentMethod,
                    value: item.count,
                    itemStyle: {
                        color: colors[item.paymentMethod] // 根据支付方式设置颜色
                    }
                };
            });
            paymentMethodsChart.setOption({
                series: [{data: paymentMethodsData}]
            });
        },
        error: function (xhr, status, error) {
            console.error('Error fetching data: ' + error);
            paymentMethodsChart.hideLoading();
        }
    });

    // 每月订单数量变化图表 - 折线图
    var monthlyOrdersChart = echarts.init(document.getElementById('monthlyOrdersChart'));
    monthlyOrdersChart.showLoading();
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
            data: [],
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
                data: [],
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

    $.ajax({
        url: '/pages/DataAnalysis',
        type: 'POST',
        dataType: "json",
        data: {action: 'monthlyOrdersChart'},
        success: function (response) {
            monthlyOrdersChart.hideLoading();
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
            monthlyOrdersChart.hideLoading();
        }
    });
});
