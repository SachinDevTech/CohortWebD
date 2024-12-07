const express = require('express')
const router = express.Router();
const User = require('../models/userModel');

//routes

//CRUD Operations

//View/Read

router.get('/users', async(req,res) => {
    try {
        const users = await User.find();
        res.status(200).json(users);
    }
    catch(err) {
        res.status(500).json({
            success:false,
            message: err.message
        })
    }
})

//Create

router.post('/users', async(req,res) => {
    console.log("Received request for POST method")
    try{
        const {name, age, weight} = req.body;
        const newUser = new User({name,age,weight});
        await newUser.save();
        res.status(200).json({
            success:true,
            user: newUser
        })
    }
    catch(err) {
        res.status(500).json({
            success:false,
            message: err.message
        })
    }
    
})

//Update

router.put('/users/:id', async(req,res) => {
    const {id} = req.params;
    const {name, age, weight} = req.body;

    try{
        const updatedUser = await User.findByIdAndUpdate(id, {name,age,weight});

        if(!updatedUser) {
            res.json({
                message: "User Not found"
            })
        }
        //but if you have updated the user successfully
        res.status(200).json({
            success:true,
            user:updatedUser
        })
    }
    catch(err) {
        res.status(500).json({
            success:false,
            message: err.message
        })
    }

})


//delete -> localhost:3000/api/users/671bbad6c75b6d67ec7e72ca
router.delete('/users/:id', async(req,res) => {
    const {id} = req.params;

    try{
        const deletedUser  = await User.findByIdAndDelete(id);

        if(!deletedUser) {
            res.json({
                message: "User not found"
            })
        }
        //if user found and deleted successfully
        res.status(200).json({
            success:true,
            user: deletedUser
        })

    }catch(err) {
        res.status(500).json({
            success:false,
            message: err.message
        })
    }
})




module.exports = router;