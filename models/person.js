const mongoose=require('mongoose');

const PersonSchema= new mongoose.Schema ({
    name: {
        type: String, 
        required: true, 
        unique: true,
        dropDups: true, 
        set: value=> value.trim().replace(/0123456789\s+/g, " ").toLowerCase(),
        validate: [
            {
                validator: async function(value) {
                    const count=await this.model('Person')
                    .countDocuments({name: value});
                    return !count;
                }, 
            message: props=> `${props.value} exists. Try a different name.`
        }
        ]
    }
    }, {
        timestamps: true
    });

module.exports=mongoose.model('Person', PersonSchema);