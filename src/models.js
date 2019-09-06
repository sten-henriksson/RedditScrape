const mongoose = require('mongoose');

const redditpost = new mongoose.Schema({
	ModelUser: String,
	ModelAge:Number,
	Modeltext:String,
	ModelScore:Number,
});

const RedditPost = mongoose.model('RedditPost', redditpost);
exports.post = RedditPost;