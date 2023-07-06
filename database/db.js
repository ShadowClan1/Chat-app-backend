const { default: mongoose } = require("mongoose")

const connectDb = async () =>{
return await mongoose.connect('mongodb+srv://Krishna:Ritik@jsk-tech.ckiehuu.mongodb.net/group_chat')
}

module.exports = connectDb
