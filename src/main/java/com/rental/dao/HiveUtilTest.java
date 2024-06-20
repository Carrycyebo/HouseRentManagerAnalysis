package com.rental.dao;
import com.rental.util.HiveUtil;
import org.junit.Test;

import java.sql.*;


public class HiveUtilTest {
    public static void main(String[] args){
        /*OrderDAO orderDAO =new OrderDAO();
        System.out.println(orderDAO.getTotalOrdersCount() +  "   "  + orderDAO.getCompletedOrdersCount());
        */

        /*RoomDAO roomDAO = new RoomDAO();
        System.out.println(roomDAO.getRoomRentStatistics());*/

        /*RoomPopularityDAO roomPopularityDAO = new RoomPopularityDAO();
        System.out.println(roomPopularityDAO.getRoomPopularity());*/

        /*RentalPeriodDAO rentalPeriodDAO = new RentalPeriodDAO();
        System.out.println(rentalPeriodDAO.getRentalPeriodPreference());*/

        /*PaymentMethodDAO paymentMethodDAO = new PaymentMethodDAO();
        System.out.println(paymentMethodDAO.getPaymentMethodShare());*/

        MonthlyOrderDAO monthlyOrderDAO = new MonthlyOrderDAO();
        System.out.println(monthlyOrderDAO.getMonthlyOrderCount());
    }


//    public static void  {
//        Connection conn = null;
//        Statement stmt = null;
//        ResultSet rs = null;
//        try {
//            conn = HiveUtil.getConnection();
//            stmt = conn.createStatement();
//            String sql = "SHOW tables";  // SQL 语句
//            rs = stmt.executeQuery(sql);
//
//            System.out.println("Databases:");
//            while (rs.next()) {
//                String databaseName = rs.getString(1);
//                System.out.println(databaseName);
//            }
//
//
//        } catch (SQLException e) {
//            e.printStackTrace();
//        } finally {
//            HiveUtil.close(conn, stmt, rs);
//        }
//    }



}