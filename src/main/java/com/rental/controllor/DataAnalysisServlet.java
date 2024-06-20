package com.rental.controllor;

import com.rental.data.*;
import com.rental.services.*;
import org.json.JSONArray;
import org.json.JSONObject;

import javax.servlet.annotation.WebServlet;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import java.io.IOException;
import java.text.DecimalFormat;
import java.util.ArrayList;
import java.util.List;

@WebServlet("/pages/DataAnalysis")

public class DataAnalysisServlet extends HttpServlet {
    private OrderService orderService;
    private RoomService roomService;
    private RoomPopularityService roomPopularityService;
    private RentalPeriodService rentalPeriodService;
    private PaymentMethodService paymentMethodService;
    private MonthlyOrderService monthlyOrderService;

    @Override
    public void init() {
        orderService = new OrderService();
        roomService = new RoomService();
        roomPopularityService = new RoomPopularityService();
        rentalPeriodService = new RentalPeriodService();
        paymentMethodService = new PaymentMethodService();
        monthlyOrderService = new MonthlyOrderService();
    }

    protected void doPost(HttpServletRequest request, HttpServletResponse response) throws IOException {
        response.setContentType("application/json;charset=UTF-8");
        String action = request.getParameter("action");

        System.out.println(123123);
        System.out.println(action);

        if (action == null) {
            response.setStatus(HttpServletResponse.SC_BAD_REQUEST);
            return;
        }

        switch (action) {
            case "orderCompletionRate":
                double completionRate = orderService.calculateOrderCompletionRate();
                DecimalFormat df = new DecimalFormat("#.##");
                String formattedCompletionRate = df.format(completionRate);
//                double completionRate = 50;
                System.out.println(formattedCompletionRate);
                JSONObject completionRateJson = new JSONObject();
                completionRateJson.put("completionRate", formattedCompletionRate);
                System.out.println(completionRateJson);
                response.getWriter().write(completionRateJson.toString());
                break;
            case "roomRentStatistics":
                List<Room> roomList = roomService.getRoomRentStatistics();
//                List<Room> roomList = new ArrayList<>();
//                roomList.add(new Room("一室一厅", 1500, 500, 1011.4501718213058));
//                roomList.add(new Room("一室两厅", 1800, 500, 1160.540380047506));
//                roomList.add(new Room("三室两厅", 4498, 3000, 3766.681195516812));
//                roomList.add(new Room("两室一厅", 2198, 1001, 1608.4474660074166));
//                roomList.add(new Room("两室两厅", 2200, 1002, 1623.147268408551));
//                roomList.add(new Room("四室两厅", 6999, 4501, 5771.89651022864));


                JSONArray roomListJson = new JSONArray(roomList);
                System.out.println(roomListJson);
                response.getWriter().write(roomListJson.toString());
                break;
            case "roomPopularityChart":
                List<RoomPopularity> roomPopularityList = roomPopularityService.getRoomPopularity();
//                List<RoomPopularity> roomPopularityList = new ArrayList<>();
//                roomPopularityList.add(new RoomPopularity("一室一厅", 873));
//                roomPopularityList.add(new RoomPopularity("两室两厅", 842));
//                roomPopularityList.add(new RoomPopularity("一室两厅", 842));
//                roomPopularityList.add(new RoomPopularity("四室两厅", 831));
//                roomPopularityList.add(new RoomPopularity("两室一厅", 809));
//                roomPopularityList.add(new RoomPopularity("三室两厅", 803));

                JSONArray roomPopularityJson = new JSONArray(roomPopularityList);
                System.out.println(roomPopularityJson);
                response.getWriter().write(roomPopularityJson.toString());
                break;
            case "userPreferenceChart":
                List<RentalPeriodPreference> rentalPeriodPreferences = rentalPeriodService.getRentalPeriodPreference();
//                List<RentalPeriodPreference> rentalPeriodPreferences = new ArrayList<>();
//                rentalPeriodPreferences.add(new RentalPeriodPreference("long-term",2080));
//                rentalPeriodPreferences.add(new RentalPeriodPreference("short-term",2920));

                JSONArray rentalPeriodJson = new JSONArray(rentalPeriodPreferences);
                System.out.println(rentalPeriodJson);
                response.getWriter().write(rentalPeriodJson.toString());
                break;
            case "paymentMethodsChart":
                List<PaymentMethodShare> paymentMethodShares = paymentMethodService.getPaymentMethodShare();
//                List<PaymentMethodShare> paymentMethodShares = new ArrayList<>();
//                paymentMethodShares.add(new PaymentMethodShare("微信",1628));
//                paymentMethodShares.add(new PaymentMethodShare("支付宝",1675));
//                paymentMethodShares.add(new PaymentMethodShare("现金",1697));

                JSONArray paymentMethodJson = new JSONArray(paymentMethodShares);
                System.out.println(paymentMethodJson);
                response.getWriter().write(paymentMethodJson.toString());
                break;
            case "monthlyOrdersChart":
                List<MonthlyOrderCount> monthlyOrderCounts = monthlyOrderService.getMonthlyOrderCount();
//                List<MonthlyOrderCount> monthlyOrderCounts = new ArrayList<>();
//                monthlyOrderCounts.add(new MonthlyOrderCount("2022-05", 74));
//                monthlyOrderCounts.add(new MonthlyOrderCount("2022-06", 216));
//                monthlyOrderCounts.add(new MonthlyOrderCount("2022-07", 214));
//                monthlyOrderCounts.add(new MonthlyOrderCount("2022-08", 212));
//                monthlyOrderCounts.add(new MonthlyOrderCount("2022-09", 190));
//                monthlyOrderCounts.add(new MonthlyOrderCount("2022-10", 228));
//                monthlyOrderCounts.add(new MonthlyOrderCount("2022-11", 212));
//                monthlyOrderCounts.add(new MonthlyOrderCount("2022-12", 225));
//                monthlyOrderCounts.add(new MonthlyOrderCount("2023-01", 214));
//                monthlyOrderCounts.add(new MonthlyOrderCount("2023-02", 177));
//                monthlyOrderCounts.add(new MonthlyOrderCount("2023-03", 194));
//                monthlyOrderCounts.add(new MonthlyOrderCount("2023-04", 205));
//                monthlyOrderCounts.add(new MonthlyOrderCount("2023-05", 147));
                JSONArray monthlyOrderJson = new JSONArray(monthlyOrderCounts);
                System.out.println(monthlyOrderJson);
                response.getWriter().write(monthlyOrderJson.toString());
                break;

            default:
                response.setStatus(HttpServletResponse.SC_BAD_REQUEST);
                break;
        }
    }
}
