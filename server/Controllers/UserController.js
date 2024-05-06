const express = require('express');
const Model = require('../Models/Auth.js');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');


const Register = async (req, res) => {
    const { name, email, password } = req.body;
    try {
        const userExists = await Model.findOne({ email });
        if (userExists) {
            return res.status(400).json({ error: "User already Exists" });
        }
        const hashedPassword = await bcrypt.hash(password, 10);
        const newUser = await Model.create({ name, email, password: hashedPassword });
        return res.status(200).json({ msg: "Registered Now Login" });
    } catch (error) {
        return res.status(500).json({ error: error.message });
    }
};

const Login = async (req, res) => {
    const { email, password } = req.body;
    try {
        const user = await Model.findOne({ email });
        if (!user) {
            return res.status(400).json({ error: "Invalid Credentials" });
        }
        const passwordMatch = await bcrypt.compare(password, user.password);
        if (!passwordMatch) {
            return res.status(400).json({ error: "Invalid Credentials" });
        }
        const token = jwt.sign({ userId: user._id }, process.env.SECRET_KEY, { expiresIn: "3d" });
        return res.json({ msg: "Login successful", token });
    } catch (error) {
        console.log(error);
        return res.status(500).json({ error: "Server Error" });
    }
}




module.exports = { Register, Login };
