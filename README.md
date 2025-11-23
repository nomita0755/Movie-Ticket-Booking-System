## 📖 Movie Ticket Booking System
---
A full-stack MERN (MongoDB, Express, React, Node.js) application for browsing movies, selecting seats, and booking movie tickets online. This system includes complete frontend and backend projects, designed for real-world functionality with clean UI and fully functional APIs.

---

## 🚀 Features

🎥 User Features

- Browse all movies currently available
- View movie details (cast, duration, genre, description)
- Check available showtimes
- Choose seats using an interactive seat layout
- Book tickets in real-time
- View booking confirmation
- Fully responsive UI (mobile + tablet + desktop)

🛠 Admin / System Features

- Add, update, or delete movies
- Manage showtimes for each movie
- Track occupied & available seats
- Manage bookings
- Integrated backend APIs for all operations

---

## 🛠️ Tech Stack

**Frontend (React):**
- React.js (Functional Components + Hooks)
- React Router DOM
- Axios for API calls
- TailwindCSS 
- State Management: useState, useEffect
- Component-based architecture

- **Backend (Node.js + Express):**

- Node.js
- Express.js
- MongoDB + Mongoose ODM
- JWT Authentication (if implemented)
- REST API Architecture
- CORS Enabled
- Error-handling Middleware

---

## 🔌 API Endpoints (Overview)
| Method | Route             | Description         |
| ------ | ----------------- | ------------------- |
| GET    | `/api/movies`     | Get all movies      |
| GET    | `/api/movies/:id` | Get movie by ID     |
| POST   | `/api/movies`     | Add a movie (admin) |
| PUT    | `/api/movies/:id` | Update movie        |
| DELETE | `/api/movies/:id` | Delete movie        |

| Method | Route                 | Description               |
| ------ | --------------------- | ------------------------- |
| GET    | `/api/shows/:movieId` | Get showtimes for a movie |
| POST   | `/api/shows`          | Create showtime           |
| PUT    | `/api/shows/:id`      | Update showtime           |
| DELETE | `/api/shows/:id`      | Delete showtime           |

| Method | Route               | Description         |
| ------ | ------------------- | ------------------- |
| POST   | `/api/bookings`     | Book seats          |
| GET    | `/api/bookings/:id` | Get booking details |

## 💻 How to Run the Project Locally
1️⃣ Clone the Repository
- git clone https://github.com/nomita0755/Movie-Ticket-Booking-System.git
- cd Movie-Ticket-Booking-System

🎨 2️⃣ Setup & Run Frontend
- cd movie-ticket-booking-frontend
- npm install
- npm run dev

⚙️ 3️⃣ Setup & Run Backend
- cd movie-ticket-booking-backend
- npm install
- node index.js

## 📁 Project Structure 


```bash
Movie-Ticket-Booking-System/
│
├── movie-ticket-booking-backend/     
│   ├── Middlewares/
│   │   ├── checkAdminToken.js
│   │   ├── checkAuthToken.js
│   │   └── errorMiddleware.js
│   ├── Models/
│   │   ├── AdminSchema.js
│   │   ├── BookingSchema.js
│   │   ├── MovieSchema.js
│   │   ├── ScreenSchema.js
│   │   └── UserSchema.js
│   ├── Routes/
│   │   ├── Admin.js
│   │   ├── Auth.js
│   │   ├── imageUploadRoutes.js
│   │   ├── Movie.js
│   │   └── paymentRoutes.js
│   ├── tickets/                      # auto-generated ticket PDFs
│   ├── db.js
│   ├── index.js
│   ├── package.json
│   └── .env
│
└── movie-ticket-booking-frontend/    
    ├── public/
    │   ├── globe.svg
    │   ├── next.svg
    │   └── logo.jpeg
    ├── src/
    │   ├── app/
    │   │   ├── [cityname]/movies/[moviename]/buytickets/[screen]/page.tsx
    │   │   ├── auth/signin/page.tsx
    │   │   ├── auth/signup/page.tsx
    │   │   ├── globals.css
    │   │   ├── layout.tsx
    │   │   └── page.tsx
    │   ├── components/
    │   │   ├── CelebCard/
    │   │   ├── HomeSlider/
    │   │   └── MovieCarousel/
    │   ├── popups/location/
    │   ├── types/types.tsx
    │   └── assets/
    ├── next.config.ts
    ├── tsconfig.json
    ├── package.json
    └── .env.local

```

---
