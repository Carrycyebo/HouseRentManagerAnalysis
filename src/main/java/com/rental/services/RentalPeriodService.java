package com.rental.services;

import com.rental.dao.RentalPeriodDAO;
import com.rental.data.RentalPeriodPreference;

import java.util.List;

public class RentalPeriodService {
    private RentalPeriodDAO rentalPeriodDAO;

    public RentalPeriodService() {
        this.rentalPeriodDAO = new RentalPeriodDAO();
    }

    public List<RentalPeriodPreference> getRentalPeriodPreference() {
        return rentalPeriodDAO.getRentalPeriodPreference();
    }
}