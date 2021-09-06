const express = require("express");
const morgan = require("morgan");
const path = require("path");
const { sequelize } = require("./models");

const port = process.env.PORT || 3006;

const app = express();

app.use(express.urlencoded({ extended: true })); //passing form data through to DB
app.use(express.json()); //passing json files through to DB

app.use(morgan("dev"));

app.set("view engine", "ejs"); // template engine
app.set("views", path.join(__dirname, "views")); // setting views directory
app.use(express.static(path.join(__dirname, "public"))); // static files directory

const indexRouter = require('./Routes/index.routes');
const userRouter = require('./Routes/user.routes');
const galleryRouter = require('./Routes/gallery.routes');
const studentRouter = require('./Routes/student.routes');


app.use('/', indexRouter);
app.use('/user', userRouter);
app.use('/gallery', galleryRouter);
app.use('/students', studentRouter);




app.listen(port, () => {
    sequelize.sync().then(() => {
      console.log(`Server running on ${port}`);
    });
});
  









