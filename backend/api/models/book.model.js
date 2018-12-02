var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var blogSchema = new Schema({
  Name:  String,
  Author: String,
  Type:   String,
  comments: [{ body: String, date: Date }],
  date: { type: Date, default: Date.now },
  hidden: Boolean,
  meta: {
    votes: Number,
    favs:  Number
  }
});
mongoose.model('Book', bookSchema);