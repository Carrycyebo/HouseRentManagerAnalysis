package com.rental.dao;

import com.rental.data.RentalPeriodPreference;
import com.rental.util.HiveUtil;

import java.sql.Connection;
import java.sql.ResultSet;
import java.sql.Statement;
import java.util.ArrayList;
import java.util.List;

public class RentalPeriodDAO {
    public List<RentalPeriodPreference> getRentalPeriodPreference() {
        List<RentalPeriodPreference> rentalPeriodList = new ArrayList<>();
        try (Connection conn = HiveUtil.getConnection();
             Statement stmt = conn.createStatement();
             ResultSet rs = stmt.executeQuery("SELECT " +
                     "CASE WHEN rental_period < 90 THEN 'short-term' ELSE 'long-term' END AS rental_type, " +
                     "COUNT(*) AS count " +
                     "FROM rental_orders " +
                     "GROUP BY CASE WHEN rental_period < 90 THEN 'short-term' ELSE 'long-term' END")) {

            while (rs.next()) {
                String rentalType = rs.getString(1);
                int count = rs.getInt(2);

                RentalPeriodPreference rentalPeriodPreference = new RentalPeriodPreference(rentalType, count);
                rentalPeriodList.add(rentalPeriodPreference);
            }
        } catch (Exception e) {
            e.printStackTrace();
        }
        return rentalPeriodList;
    }
}
