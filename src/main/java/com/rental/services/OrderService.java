package com.rental.services;

import com.rental.dao.OrderDAO;

public class OrderService {
    private OrderDAO orderDAO;

    public OrderService() {
        this.orderDAO = new OrderDAO();
    }

    public double calculateOrderCompletionRate() {
        int completedOrders = orderDAO.getCompletedOrdersCount();
        int totalOrders = orderDAO.getTotalOrdersCount();

        return totalOrders > 0 ? (double) completedOrders / totalOrders * 100.0 : 0.0;
    }
}