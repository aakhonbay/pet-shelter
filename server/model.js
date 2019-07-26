const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/pet-shelter', {useNewUrlParser: true});
var db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function(event){
    console.log('open')
})
var PetSchema = new mongoose.Schema({
    name:{type:String, required: [true, "Name cannot be empty."], minlength: [3, "Name must be at least 3 characters long."], unique: [true, "Name must be unique"]},
    type:{type: String, required:[true, "Type cannot be empty."], minlength:[3, "Type must be at least 3 characters long."]},
    description:{type: String, required:[true, "Description cannot be empty."], minlength:[3, "Description must be at least 3 characters long."]},
    skill:{type: [String]},
    rating:{type: Number}
}, {timestamps:true})

mongoose.model("Pet", PetSchema);