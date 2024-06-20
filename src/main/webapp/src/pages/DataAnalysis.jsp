<%@ taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core" %>
<%@ page contentType="text/html; charset=UTF-8"
         pageEncoding="UTF-8" %>
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>数据分析</title>
<!--         引入 jQuery 和 ECharts -->
    <script src="<c:url value="/src/package/jQuery/jquery-3.7.1.min.js"/>"></script>
    <script src="<c:url value="/src/package/echarts/echarts.js"/>"></script>


    <link rel="stylesheet" type="text/css" href="<c:url value="/src/package/bootstrap-5.3.0/css/bootstrap.min.css"/>">
    <script src="<c:url value="/src/package/bootstrap-5.3.0/js/bootstrap.min.js"/>"></script>

    <link rel="stylesheet" type="text/css" href="<c:url value="/src/css/common.css"/>">


<%--        <link rel="stylesheet" type="text/css" href="../css/common.css">

        <script src="../package/jQuery/jquery-3.7.1.min.js"></script>
        <script src="../package/echarts/echarts.js"></script>

        <link rel="stylesheet" type="text/css" href="../package/bootstrap-5.3.0/css/bootstrap.min.css">
        <script src="../package/bootstrap-5.3.0/js/bootstrap.min.js"></script>


        <script src="../script/barChart.js"></script>--%>

</head>
<body>
<div class="container-fluid">
    <div class="row">
        <div class="col-12 title">
            房屋租赁管理系统数据分析
        </div>
    </div>
    <div class="row">
        <div class="col-md-2 chart-container">
            <div id="completionRateChart" class="chart"></div>
        </div>
        <div class="col-md-4 chart-container">
            <div id="roomPopularityChart" class="chart"></div>
        </div>
        <div class="col-md-6 chart-container">
            <div id="roomRentStatistics" class="chart large-chart"></div>
        </div>

    </div>
    <div class="row">
        <div class="col-md-8 chart-container">
            <div id="monthlyOrdersChart" class="chart large-chart"></div>
        </div>
        <div class="col-md-2 chart-container">
            <div id="paymentMethodsChart" class="chart"></div>
        </div>
        <div class="col-md-2 chart-container">
            <div id="userPreferenceChart" class="chart"></div>
        </div>
    </div>
</div>

<script src="<c:url value="/src/script/barChart.js"/>"></script>
</body>
</html>