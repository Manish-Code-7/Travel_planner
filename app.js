// Import required modules
const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const cors = require('cors');

// Initialize the app
const app = express();
const PORT = 3000;

// Middleware
app.use(bodyParser.urlencoded({ extended: true })); // Handle form submissions
app.use(bodyParser.json());
app.use(cors());

// Serve static files from the public directory
app.use(express.static('public'));

// MongoDB connection
mongoose.connect('mongodb://localhost:27017/localGuideDB', {
    useNewUrlParser: true,
    useUnifiedTopology: true
})
.then(() => console.log('MongoDB connected successfully.'))
.catch(err => console.error('MongoDB connection error:', err));

// Define a schema for the guide
const guideSchema = new mongoose.Schema({
    name: { type: String, required: true },
    expertise: { type: String, required: true },
    location: { type: String, required: true },
    languages: { type: String, required: true },
    profile: { type: String, required: true },
    contact: { type: String, required: true },
    email: { type: String, required: true },
    availability: { type: String, required: true }
});

// Create a model from the schema
const Guide = mongoose.model('Guide', guideSchema);

// API endpoint to handle form submissions
app.post('/submit-guide-registration', async (req, res) => {
    try {
        const newGuide = new Guide(req.body);
        await newGuide.save();
        res.status(201).json({ message: 'Guide registered successfully!' });
    } catch (error) {
        res.status(400).json({ message: 'Error registering guide', error });
    }
});

// Start the server
app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});
