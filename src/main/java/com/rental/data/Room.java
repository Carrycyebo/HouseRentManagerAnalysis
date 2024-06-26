package com.rental.data;


import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@AllArgsConstructor
@NoArgsConstructor
@Builder
public class Room {
    private String roomType;
    private double maxPrice;
    private double minPrice;
    private double avgPrice;

}