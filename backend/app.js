const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');

const Post = require('./models/post');
const app = express();

mongoose.connect("mongodb+srv://jrking:S3lB59VEWlIcIT4F@cluster0-7szok.mongodb.net/node-angular?retryWrites=true",{useNewUrlParser: true})
.then(() =>{
  console.log('Connected to database');
})
.catch(err =>{
  console.log("connection failed");
});

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));

app.use((req,res,next) => {
  res.setHeader("Access-Control-Allow-Origin","*");
  res.setHeader(
    "Access-Control-Allow-Headers",
    "Origin,X-Requested-With, Content-Type, Accept"
    );
  res.setHeader(
    "Access-Control-Allow-Methods",
    "GET, POST, PATCH, DELETE, OPTIONS"
    );
  next();
});

// S3lB59VEWlIcIT4F

app.post("/api/posts",(req,res,next) => {
  const post = new Post({
    title: req.body.title,
    content: req.body.content
  });
  post.save();
  res.status(201).json({
    message: 'Post added successfully'
  });
});


app.get('/api/posts',(req,res,next) => {
  const posts = [
    {
      id:'fadf12421l',
      title:'First server-side post',
      content: 'This is coming from the server'
    },
    {
      id:'jdvsj1365f',
      title:'Second server-side post',
      content: 'This is coming from the server!'
    }
  ];
 res.status(200).json({
   message:'Posts fetched successfully!',
   posts : posts
 });
});

module.exports = app;
