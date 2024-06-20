package com.rental.services;

import com.rental.dao.RoomPopularityDAO;
import com.rental.data.RoomPopularity;

import java.util.List;

public class RoomPopularityService {
    private RoomPopularityDAO roomPopularityDAO;

    public RoomPopularityService() {
        this.roomPopularityDAO = new RoomPopularityDAO();
    }

    public List<RoomPopularity> getRoomPopularity() {
        return roomPopularityDAO.getRoomPopularity();
    }
}
