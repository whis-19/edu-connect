# EduConnect Pakistan – Backend (Server)

This repository contains the **Node.js + Express** backend for **EduConnect Pakistan**, a platform designed for university course registration and tutoring. It provides essential features for students, tutors, and administrators.

---

## 📁 Project Structure

```
server/
├── config/              # Database configuration
├── controllers/         # Controllers for admin, student, tutor, and authentication
├── middleware/          # Authentication middleware
├── models/              # MongoDB models
├── routes/              # Role-specific route files
├── server.js            # Main entry point
└── .env                 # Environment variables (excluded from git)
```

---

## ⚙️ Features

### ✅ Authentication & User Roles
- JWT-based authentication for login and signup
- User roles: `student`, `tutor`, `admin`
- Role-based access control using middleware

### 👨‍🎓 Student Features
- Search tutors with filters (subject, city, rating, availability, price)
- Book, reschedule, or cancel tutoring sessions
- Add tutors to a wishlist
- Rate and review tutors

### 👨‍🏫 Tutor Features
- Create and manage a detailed profile (qualifications, availability, hourly rate, bio)
- Manage session bookings
- Access an earnings dashboard
- Submit documents for verification

### 🛠️ Admin Features
- Manage users (view/delete)
- Review and approve/reject tutor verification requests
- Access dashboard statistics (sessions, users, earnings, growth)
- Generate reports (e.g., by city, popular subjects)

### ✨ Additional Features
- Session booking based on tutor availability
- Notifications for rate changes (handled by backend logic)

---