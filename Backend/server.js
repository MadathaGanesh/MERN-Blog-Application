//  sets up the Express server including routes and middlewares etc
const express = require("express");
const dotenv = require("dotenv");
const cors = require("cors");
const connectDB = require("./Config/db");
const postRoutes = require("./Routes/postRoutes");
const errorHandler = require("./Middleware/errorHandler");
const mongoose = require("mongoose");

dotenv.config();

connectDB();

const app = express();
app.use(cors());
app.use(express.json());

app.use("/api", postRoutes);

app.use(errorHandler);

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => console.log(`server running on port ${PORT}`));
mongoose
  .connect(process.env.MONGO_URI)
  .then(() => console.log("MongoDB connected successfully!"))
  .catch((error) => console.log(error));
