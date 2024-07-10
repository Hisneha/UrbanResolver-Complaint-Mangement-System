const express = require('express')
const router = express.Router()
const User = require("../models/User")
const { body, validationResult } = require('express-validator');
const bcrypt =require("bcryptjs");
const jwt = require("jsonwebtoken");
const jwtSecret ="MynameisSnehalSudhirSuryawasnhi"

router.post("/createuser",
    body('email').isEmail(),
    body('password', 'Invalid Password').isLength({ min: 5 }),
    body('contact', 'Contact should be a valid phone number').isMobilePhone('any', { strictMode: false }),
    body('contact', 'Contact should have exactly 10 digits').isLength({ min: 10, max: 10 }),
    body('pincode', 'Enter 6 digit Pincode').isNumeric().isLength({ min: 6, max: 6 }),
    async (req, res) => {

        const errors = validationResult(req);

        if (!errors.isEmpty()) {
            return res.status(400).json({ errors: errors.array() });
        }

        const salt = await bcrypt.genSalt(10);
        let setPassword = await bcrypt.hash(req.body.password,salt)

        try {
            await User.create({
                name: req.body.name,
                password: setPassword,
                email: req.body.email,
                location: req.body.location,
                pincode: req.body.pincode,
                contact: req.body.contact,
                role: req.body.role
            })

            res.json({ success: true });
        } catch (error) {
            console.log(error)
            res.json({ success: false })
        }
    })


router.post("/loginuser",
    body('email').isEmail(),
    body('password', 'Invalid Password').isLength({ min: 5 }),
    async (req, res) => {

        const errors = validationResult(req);

        if (!errors.isEmpty()) {
            return res.status(400).json({ errors: errors.array() });
        }

        let email = req.body.email;


        try {
            let userData = await User.findOne({ email });
            if (!userData) {
                return res.status(400).json({ errors: "Try logging with correct credentials" })
            }
            const pwdcomare = await bcrypt.compare(req.body.password,userData.password)

            if (!pwdcomare) {
                return res.status(400).json({ errors: "Try logging with correct credentials" })
            }

            const data={
                user:{
                id:userData.id
                }
            }

            const authToken=jwt.sign({ id: userData._id },jwtSecret)
            return res.json({ success: true,authToken ,username: userData.name,userId:userData._id,role:userData.role})

        } catch (error) {
            console.log(error)
            res.json({ success: false })
        }
    })

module.exports = router;