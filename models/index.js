const fs = require('fs'),
    path = require('path'),
    mongoose = require('mongoose'),
    db = {};

    mongoose.set('debug', true);
mongoose.connect("mongodb+srv://nnamcuongg98:aH1ENsLeOEFiNezt@cluster0.b2onpbx.mongodb.net/sales?retryWrites=true&w=majority", { useNewUrlParser: true, useUnifiedTopology: true, dbName:  'sales' }, (err)  =>  {
    if (err)  { console.log(err)}
    else {
        console.log('MongoDB connected')
    }
});


// import all file in this dir, except index.js
fs.readdirSync(__dirname)
.filter(function(file) {
    return (file.indexOf('.') !== 0) && (file !== 'index.js');
})
.forEach(function(file) {
    let model = require(path.join(__dirname, file));
    db[model.modelName] = model;
});

db.mongoose = mongoose;
module.exports = db;
