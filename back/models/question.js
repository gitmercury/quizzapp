const mongoose=require('mongoose');

const questionSchema = mongoose.Schema({
    questionTitle : {type:String , required : true},
    questionType : {type:String , required : true},
    answers : {type:Array , required : true},
    _id : {type:Number , required : true},

});


module.exports= mongoose.model('Question', questionSchema);