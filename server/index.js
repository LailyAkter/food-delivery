import express from 'express';
import bodyParser from "body-parser";
import cors from 'cors';
import mongoose from 'mongoose';
import dotenv from 'dotenv';
import AuthRoutes from './Routers/AuthRoutes.js'
import UserRoutes from './Routers/UserRoutes.js'
import ChatRoutes from './Routers/ChatRoutes.js'
import MessageRoutes from './Routers/MessageRoutes.js'

const app = express();

app.use(bodyParser.json({ limit: "30mb", extended: true }))
app.use(bodyParser.urlencoded({ limit: "30mb", extended: true }))

// app.use(cors());
dotenv.config();

// connect mongoose
// mongoose.set('strictQuery', false);
mongoose
  .connect("mongodb+srv://laily:laily255370@cluster0.0ydxqdi.mongodb.net/food-delivery?retryWrites=true&w=majority", {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() =>
    app.listen(process.env.PORT, () =>
      console.log(`Listening at ${process.env.PORT}`)
    )
  )
  .catch((error) => console.log(error));


// Route Define
app.use("/api",AuthRoutes);
app.use("/api",UserRoutes);

app.use('/api/chat',ChatRoutes)
app.use('/api/message',MessageRoutes)
