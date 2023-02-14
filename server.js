const exphbs = require('express-handlebars');
const express = require('express');
const session = require('express-session');

const sequelize = require('./config/connection');

const routes = require('./controllers');
const helpers = require('./views/utils/helpers');
//const SequelizeStore = require('connect-session-sequelize')(session.Store);

const app = express();
const PORT = process.env.PORT || 3001;
const hbs = exphbs.create({ helpers });

 const sess = {
     secret: 'secret',
     cookie: {
         httpOnly: true,
         secure: false,
         sameSite: 'strict',
     },
     resave: false,
     saveUninitialized: true,
     store: new SequelizeStore({
         db: sequelize
     })
 };

app.use(session(sess));
app.engine('handlebars', hbs.engine);
app.set('view engine', 'handlebars');

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use(routes);


sequelize.sync({ force: true }).then(() => {

  app.listen(PORT, () => console.log('Now listening'));
//});