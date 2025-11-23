const express = require('express');
const router = express.Router();


const User = require('../Models/UserSchema')
const Movie = require('../Models/MovieSchema')
const Booking = require('../Models/BookingSchema')
const Screen = require('../Models/ScreenSchema')


const errorHandler = require('../Middlewares/errorMiddleware');
const authTokenHandler = require('../Middlewares/checkAuthToken');
const adminTokenHandler = require('../Middlewares/checkAdminToken');


function createResponse(ok, message, data) {
    return {
        ok,
        message,
        data,
    };
}

router.get('/test', async (req, res) => {
    res.json({
        message: "Movie api is working"
    })
})


// admin access
router.post('/createmovie', adminTokenHandler, async (req, res, next) => {
    try {
        const { title, description, portraitImgUrl, landscapeImgUrl, rating, genre, duration } = req.body;

        const newMovie = new Movie({ title, description, portraitImgUrl, landscapeImgUrl, rating, genre, duration })
        await newMovie.save();
        res.status(201).json({
            ok: true,
            message: "Movie added successfully"
        });
    }
    catch (err) {
        next(err); // Pass any errors to the error handling middleware
    }
})
router.post('/addcelebtomovie', adminTokenHandler, async (req, res, next) => {
    try {
        const { movieId, celebType, celebName, celebRole, celebImage } = req.body;
        const movie = await Movie.findById(movieId);
        if (!movie) {
            return res.status(404).json({
                ok: false,
                message: "Movie not found"
            });
        }
        const newCeleb = {
            celebType,
            celebName,
            celebRole,
            celebImage
        };
        if (celebType === "cast") {
            movie.cast.push(newCeleb);
        } else {
            movie.crew.push(newCeleb);
        }
        await movie.save();

        res.status(201).json({
            ok: true,
            message: "Celeb added successfully"
        });
    }
    catch (err) {
        next(err); // Pass any errors to the error handling middleware
    }
})
router.post('/createscreen', adminTokenHandler, async (req, res, next) => {
    try {
        const { name, location, seats, city, screenType } = req.body;
        const newScreen = new Screen({
            name,
            location,
            seats,
            city: city.toLowerCase(),
            screenType,
            movieSchedules: []
        });

        await newScreen.save();


        res.status(201).json({
            ok: true,
            message: "Screen added successfully"
        });
    }
    catch (err) {
        console.log(err);
        next(err); // Pass any errors to the error handling middleware
    }
})
router.post('/addmoviescheduletoscreen', adminTokenHandler, async (req, res, next) => {
    console.log("Inside addmoviescheduletoscreen")
    try {
        const { screenId, movieId, showTime, showDate } = req.body;
        const screen = await Screen.findById(screenId);
        if (!screen) {
            return res.status(404).json({
                ok: false,
                message: "Screen not found"
            });
        }

        const movie = await Movie.findById(movieId);
        if (!movie) {
            return res.status(404).json({
                ok: false,
                message: "Movie not found"
            });
        }

        screen.movieSchedules.push({
            movieId,
            showTime,
            notavailableseats: [],
            showDate
        });

        await screen.save();

        res.status(201).json({
            ok: true,
            message: "Movie schedule added successfully"
        });

    }
    catch (err) {
        next(err); // Pass any errors to the error handling middleware
    }
})


// user access
router.post('/bookticket', authTokenHandler, async (req, res, next) => {
    try {
        const { showTime, showDate, movieId, screenId, seats, totalPrice, paymentId, paymentType } = req.body;
        console.log(req.body);

        // You can create a function to verify payment id

        const screen = await Screen.findById(screenId);

        if (!screen) {
            return res.status(404).json({
                ok: false,
                message: "Theatre not found"
            });
        }



        const movieSchedule = screen.movieSchedules.find(schedule => {
            console.log(schedule);
            let showDate1 = new Date(schedule.showDate);
            let showDate2 = new Date(showDate);
            if (showDate1.getDay() === showDate2.getDay() &&
                showDate1.getMonth() === showDate2.getMonth() &&
                showDate1.getFullYear() === showDate2.getFullYear() &&
                schedule.showTime === showTime &&
                schedule.movieId == movieId) {
                return true;
            }
            return false;
        });

        if (!movieSchedule) {
            return res.status(404).json({
                ok: false,
                message: "Movie schedule not found"
            });
        }

        const user = await User.findById(req.userId);
        if (!user) {
            return res.status(404).json({
                ok: false,
                message: "User not found"
            });
        }
        console.log('before newBooking done');
        const newBooking = new Booking({ userId: req.userId, showTime, showDate, movieId, screenId, seats, totalPrice, paymentId, paymentType })
        await newBooking.save();
        console.log('newBooking done');



        movieSchedule.notAvailableSeats.push(...seats);
        await screen.save();
        console.log('screen saved');

        user.bookings.push(newBooking._id);
        await user.save();
        console.log('user saved');
        res.status(201).json({
            ok: true,
            message: "Booking successful"
        });

    }
    catch (err) {
        next(err); // Pass any errors to the error handling middleware
    }
})


