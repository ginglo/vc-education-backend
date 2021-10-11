const express = require('express');
const app = express();

const mongoose = require('mongoose');
const cors = require('cors');
app.use(cors());

app.use((req, resp, next) => {
  resp.header('Access-Control-Allow-Origin', '*');
  resp.header('Access-Control-Allow-Credentials', 'true');
  resp.header('Access-Control-Allow-Methods', 'GET', 'POST', 'PUT', 'DELETE', 'OPTIONS');
  resp.header('Access-Control-Allow-Headers', 'Origin,X-Requested-With,Content-Type,Accept,Authorization');
  next();
});
app.use(express.json({ limit: '50mb' }));
app.use(express.urlencoded({ extended: true, limit: '50mb' }));

//mongoose.Promise = global.Promise;
//mongoose.connect('mongodb://localhost:27017/educVideo',{ useNewUrlParser: true });

const videoRoute = require('./Routes/RoutesVideo');

app.use('/api', videoRoute);

const PORT = process.env.PORT || 3000;
app.listen(PORT,()=>{
	console.log(`this server is running at the port ${PORT}`);
});