//Michal Hradečný


var mongoose = require('mongoose'),
Schema = mongoose.Schema;



function validateLength (v) {
  // kontrola dlzky slova
  return v.length <= 15;
}




var UciteliaSchema = new Schema({
   
    // the property meno
    
    meno: {         
        type: String,   
        default: '',
        trim: true,     
        unique : true,
        // make this a required field
        required: 'meno cannot be blank',      
    
    },
    
    // the property heslo
    
    heslo: {
        type: String,   
        default: '',
        trim: true,     
        // make this a required field
        required: 'heslo cannot be blank',
        validate: [validateLength, 'heslo musi mat 15 a menej znakov'], 
    },

});

mongoose.model('Ucitelia', UciteliaSchema);





var ziaciSchema = new Schema({
    
    meno: {         
        type: String,   
        default: '',
        trim: true,     
        unique : true,
        required: 'meno cannot be blank',      
    
    },
    

    heslo: {
        type: String,   
        default: '',
        trim: true,     
        required: 'heslo cannot be blank',
        validate: [validateLength, 'heslo musi mat 15 a menej znakov'], 
    },
    id_ucitela :{
        type: Number,
        default: 0,
    },      
});

mongoose.model('Ziaci', ziaciSchema);







var slovaSchema = new Schema({
    
    slovo: {         
        type: String,   
        default: '',
        trim: true,     
        unique : true,
        required: 'slovo cannot be blank',      
    },
	
    audio : { data: Buffer, contentType: String },
    obrazok: { data: Buffer, contentType: String },

});

mongoose.model('Slova', slovaSchema);






var vysledkySchema = new Schema({

    created: {         
        type: Date,   
        default: Date.now 
    },
    
    hodnotenie :{
        type: Number,
        default: 0,
    },    
    
    id_ziaka :{
        type: Number,
        default: 0,
    },    
    
    id_cvicenia :{
        type: Number,
        default: 0,
    },    
});

mongoose.model('Vysledky', vysledkySchema);
