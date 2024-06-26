package com.rental.data;


import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@AllArgsConstructor
@NoArgsConstructor
@Builder
public class Order {
    private int orderId;
    private int roomId;
    private int userId;
    private String startDate;
    private String endDate;
    private String paymentMethod;
    private String status;


}