router.get('/movies', async (req, res, next) => {
    try {
        const movies = await Movie.find();

        // Return the list of movies as JSON response
        res.status(200).json({
            ok: true,
            data: movies,
            message: 'Movies retrieved successfully'
        });
    }
    catch (err) {
        next(err); // Pass any errors to the error handling middleware
    }
})
router.get('/movies/:id', async (req, res, next) => {
    try {
        const movieId = req.params.id;
        const movie = await Movie.findById(movieId);
        if (!movie) {
            // If the movie is not found, return a 404 Not Found response
            return res.status(404).json({
                ok: false,
                message: 'Movie not found'
            });
        }

        res.status(200).json({
            ok: true,
            data: movie,
            message: 'Movie retrieved successfully'
        });
    }
    catch (err) {
        next(err); // Pass any errors to the error handling middleware
    }
})
router.get('/screensbycity/:city', async (req, res, next) => {
    const city = req.params.city.toLowerCase();

    try {
        const screens = await Screen.find({ city });
        if (!screens || screens.length === 0) {
            return res.status(404).json(createResponse(false, 'No screens found in the specified city', null));
        }

        res.status(200).json(createResponse(true, 'Screens retrieved successfully', screens));
    }
    catch (err) {
        next(err); // Pass any errors to the error handling middleware
    }
});
router.get('/screensbymovieschedule/:city/:date/:movieid', async (req, res, next) => {
    try {
        const city = req.params.city;
        const date = req.params.date;
        const movieId = req.params.movieid;

        // Retrieve screens for the specified city
        const screens = await Screen.find({ city });

        // Check if screens were found
        if (!screens || screens.length === 0) {
            return res.status(404).json(createResponse(false, 'No screens found in the specified city', null));
        }

        // Filter screens based on the movieId
        // const filteredScreens = screens.filter(screen =>
        //     screen.movieSchedules.some(schedule => schedule.movieId == movieId)
        // );


        let temp = []
        // Filter screens based on the showDate
        const filteredScreens = screens.forEach(screen => {
            // screen 

            screen.movieSchedules.forEach(schedule => {
                let showDate = new Date(schedule.showDate);
                let bodyDate = new Date(date);
                // console.log(showDate , bodyDate);
                if (showDate.getDay() === bodyDate.getDay() &&
                    showDate.getMonth() === bodyDate.getMonth() &&
                    showDate.getFullYear() === bodyDate.getFullYear() &&
                    schedule.movieId == movieId) {
                    temp.push(
                        screen
                    );
                }
            })
        }
        );

        console.log(temp);

        res.status(200).json(createResponse(true, 'Screens retrieved successfully', temp));

    } catch (err) {
        next(err); // Pass any errors to the error handling middleware
    }
});

router.get('/schedulebymovie/:screenid/:date/:movieid', async (req, res, next) => {
    const screenId = req.params.screenid;
    const date = req.params.date;
    const movieId = req.params.movieid;

    const screen = await Screen.findById(screenId);

    if (!screen) {
        return res.status(404).json(createResponse(false, 'Screen not found', null));
    }

    const movieSchedules = screen.movieSchedules.filter(schedule => {
        let showDate = new Date(schedule.showDate);
        let bodyDate = new Date(date);
        if (showDate.getDay() === bodyDate.getDay() &&
            showDate.getMonth() === bodyDate.getMonth() &&
            showDate.getFullYear() === bodyDate.getFullYear() &&
            schedule.movieId == movieId) {
            return true;
        }
        return false;
    });
    console.log(movieSchedules)

    if (!movieSchedules) {
        return res.status(404).json(createResponse(false, 'Movie schedule not found', null));
    }

    res.status(200).json(createResponse(true, 'Movie schedule retrieved successfully', {
        screen,
        movieSchedulesforDate: movieSchedules
    }));

});


router.get('/getuserbookings' , authTokenHandler , async (req , res , next) => {
    try {
        const user = await User.findById(req.userId).populate('bookings');
        if(!user){
            return res.status(404).json(createResponse(false, 'User not found', null));
        }

        let bookings = [];
        // user.bookings.forEach(async booking => {
        //     let bookingobj = await Booking.findById(booking._id);
        //     bookings.push(bookingobj);
        // })

        for(let i = 0 ; i < user.bookings.length ; i++){
            let bookingobj = await Booking.findById(user.bookings[i]._id);
            bookings.push(bookingobj);
        }

        res.status(200).json(createResponse(true, 'User bookings retrieved successfully', bookings));
        // res.status(200).json(createResponse(true, 'User bookings retrieved successfully', user.bookings));
    } catch (err) {
        next(err); // Pass any errors to the error handling middleware
    }
})

router.get('/getuserbookings/:id' , authTokenHandler , async (req , res , next) => {
    try {
        const bookingId = req.params.id;
        const booking = await Booking.findById(bookingId);

        if(!booking){
            return res.status(404).json(createResponse(false, 'Booking not found', null));
        }

        res.status(200).json(createResponse(true, 'Booking retrieved successfully', booking));
    } catch (err) {
        next(err); // Pass any errors to the error handling middleware
    }
})
// 💳 Razorpay Payment Route
const Razorpay = require("razorpay");


