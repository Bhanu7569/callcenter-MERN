const express = require('express');
const Model = require('../Models/userModel.js');

const AddContact = async (req, res) => {
    const { name, email, Phone, Address } = req.body; // Corrected field name to Phone
    try {
        const user = await Model.create({ name, email, Phone, Address }); // Corrected field name to Phone
        return res.status(200).json(user);
    } catch (error) {
        console.error(error);
        return res.status(500).json({ message: 'Internal server error' }); // Sending a generic error response
    }
}

const Getcontact = async(req, res)=>{
    try {
        const user = await Model.find();
        return res.json(user)
    } catch (error) {
        console.log(error)
    }
}

const Deletecontact = async (req, res) => {
    try {
        const userId = req.params.id;
        const user = await Model.findByIdAndDelete(userId);
        if (!user) {
            return res.status(404).json({ error: "User not found" });
        }
        return res.json({ msg: "Account Deleted" });
    } catch (error) {
        console.log(error);
        return res.status(500).json({ error: "Internal Server Error" });
    }
}


module.exports = { AddContact, Getcontact, Deletecontact };
