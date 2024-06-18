<%@ page language="java" contentType="text/html; charset=UTF-8"
         pageEncoding="UTF-8"%>
<!DOCTYPE html>
<html>
<head>
    <meta charset="UTF-8">
    <title>订单完成率分析</title>
    <!-- 引入 ECharts -->
    <script src="https://cdn.jsdelivr.net/npm/echarts@5.4.0/dist/echarts.min.js"></script>
</head>
<body>
<div id="completionRateChart" style="width: 600px;height:400px;"></div>

<%
    double completionRate = (Double) request.getAttribute("completionRate");
%>

<script type="text/javascript">
    var myChart = echarts.init(document.getElementById('completionRateChart'));

    var option = {
        title: {
            text: '订单完成率分析'
        },
        tooltip: {},
        legend: {
            data:['完成率']
        },
        xAxis: {
            data: ["完成率"]
        },
        yAxis: {},
        series: [{
            name: '完成率',
            type: 'bar',
            data: [<%= completionRate %>]
        }]
    };

    myChart.setOption(option);
</script>
</body>
</html>
