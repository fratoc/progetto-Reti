const mongoose = require('mongoose')

const connectDbCont = async () => {
  try {
    const conn = await mongoose.connect(
        'mongodb://0.0.0.0:27017/docker-node-mongo',
        { useNewUrlParser: true }
      )
      .then(() => console.log('MongoDB CONTAINER Connected'))
      .catch(err => console.log(err));
    
      

    console.log(`MongoDB Container Connected: ${conn.connection.host}`)
  } catch (err) {
    console.error(err)
    process.exit(1)
  }
}

module.exports = connectDbCont
