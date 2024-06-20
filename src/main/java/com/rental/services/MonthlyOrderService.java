package com.rental.services;

import com.rental.dao.MonthlyOrderDAO;
import com.rental.data.MonthlyOrderCount;

import java.util.List;

public class MonthlyOrderService {
    private MonthlyOrderDAO monthlyOrderDAO;

    public MonthlyOrderService() {
        this.monthlyOrderDAO = new MonthlyOrderDAO();
    }

    public List<MonthlyOrderCount> getMonthlyOrderCount() {
        return monthlyOrderDAO.getMonthlyOrderCount();
    }
}
