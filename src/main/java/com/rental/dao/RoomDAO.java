package com.rental.dao;


import com.rental.data.Room;
import com.rental.util.HiveUtil;

import java.sql.Connection;
import java.sql.ResultSet;
import java.sql.Statement;
import java.util.ArrayList;
import java.util.List;

public class RoomDAO {
    public List<Room> getRoomRentStatistics() {
        List<Room> roomList = new ArrayList<>();
        try (Connection conn = HiveUtil.getConnection();
             Statement stmt = conn.createStatement();
             ResultSet rs = stmt.executeQuery("SELECT room_type, MAX(rent_amount), MIN(rent_amount), AVG(rent_amount) FROM rental_orders GROUP BY room_type")) {

            while (rs.next()) {
                String roomType = rs.getString(1);
                double maxPrice = rs.getDouble(2);
                double minPrice = rs.getDouble(3);
                double avgPrice = rs.getDouble(4);

                Room room = new Room(roomType, maxPrice, minPrice, avgPrice);
                roomList.add(room);
            }
        } catch (Exception e) {
            e.printStackTrace();
        }
        return roomList;
    }
}