import path from 'path';
import express from 'express';
import dotenv from 'dotenv';
import cookieParser  from 'cookie-parser';
import connectDB from './config/db.js';
import userRoutes from './routes/user.routes.js'
import categoryRoutes from './routes/category.routes.js'
import productRoutes from './routes/product.route.js'
import orderRoutes from './routes/order.route.js'
import uploadRoutes from './routes/upload.route.js'

dotenv.config();

const port = process.env.PORT || 5000;

connectDB()

const app = express();
app.use(express.json());
app.use(express.urlencoded({extended : true}));
app.use(cookieParser());

app.use('/api/users',userRoutes);
app.use('/api/category',categoryRoutes);
app.use('/api/products',productRoutes);
app.use('/api/upload',uploadRoutes);
app.use('/api/orders',orderRoutes)

app.get("/api/config/paypal", (req, res) => {
    res.send({ clientId: process.env.PAYPAL_CLIENT_ID });
  });

const __dirname = path.resolve();
app.use("/uploads", express.static(path.join(__dirname + "/uploads")));

app.listen(port,()=>{
    console.log(`server is running on ${port}`)
})

