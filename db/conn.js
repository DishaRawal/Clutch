const mongoose = require('mongoose');

mongoose.connect("mongodb://localhost:27017/registerDB" , {
      useNewUrlParser:true
}).then(() => {
    console.log('connection successful');
})
