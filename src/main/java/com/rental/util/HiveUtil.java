package com.niit.util;

import java.sql.Connection;
import java.sql.DriverManager;
import java.sql.PreparedStatement;
import java.sql.ResultSet;

public class HiveUtil {
    static final String driver ="org.apache.hive.jdbc.HiveDriver";
    static final String url = "jdbc:hive2://192.168.72.128:10000/practice";
    static Connection conn= null;
    static PreparedStatement ps =null;

    static ResultSet rs = null;
    static {
        try {
            Class.forName(driver);
        }catch (Exception e){
            e.printStackTrace();
        }
    }

    public static Connection getConn(){
        try {
            conn = DriverManager.getConnection(url, "root", "Root@1234");
        }catch (Exception e){
            e.printStackTrace();
        }
        return conn;
    }

    public static PreparedStatement getPs(String sql){
        try {
            ps = getConn().prepareStatement(sql);
        }catch (Exception e){
            e.printStackTrace();
        }
        return ps;
    }

    public static ResultSet getRs(String sql){
        try {
            rs = getPs(sql).executeQuery();
        }catch (Exception e){
            e.printStackTrace();
        }
        return rs ;
    }

    public static void close(){
        try {
            if (rs!=null) rs.close();
            if (ps!=null) ps.close();
            if (conn!=null) conn.close();
        }catch (Exception e){
            e.printStackTrace();
        }

    }
}
