const path = require("path");

const Course = require("./models/course");

const express = require("express");
const bodyParser = require("body-parser");
const courseController = require("./routes/courses.router");
const adminRoutes = require("./routes/admin.router");

const cors = require("cors");
const adminUnitRoutes = require("./routes/admin.units.router");

const authRoutes = require("./routes/user.auth");

const ejsMate = require("ejs-mate");
const methodOverride = require("method-override");

const helmet = require("helmet");

require("dotenv").config();

const User = require("./models/user");

const app = express();

const { PORT, MONGODB_URI, NODE_ENV, ORIGIN } = require("./config/config");
const { API_ENDPOINT_NOT_FOUND_ERR, SERVER_ERR } = require("./config/error");

app.engine("ejs", ejsMate);
app.set("view engine", "ejs");
app.set("views", "views");

const { default: mongoose } = require("mongoose");

app.use(helmet());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(methodOverride("_method"));
app.use(
  cors({
    credentials: true,
    origin: ORIGIN,
    optionsSuccessStatus: 200,
  })
);

app.use((req, res, next) => {
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader("Access-Control-Allow-Methods", "GET,POST,PUT,PATCH,DELETE");
  res.setHeader("Access-Control-Allow-Headers", "Content-Type, Authorization");
  next();
});

// log in development environment

if (NODE_ENV === "development") {
  const morgan = require("morgan");
  app.use(morgan("dev"));
}

app.use("/admin", adminRoutes);
app.use("/admin", adminUnitRoutes);
app.use("/api/v1/course", courseController);
app.use("/api/v1/auth", authRoutes);

// app.use("*", (req, res, next) => {
//   const error = {
//     status: 404,
//     message: API_ENDPOINT_NOT_FOUND_ERR,
//   };
//   next(error);
// });

app.use((err, req, res, next) => {
  console.log(err);
  const status = err.status || 500;
  const message = err.message || SERVER_ERR;
  const data = err.data || null;
  res.status(status).json({
    type: "error",
    message,
    data,
  });
});

mongoose
  .connect(
    process.env.MONGO_URI
  )
  .then((result) => {
    Course.findOne().then((user) => {
      if (!user) {
        const user = new Course({
          title: "Maths",
          isPaid: "true",
          description: "Discrete maths",
          creatorName: "Abhay",
          coursePrice: "1000",
          avgRating: "4",
          totalReview: "100",
          totalPurchases: "2000",
          totalLikes: "500",
          UnitName: "discrete maths",
          UserName: "Aman",
          lessonsCompleted: "10",
          quote: "maths is e",
          totalArticles: " 100",
          totalResources: "100",
          totalVideoLessons: "100",
        });
        user.save();
      }
    });

    console.log("Database Connected!!");
    app.listen(PORT, () => {
      console.log("lets goo");
    });
  })
  .catch((err) => {
    console.log(err);
  });
