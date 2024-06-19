const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost:27017/test', {useNewUrlParser: true, useUnifiedTopology: true}).then(() => {
    console.log("conections successful");
}).catch((error) => {
    console.log("something wrong", error);
});

// mongoose.connect('mongodb://localhost:27017/bloggingapp', {useNewUrlParser: true, useUnifiedTopology: true}).then(() => {
//     console.log("conections successful");
// }).catch((error) => {
//     console.log("something wrong", error);
// });