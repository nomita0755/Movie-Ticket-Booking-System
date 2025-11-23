const express = require('express');
const app = express();

// ✅ Load environment variables first (must be before other imports)
require('dotenv').config();
require('./db');

const bodyParser = require('body-parser');
const cors = require('cors');
const PORT = 8000;
const cookieParser = require('cookie-parser');

const authRoutes = require('./Routes/Auth');
const adminRoutes = require('./Routes/Admin');
const movieRoutes = require('./Routes/Movie');
const imageuploadRoutes = require('./Routes/imageUploadRoutes');
const paymentRoutes = require('./Routes/paymentRoutes');

app.use(bodyParser.json());
const allowedOrigins = ['http://localhost:3000', 'http://localhost:3001']; // Add more origins as needed
     
app.use(
    cors({
        origin: function (origin, callback) {
            if (!origin || allowedOrigins.includes(origin)) {
                callback(null, true);
            } else {
                callback(new Error('Not allowed by CORS'));
            }
        },
        credentials: true, // Allow credentials
    })
);

app.use(cookieParser());

app.use('/auth', authRoutes);
app.use('/admin', adminRoutes);
app.use('/movie', movieRoutes);
app.use('/image', imageuploadRoutes);
app.use('/payment', paymentRoutes);
const path = require('path');

// serve generated ticket PDFs (make sure folder exists: ./tickets)
app.use('/tickets', express.static(path.join(__dirname, 'tickets')));


app.get('/', (req, res) => {
    res.json({ message: 'The API is working' });
});

app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
    console.log("Razorpay Key:", process.env.RAZORPAY_KEY_ID); // ✅ Debug line
});
