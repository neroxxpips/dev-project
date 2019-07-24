const mongoose = require('mongoose');

const postSchema = mongoose.Schema({
  title: { type:String, required: true },
  content: { type: String, require: true }

});

module.export = mongoose.modul('Post', postSchema);