const razorpayInstance = new Razorpay({
    key_id: process.env.RAZORPAY_KEY_ID,
    key_secret: process.env.RAZORPAY_SECRET_KEY
});

console.log("🗝️ Razorpay Loaded:", process.env.RAZORPAY_KEY_ID, process.env.RAZORPAY_SECRET_KEY ? "✅ Secret Found" : "❌ Missing Secret");

router.post("/create-order", async (req, res) => {
    try {
        const { amount } = req.body;
        console.log("🧾 Received amount from frontend:", amount);


        if (!amount) {
            return res.status(400).json({ success: false, message: "Amount is required" });
        }

        const options = {
            amount: amount * 100, // amount in paise
            currency: "INR",
            receipt: `receipt_${Date.now()}`,
        };

        const order = await razorpayInstance.orders.create(options);
        return res.json(order);
    } catch (error) {
        console.error("Error creating order:", error);
        return res.status(500).json({ success: false, message: "Error creating Razorpay order" });
    }
});
// ===================== 🎟️ Generate Ticket & Send Email =====================
const nodemailer = require("nodemailer");
const QRCode = require("qrcode");
const PDFDocument = require("pdfkit");
const fs = require("fs");
const path = require("path");

// inside Routes/Movie.js - replace current /generate-ticket route with this improved version

router.post("/generate-ticket", async (req, res) => {
  try {
    const { name, email, phone, movieName, showTime, seats, totalPrice } = req.body;

    // 1️⃣ Generate QR Code content
    const qrData = `Name: ${name}\nMovie: ${movieName}\nShow Time: ${showTime}\nSeats: ${seats.join(", ")}\nAmount: ₹${totalPrice}`;
    const qrImage = await QRCode.toDataURL(qrData);

    // 2️⃣ Generate PDF ticket (keep same behaviour)
    const pdfFilename = `${Date.now()}_${movieName.replace(/\s+/g, '_')}_${name.replace(/\s+/g,'_')}.pdf`;
    const pdfPath = path.join(__dirname, `../tickets/${pdfFilename}`);
    const doc = new PDFDocument();
    const writeStream = fs.createWriteStream(pdfPath);
    doc.pipe(writeStream);

    doc
      .fontSize(26)
      .fillColor("#FF4B2B")
      .text("🎬 Movie Ticket", { align: "center" });
    doc.moveDown();

    doc
      .fontSize(18)
      .fillColor("#333")
      .text(`Movie: ${movieName}`)
      .moveDown(0.5)
      .text(`Name: ${name}`)
      .moveDown(0.5)
      .text(`Seats: ${seats.join(", ")}`)
      .moveDown(0.5)
      .text(`Show Time: ${showTime}`)
      .moveDown(0.5)
      .text(`Amount Paid: ₹${totalPrice}`)
      .moveDown(1);

    const qrBuffer = Buffer.from(qrImage.split(",")[1], "base64");
    doc.image(qrBuffer, { fit: [150, 150], align: "center" });
    doc.moveDown(1);

    doc.fontSize(14).fillColor("#666").text("Scan this QR at entry gate", { align: "center" });
    doc.end();

    // Wait till file is written
    await new Promise((resolve) => writeStream.on("finish", resolve));

    // 3️⃣ Send Email with ticket (unchanged)
    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS,
      },
    });

    await transporter.sendMail({
      from: `"Movie Tickets" <${process.env.EMAIL_USER}>`,
      to: email,
      subject: `🎟️ Your Ticket for ${movieName}`,
      text: `Hey ${name}, your booking for ${movieName} is confirmed!`,
      html: `
        <div style="font-family: Arial; color:#333">
          <h2>Booking Confirmed ✅</h2>
          <p><b>Movie:</b> ${movieName}</p>
          <p><b>Seats:</b> ${seats.join(", ")}</p>
          <p><b>Show Time:</b> ${showTime}</p>
          <p><b>Amount Paid:</b> ₹${totalPrice}</p>
          <br/>
          <p>Your ticket PDF is attached below.</p>
        </div>
      `,
      attachments: [
        {
          filename: pdfFilename,
          path: pdfPath,
        },
      ],
    });

    // 4️⃣ Return JSON including qrImage (dataURL) and pdfUrl so frontend can show immediately
    const pdfUrl = `/tickets/${pdfFilename}`; // served statically by index.js (see next patch)
    res.json({
      success: true,
      message: "Ticket generated and emailed successfully!",
      data: {
        qrImage,    // data:image/png;base64,...
        pdfUrl
      }
    });
  } catch (error) {
    console.error("Ticket generation error:", error);
    res.status(500).json({
      success: false,
      message: "Error generating ticket",
      error: error.message || error
    });
  }
});





// // 🎟️ Get seat prices
// router.get("/seat-prices", (req, res) => {
//   const prices = {
//     platinum: 500,
//     gold: 300,
//     silver: 200,
//   };
//   res.json(prices);
// });




router.use(errorHandler)

module.exports = router;