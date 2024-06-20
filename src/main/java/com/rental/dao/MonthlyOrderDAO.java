package com.rental.dao;

import com.rental.data.MonthlyOrderCount;
import com.rental.util.HiveUtil;

import java.sql.Connection;
import java.sql.ResultSet;
import java.sql.Statement;
import java.util.ArrayList;
import java.util.List;

public class MonthlyOrderDAO {
    public List<MonthlyOrderCount> getMonthlyOrderCount() {
        List<MonthlyOrderCount> monthlyOrderCountList = new ArrayList<>();
        try (Connection conn = HiveUtil.getConnection();
             Statement stmt = conn.createStatement();
             ResultSet rs = stmt.executeQuery("SELECT DATE_FORMAT(checkin_date, 'yyyy-MM') AS month, COUNT(*) AS count " +
                     "FROM rental_orders WHERE status = '完成' GROUP BY DATE_FORMAT(checkin_date, 'yyyy-MM')")) {

            while (rs.next()) {
                String month = rs.getString(1);
                int count = rs.getInt(2);

                MonthlyOrderCount monthlyOrderCount = new MonthlyOrderCount(month, count);
                monthlyOrderCountList.add(monthlyOrderCount);
            }
        } catch (Exception e) {
            e.printStackTrace();
        }
        return monthlyOrderCountList;
    }
}
