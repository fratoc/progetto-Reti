const express = require('express')
const path = require('path')
const dotenv = require('dotenv')
const mongoose = require('mongoose')
const morgan = require('morgan') //per login
const exphbs = require('express-handlebars')
const passport = require('passport')
const connectDB = require('./config/db')
const session = require('express-session')
const MongoStore = require('connect-mongo') //per aggiornare dashboard senza essere buttato alla '/'
const methodOverride = require('method-override')

// Load config
dotenv.config({ path: './config/config.env' })


// Passport config
require('./config/passport')(passport)


//mi connetto al database
connectDB()

//mi connetto al database container
connectDbCont()

const app = express()


// Body parser
app.use(express.urlencoded({ extended: false }))
app.use(express.json())



// Method override
app.use(
    methodOverride(function (req, res) {
      if (req.body && typeof req.body === 'object' && '_method' in req.body) {
        // look in urlencoded POST bodies and delete it
        let method = req.body._method
        delete req.body._method
        return method
      }
    })
  )



// Logging
if (process.env.NODE_ENV === 'development') {
    app.use(morgan('dev'))
  }




// Handlebars Helpers
const {
    formatDate,
    stripTags,
    truncate,
    editIcon,
    select
  } = require('./helpers/hbs')
const connectDbCont = require('./config/dbContainer')



// Handlebars
app.engine(
    '.hbs',
    exphbs.engine({
        helpers: {formatDate,stripTags,truncate,editIcon,select},
        defaultLayout: 'main',
        extname: '.hbs',
  })
 )
 app.set('view engine', '.hbs')



// Sessions
app.use(
    session({
      secret: 'keyboard cat',
      resave: false,
      saveUninitialized: false,
      store: MongoStore.create({mongoUrl: process.env.MONGO_URI,}),
    })
  )



// Passport middleware
app.use(passport.initialize())
app.use(passport.session())


// Set global var (per accesso alla variabile globale ../user)
app.use(function (req, res, next) {
    res.locals.user = req.user || null
    next()
  })



// Static folder
app.use(express.static(path.join(__dirname, 'public')))


// Routes
app.use('/', require('./routes/index'))
app.use('/auth', require('./routes/auth'))
app.use('/stories', require('./routes/stories'))
app.use('/calendar', require('./routes/calendar'))
app.use('/news', require('./routes/news'))
app.use('/news', require('./routes/about'))








/* hhttps */
/*
const server = https.createServer({
  key: fs.readFileSync('security/key.pem'),
  cert: fs.readFileSync('security/cert.pem')
}, app);

server.addListener('upgrade',(req, res, head) => console.log('UPGRADE:', req.url));
*/


const PORT = process.env.PORT || 3000

app.listen(PORT, console.log(`Server running in ${process.env.NODE_ENV} mode on port ${PORT}`))

//https://64a7dd3f873079.lhrtunnel.link