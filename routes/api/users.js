const express = require("express");
const router = express.Router();
const middleware = require("../../middleware/middleware");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const config = require("config");

const User = require("../../models/User");

// @router GET api/users/auth
// @desc Test route
// @access Public
// router.get("/auth", middleware, async (req, res) => {
//   console.log("AUTH ROUTE", user);
//   try {
//     let user = await User.findOne({ _id: req.params.id }).select("-password");
//     if (user) {
//       return res.status(200).json({ user });
//     }
//   } catch (err) {
//     console.log("AUTH ROUTER");
//     res.status(500).send("Server error");
//   }
// });

// @router  POST api/users/login
// @desc    Login user & get token
// @access  Public
router.post("/login", async (req, res) => {
  const { email, password } = req.body;
  try {
    let user = await User.findOne({ email });
    if (!user) {
      return res.status(400).json({ msg: "Invalid credentials" });
    }

    const isMatch = await bcrypt.compare(password, user.password);

    if (!isMatch) {
      return res.status(400).json({ errors: [{ msg: "Invalid credentials" }] });
    }

    const payload = {
      user: {
        id: user.id
      }
    };

    jwt.sign(
      payload,
      config.get("jwtSecret"),
      { expiresIn: 36000 },
      (err, token) => {
        if (err) throw err;
        res
          .cookie("token", token, { httpOnly: true })
          .status(200)
          .json({ token });
      }
    );
  } catch (err) {
    res.status(500).send("Server error");
  }
});

// @router POST api/users/register
// @desc Register user
// @access Public
router.post("/register", async (req, res) => {
  const { email, password } = req.body;

  try {
    let user = await User.findOne({ email });
    if (user) {
      return res.status(400).json({ errors: [{ msg: "User already exists" }] });
    }

    user = new User({
      email,
      password
    });

    const salt = await bcrypt.genSalt(10);

    user.password = await bcrypt.hash(password, salt);

    await user.save();

    const payload = {
      user: {
        id: user.id
      }
    };

    jwt.sign(
      payload,
      config.get("jwtSecret"),
      { expiresIn: 36000 },
      (err, token) => {
        if (err) throw err;
        res.json({ token });
      }
    );
  } catch (err) {
    res.status(500).send("Server error");
  }
});

router.get("/hello", (req, res) => res.send("HEllo"));

// @router GET api/users/:id
// @desc Current logged in user
// @access Private
router.get("/:id", middleware, async (req, res) => {
  try {
    let user = await User.findOne({ _id: req.params.id });
    if (user) {
      return res.status(200).json({ user });
    }
  } catch (err) {
    res.status(500).send("Server error");
  }
});

module.exports = router;
