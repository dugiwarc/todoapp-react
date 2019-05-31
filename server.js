const express = require("express");
const connectDB = require("./config/db");
const cookieParser = require("cookie-parser");
const app = express();

// Connect Database
connectDB();

// Init Middleware
app.use(express.json({ extended: false }));
app.use(cookieParser());

app.get("/", (req, res) => {
  res.send("API RUNNING");
});

// Define routes
app.use("/api/users", require("./routes/api/users"));
app.use("/api/todos", require("./routes/api/todos"));

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => console.log(`Started server on port ${PORT}`));
