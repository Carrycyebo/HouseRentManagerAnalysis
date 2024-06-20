package com.rental.services;

import com.rental.dao.PaymentMethodDAO;
import com.rental.data.PaymentMethodShare;

import java.util.List;

public class PaymentMethodService {
    private PaymentMethodDAO paymentMethodDAO;

    public PaymentMethodService() {
        this.paymentMethodDAO = new PaymentMethodDAO();
    }

    public List<PaymentMethodShare> getPaymentMethodShare() {
        return paymentMethodDAO.getPaymentMethodShare();
    }
}
