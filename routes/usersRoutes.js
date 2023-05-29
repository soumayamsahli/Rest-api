const express = require ("express");
const router = express.Router();
const user = require("../models/user");

//retur all users

router.get("/getUsers", (req,res) => {
    user.find()
    .then((data) => res.json(data))
    .catch((err) => res.status(500).json(err));
});

//add new user to the DB

router.post("/addUser", (req,res) => {
    const newUser = new user(req.body);
    newUser
    .save()
    .then((data) => res.json(data))
    .catch((err) => res.status(500).json(err));
});
 //edit user by id

 router.put("/updateUser/:userId", (req,res) => {
    user.findByIdAndUpdate(req.params.userId , req.body)
    .then((data) => res.json(data))
    .catch((err) => res.status(500).json(err));
 });

 //remove user by id

 router.delete("/deleteUser/:userId" , (req,res) => {
    user.findByIdAndRemove(req.params.userId)
    .then((data) => res.json(data))
    .catch((err) => res.status(500).json(err));
 });
 module.exports = router;