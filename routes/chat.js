var express = require('express');
var MongoClient = require('mongodb').MongoClient;
var url = "mongodb://172.19.0.2:27017/mydb";

MongoClient.connect(url, function(err, db) {
  if (err) throw err;
  console.log("Database created!");
  db.close();
});