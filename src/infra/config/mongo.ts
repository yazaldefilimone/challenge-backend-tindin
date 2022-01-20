import mongoose = require('mongoose');
//import { env } from '@/shared/env';

mongoose.connect("mongodb://localhost:27017/db", 
  {
    useNewUrlParser:true,
    useUnifiedTopology:true,
    useFindAndModify:false
    
  },() => console.log('connect db mongo!!'));

