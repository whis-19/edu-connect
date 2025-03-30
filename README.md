# 🎓 EduConnect Pakistan – MERN Stack Application

**EduConnect Pakistan** is an all-in-one online platform tailored for university students, tutors, and administrators. Built using the **MERN stack**, it streamlines session bookings, review sharing, and centralized administrative tasks.

---

## 🔗 Tech Stack

| Layer         | Technology                       |
|---------------|----------------------------------|
| Frontend      | React (Vite), Axios, CSS         |
| Backend       | Node.js, Express.js              |
| Database      | MongoDB (Mongoose)               |
| Authentication| JWT (JSON Web Tokens)            |

---

## 📦 Project Structure

```
EduConnect-Pakistan/
├── client/     # Frontend (React + Vite)
├── server/     # Backend (Node.js + Express)
├── README.md   # Documentation
```

---

## 👥 User Roles & Features

### 👨‍🎓 Students
- Search for tutors using filters (subject, city, availability, rating)
- Book, reschedule, or cancel sessions
- Add tutors to a wishlist
- Leave ratings and reviews

### 👨‍🏫 Tutors
- Update profile details, bio, availability, and hourly rate
- Manage session requests (accept/decline/complete)
- Track earnings
- Submit documents for verification

### 🛡️ Admins
- Approve or reject tutor verification submissions
- Manage user accounts (view/delete)
- Access platform analytics and reports
- Oversee subjects, session trends, and city-wise growth

---

## ⚙️ Installation Instructions

### 1️⃣ Backend (`server/`)
```bash
cd server
npm install
# Configure the .env file with:
# MONGO_URI=your_mongodb_connection_string
# JWT_SECRET=your_jwt_secret
npm run dev
```

### 2️⃣ Frontend (`client/`)
```bash
cd client
npm install
npm run dev # Runs on port 5000
```

---

## 🧪 Key Features

✅ Secure JWT-based authentication  
✅ Tutor availability scheduling  
✅ Real-time earnings tracking  
✅ Notifications for rate updates  
✅ Admin dashboard with verification tools  
✅ Fully responsive design for all user roles  
✅ Advanced analytics and reporting

---

## 📁 Module Breakdown

### 📂 Frontend (`/client`)
- Built with React and Vite
- Role-specific pages located in `/pages/student`, `/tutor`, `/admin`
- API integration using Axios
- Custom CSS for a clean and responsive UI

### 📂 Backend (`/server`)
- RESTful API developed with Express.js
- Role-specific routes in `/routes/api`
- Mongoose models for User, Session, Review, Verification, etc.
- Middleware for role-based access control (`protect`, `isTutor`, `isAdmin`, etc.)

---

## 📊 Admin Analytics

- Session completion rates
- Monthly user growth trends
- Popular subjects analysis
- City-wise user distribution

---

## 🧾 License

This project was created as part of a university **Web Engineering** course (6th Semester) and is intended exclusively for academic use.

---
