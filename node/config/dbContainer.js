const express = require('express')
const mongoose = require('mongoose')

const app = express()

const connectDbCont = async () => {
  try {
    const conn = await mongoose.connect(
        'mongodb://0.0.0.0:27017/docker-node-mongo',
        { useNewUrlParser: true }
      )
      .then(() => console.log('MongoDB CONTAINER Connected'))
      .catch(err => console.log(err));
    
      const Item = require('./models/Item');
    
    app.get('/', (req, res) => {
      Item.find()
        .then(items => res.render('index', { items }))
        .catch(err => res.status(404).json({ msg: 'No items found' }));
    });
    
    app.post('/item/add', (req, res) => {
      const newItem = new Item({
        name: req.body.name
      });
    
      newItem.save().then(item => res.redirect('/'));
    });

    console.log(`MongoDB Container Connected: ${conn.connection.host}`)
  } catch (err) {
    console.error(err)
    process.exit(1)
  }
}

module.exports = connectDbCont
