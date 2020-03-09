var express = require('express');
var router = express.Router();

/* GET home page. */

var db, coll;
var MongoClient = require('mongodb').MongoClient

MongoClient.connect('mongodb://localhost:27017/forum',(err,database) =>{ 
  const appDB = database.db('forum')
  coll = appDB.collection('posts');
  db = appDB;
  // console.log(coll)
  // console.log("DB connected ", this.db);
})


router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

router.get('/api/hello', function (req, res) {
  res.send('Hello World!')
})

//to get all posts available
router.get('/api/all', function (req, res) {

  var allPosts = {'posts':['dummy1', 'dumm2', 'dummy3']};
  var response = {};

  db.collection("posts").find({}).toArray(function(err, result) {
    if (err) throw err;
    response = {'status':'success', 'data': result};
    console.log(response);
    res.send(response);
  });

})

//to add new posts
router.post('/api/new', function(req, res) {
  console.log("got new add post..", req.body);
  var newPost = {title:req.body.postTitle, body:req.body.postBody}
  console.log(newPost);
  db.collection("posts").insertOne(newPost, function(err, res) {
    if (err) throw err;
    console.log("1 document inserted", req.body.postTitle);
  });

  res.send({'status':'success'});
});

//to return error page
router.use(function (req, res, next) {
  res.status(404).send("Sorry can't find that!")
})


module.exports = router;
