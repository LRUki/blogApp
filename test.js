// const mongoose = require('mongoose');
// mongoose.connect('mongodb://localhost/blogDB', {
//     useNewUrlParser: true
// });

let blogSchema = new mongoose.Schema({
    title: String,
    content: String
});
//set the name of the collection in blogDB=> "blog"
let blogModel = mongoose.model('blog', blogSchema);

blogModel.findOne({
    _id: "5e2455d7fb692db7047100a9"
}, (err, doc) => {
    console.log(doc);

});