package com.rental.controllor;

import com.rental.data.Room;
import com.rental.services.OrderService;
import com.rental.services.RoomService;

import javax.servlet.RequestDispatcher;
import javax.servlet.ServletException;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import java.io.IOException;
import java.util.List;

public class DataAnalysisServlet extends HttpServlet {
    private OrderService orderService;
    private RoomService roomService;

    @Override
    public void init() {
        orderService = new OrderService();
        roomService = new RoomService();
    }

    protected void doGet(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
        response.setContentType("text/html;charset=UTF-8");
        String action = request.getParameter("action");

        if (action == null) {
            response.getWriter().println("Welcome to Data Analysis Servlet");
        } else {
            switch (action) {
                case "orderCompletionRate":
                    showOrderCompletionRate(request, response);
                    break;
                case "roomRentStatistics":
                    showRoomRentStatistics(request, response);
                    break;
                default:
                    response.getWriter().println("Action not supported");
                    break;
            }
        }
    }

    private void showOrderCompletionRate(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
        double completionRate = orderService.calculateOrderCompletionRate();
        request.setAttribute("completionRate", completionRate);
        RequestDispatcher dispatcher = request.getRequestDispatcher("/order_completion_rate.jsp");
        dispatcher.forward(request, response);
    }

    private void showRoomRentStatistics(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
        List<Room> roomList = roomService.getRoomRentStatistics();
        request.setAttribute("roomList", roomList);
        RequestDispatcher dispatcher = request.getRequestDispatcher("/room_rent_statistics.jsp");
        dispatcher.forward(request, response);
    }
}