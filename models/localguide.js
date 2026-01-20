const mongoose = require("mongoose");

const LocalGuideSchema = new mongoose.Schema({
  name: { type: String, required: true },
  expertise: { type: String, required: true },
  location: { type: String, required: true },
  languages: { type: String, required: true },
  profile: { type: String, required: true },
  contact: { type: String, required: true },
  email: { type: String, required: true },
  availability: { type: String, required: true },
});

module.exports = mongoose.model("LocalGuide", LocalGuideSchema);
const express = require("express");
const router = express.Router();
const LocalGuide = require("./models/LocalGuide");

// POST route to handle guide registration
router.post("/submit-guide-registration", async (req, res) => {
    try {
        const guide = new LocalGuide(req.body);
        await guide.save();
        res.status(201).send({ message: "Guide registered successfully!" });
    } catch (error) {
        res.status(400).send({ message: "Error registering guide", error });
    }
});

module.exports = router;
