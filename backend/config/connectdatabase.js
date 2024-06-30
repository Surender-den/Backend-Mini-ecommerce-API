const mongoose = require('mongoose');


const connectdatabase = ()=>{
  mongoose.connect(process.env.DB_URL).then((con)=>{
    console.log('MongoDb connected to Host '+ con.connection.host );
  }).catch((e)=>{
    console.log("MongoDb I s Not Connected "+e);
  })
}

module.exports = connectdatabase;