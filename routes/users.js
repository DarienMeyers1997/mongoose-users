var express = require("express");
var router = express.Router();
const User = require("../model/Users");

/* GET users listing. */
router.get("/", function (req, res, next) {
  res.send("respond with a resource");
});

router.get("/all-users", async (req, res) => {
  try {
    const allUsers = await User.find({});
    res.status(200).json({ success: true, data: allUsers });
  } catch (error) {
    res.status(500).json({ success: false, message: error.message });
  }
});

router.get("/single-user/:email", async (req, res) => {
  try {
    const email = req.params.email;
    const user = await User.findOne({ email: email });
    if (!user)
      return res
        .status(400)
        .json({ success: false, message: "user not found" });
    res.status(200).json({ success: true, data: user });
  } catch (error) {
    console.log(error);
    res.status(500).json({ success: false, message: error.message });
  }
});

router.get("/all-user-name/", async (req, res) => {
  try {
    /*
    makes the search more dynamic
    const users = await User.find({ name: { $regex: new RegExp(name, "i")}})

    */
    const name = req.params.name;
    const user = await User.find({ name: name });
    res.status(200).json({ success: true, data: user });
    if (!user)
      return res
        .status(400)
        .json({ success: false, message: "no users with that name" });
    res.status(200).json({ success: true, data: user });
  } catch (error) {
    console.log(error);
    res.status(500).json({ success: false, message: error.message });
  }
});

router.post("/new-user", async (req, res) => {
  try {
    const { name, email, password, phone } = req.body;
    const user = {
      name: name,
      email: email,
      password: password,
      phone: phone,
    };
    const newUser = await new User(user);
    const saveUser = await newUser.save();
    res.status(200).json({ success: true, data: saveUser });
  } catch (error) {
    res.status(500).json({ success: false, message: error.message });
  }
});

router.put("/update-user/:id", async (req, res) => {
  try {
    const updateUser = await User.findOneAndUpdate(
      { _id: req.params.id },
      req.body
    );
    if (!updateUser)
      return res
        .status(400)
        .json({ success: false, message: "user not found" });
    res.status(200).json({ success: true, data: updateUser });
  } catch (error) {
    res.status(500).json({ success: false, message: error.message });
  }
});

router.delete("/delete-user/:id", async (req, res) => {
  try {
    const deleteUser = await User.findByIdAndDelete({ _id: req.params.id });
    if (!deleteUser)
      return res.status(400).json({ success: false, data: deleteUser });
    res.status(200).json({ success: true, data: deleteUser });
  } catch (error) {
    res.status(500).json({ success: false, message: error.message });
  }
});

module.exports = router;
