const express = require('express');
const bodyParser = require('body-parser');
const { connectDb } = require('./db.js'); // Import connectDb function

//local imports
const blogRoutes = require('./controllers/blog.controller.js');
const { errorHandler } = require('./middlewares');
const app = express();
//middleware
app.use(bodyParser.json());
app.use('/api/blogs', blogRoutes);
app.use(errorHandler);

connectDb() 
    .then(() => {
        console.log('db connection succeeded');
        app.listen(3000, () => console.log('server started at 3000'));
    })
    .catch(err => console.error(err)); 
