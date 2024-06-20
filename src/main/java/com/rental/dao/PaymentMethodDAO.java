package com.rental.dao;

import com.rental.data.PaymentMethodShare;
import com.rental.util.HiveUtil;

import java.sql.Connection;
import java.sql.ResultSet;
import java.sql.Statement;
import java.util.ArrayList;
import java.util.List;

public class PaymentMethodDAO {
    public List<PaymentMethodShare> getPaymentMethodShare() {
        List<PaymentMethodShare> paymentMethodShareList = new ArrayList<>();
        try (Connection conn = HiveUtil.getConnection();
             Statement stmt = conn.createStatement();
             ResultSet rs = stmt.executeQuery("SELECT payment_method, COUNT(*) AS count FROM rental_orders GROUP BY payment_method")) {

            while (rs.next()) {
                String paymentMethod = rs.getString(1);
                int count = rs.getInt(2);

                PaymentMethodShare paymentMethodShare = new PaymentMethodShare(paymentMethod, count);
                paymentMethodShareList.add(paymentMethodShare);
            }
        } catch (Exception e) {
            e.printStackTrace();
        }
        return paymentMethodShareList;
    }
}
