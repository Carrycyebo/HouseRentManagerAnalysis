package com.rental.services;

import com.rental.dao.RoomDAO;
import com.rental.data.Room;

import java.util.List;

public class RoomService {
    private RoomDAO roomDAO;

    public RoomService() {
        this.roomDAO = new RoomDAO();
    }

    public List<Room> getRoomRentStatistics() {
        return roomDAO.getRoomRentStatistics();
    }
}