<%@ page language="java" contentType="text/html; charset=ISO-8859-1"
	pageEncoding="ISO-8859-1" import="com.cs336.pkg.*"%>
<%@ page import="java.io.*,java.util.*,java.sql.*"%>
<%@ page import="javax.servlet.http.*,javax.servlet.*"%>


<%
	try{
		ApplicationDB db = new ApplicationDB();	
		Connection con = db.getConnection();	
		
		Statement st = con.createStatement();
		
		st.executeUpdate("DELETE FROM Bids WHERE bid_id = " + request.getParameter("bidID") +";" );

		con.close();
		st.close();
	
	}catch(Exception e){
	
	}
	
%>