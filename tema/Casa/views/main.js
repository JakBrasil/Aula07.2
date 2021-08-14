const express = require("express")();
	const cors = require("cors");
	const http = require("http").createServer(express);
	const io = require("socket.io")(http);
	const { MongoClient } = require("mongodb");
	
	const client = new MongoClient(process.env["ATLAS_URI"]);
	
	express.use(cors());
	
	var collection;
	
	io.on("connection", (socket) => {
	    socket.on("join", async (gameId) => {});
	    socket.on("message", (message) => {});
	});
	
	express.get("/chats", async (request, response) => {});
	
	http.listen(3000, async () => {
	    try {
	        await client.connect();
	        collection = client.db("gamedev").collection("chats");
	        console.log("Listening on port :%s...", http.address().port);
	    } catch (e) {
	        console.error(e);
	    }
	});