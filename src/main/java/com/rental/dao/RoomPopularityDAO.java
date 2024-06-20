package com.rental.dao;

import com.rental.data.RoomPopularity;
import com.rental.util.HiveUtil;

import java.sql.Connection;
import java.sql.ResultSet;
import java.sql.Statement;
import java.util.ArrayList;
import java.util.List;

public class RoomPopularityDAO {
    public List<RoomPopularity> getRoomPopularity() {
        List<RoomPopularity> roomPopularityList = new ArrayList<>();
        try (Connection conn = HiveUtil.getConnection();
             Statement stmt = conn.createStatement();
             ResultSet rs = stmt.executeQuery("SELECT room_type, COUNT(*) AS popularity FROM rental_orders GROUP BY room_type ORDER BY popularity DESC")) {

            while (rs.next()) {
                String roomType = rs.getString(1);
                int popularity = rs.getInt(2);

                RoomPopularity roomPopularity = new RoomPopularity(roomType, popularity);
                roomPopularityList.add(roomPopularity);
            }
        } catch (Exception e) {
            e.printStackTrace();
        }
        return roomPopularityList;
    }
}
