const express=require("express");
var morgan = require('morgan');
const cookiesParser=require("cookie-parser");
const fileUpload=require("express-fileupload");
const swaggerUi=require("swagger-ui-express");
const YAML=require("yamljs");
const swaggerDocument=YAML.load('./swagger.yaml');
require("dotenv").config();

const app=express();
// for swagger documentation
app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerDocument));
//regular middleware
app.use(express.json());
app.use(express.urlencoded({extended:true}));

// cookies and file middleware
app.use(cookiesParser());
app.use(fileUpload());
// import all routes here
const home=require('./routers/Home');
const User=require('./routers/User');

// morgan middleware
app.use(morgan('tiny'))
// router middleware
app.use('/api/v1',home); 
app.use('/api/v1',User);

module.exports=app