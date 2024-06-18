package com.rental.dao;
import com.rental.util.HiveUtil;

import java.sql.*;


public class HiveUtilTest {



    public static void main(String[] args) {
        Connection conn = null;
        Statement stmt = null;
        ResultSet rs = null;

        OrderDAO orderDAO = new OrderDAO();
        try {
            conn = HiveUtil.getConnection();
            stmt = conn.createStatement();
            String sql = "SHOW tables";  // SQL 语句
            rs = stmt.executeQuery(sql);

            System.out.println("Databases:");
            while (rs.next()) {
                String databaseName = rs.getString(1);
                System.out.println(databaseName);
            }

            System.out.println(orderDAO.getCompletedOrdersCount());


        } catch (SQLException e) {
            e.printStackTrace();
        } finally {
            HiveUtil.close(conn, stmt, rs);
        }
    }

}