// 页面加载完成后执行
$(document).ready(function () {
    // 订单完成率图表
    var completionRateChart = echarts.init(document.getElementById('completionRateChart'));
    var completionRateOption = {
        title: {text: '订单完成率分析'},
        tooltip: {trigger: 'axis', axisPointer: {type: 'shadow'}},
        legend: {data: ['完成率']},
        xAxis: {type: 'category', data: ['完成率']},
        yAxis: {type: 'value'},
        series: [{name: '完成率', type: 'bar', data: []}]
    };
    completionRateChart.setOption(completionRateOption);

    $.ajax({
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
    });

    // 各类房间租金统计图表
    var roomRentStatisticsChart = echarts.init(document.getElementById('roomRentStatistics'));
    var roomRentStatisticsOption = {
        title: {text: '各类房间租金统计'},
        tooltip: {trigger: 'axis', axisPointer: {type: 'shadow'}},
        legend: {data: ['最大租金', '最小租金', '平均租金']},
        xAxis: {type: 'category', data: []},
        yAxis: {type: 'value'},
        series: [
            {name: '最大租金', type: 'bar', data: []},
            {name: '最小租金', type: 'bar', data: []},
            {name: '平均租金', type: 'bar', data: []}
        ]
    };
    roomRentStatisticsChart.setOption(roomRentStatisticsOption);

    $.ajax({
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
    });

    // 各类房间受欢迎度图表
    var roomPopularityChart = echarts.init(document.getElementById('roomPopularityChart'));
    var roomPopularityOption = {
        title: {text: '各类房间受欢迎度'},
        tooltip: {trigger: 'axis', axisPointer: {type: 'shadow'}},
        legend: {data: ['受欢迎度']},
        xAxis: {type: 'category', data: []},
        yAxis: {type: 'value'},
        series: [{name: '受欢迎度', type: 'bar', data: []}]
    };
    roomPopularityChart.setOption(roomPopularityOption);

    $.ajax({
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
    });

    // 用户租期偏好图表
    var userPreferenceChart = echarts.init(document.getElementById('userPreferenceChart'));
    var userPreferenceOption = {
        title: {text: '用户租期偏好'},
        tooltip: {trigger: 'axis', axisPointer: {type: 'shadow'}},
        legend: {data: ['租期偏好']},
        xAxis: {type: 'category', data: []},
        yAxis: {type: 'value'},
        series: [{name: '租期偏好', type: 'bar', data: []}]
    };
    userPreferenceChart.setOption(userPreferenceOption);

    $.ajax({
        url: '/pages/DataAnalysis',
        type: 'POST',
        dataType: "json",
        data: {action: 'userPreferenceChart'},
        success: function (response) {
            var rentalTypes = [];
            var counts = [];
            response.forEach(function (item) {
                rentalTypes.push(item.rentalType);
                counts.push(item.count);
            });
            userPreferenceChart.setOption({
                xAxis: {data: rentalTypes},
                series: [{name: '租期偏好', data: counts}]
            });
        },
        error: function (xhr, status, error) {
            console.error('Error fetching data: ' + error);
        }
    });

    // 用户支付方式占比图表
    var paymentMethodsChart = echarts.init(document.getElementById('paymentMethodsChart'));
    var paymentMethodsOption = {
        title: {text: '用户支付方式占比'},
        tooltip: {trigger: 'item'},
        legend: {orient: 'vertical', left: 'left'},
        series: [{
            name: '支付方式',
            type: 'pie',
            radius: '50%',
            data: []
        }]
    };
    paymentMethodsChart.setOption(paymentMethodsOption);

    $.ajax({
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
    });
    //每月订单数量变化图表
    var monthlyOrdersChart = echarts.init(document.getElementById('monthlyOrdersChart'));
    var monthlyOrdersOption = {
        title: {text: '每月订单数量变化'},
        tooltip: {trigger: 'axis', axisPointer: {type: 'shadow'}},
        legend: {data: ['订单数量']},
        xAxis: {type: 'category', data: ["2022-05"]},
        yAxis: {type: 'value'},
        series: [{name: '订单数量', type: 'line', data: []}]
    };
    monthlyOrdersChart.setOption(monthlyOrdersOption);

    $.ajax({
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
    });

});