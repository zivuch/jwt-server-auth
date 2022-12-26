import express from 'express';
import cookieParser from 'cookie-parser';
import cors from 'cors';
import dotenv from 'dotenv';
import db from './config/elephantsql.js'
import users_router from './routes/Users.js'


dotenv.config();
const app = express();

app.use(cors());
app.use(cookieParser());
app.use(express.json());
app.use(express.urlencoded({extended:true}));
app.use(users_router);

app.listen(process.env.PORT||8080, ()=>{
  console.log(`run on ${process.env.PORT||8080}`);
})

try {
  await db.authenticate();
  console.log('Database conneted... ');
}
catch(e){
  console.log(e);
}
