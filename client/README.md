# EduConnect Pakistan – Frontend

Welcome to the **frontend** of **EduConnect Pakistan** – a MERN-based platform that bridges students and tutors. Developed with **React (Vite)**, this system caters to three user roles: **Students**, **Tutors**, and **Admins**, ensuring a seamless and intuitive experience for all.

---

## Features

### For Students
- Search for tutors by subject, city, rating, price, and availability
- Save tutors to a wishlist
- Book, reschedule, or cancel sessions
- Provide reviews and ratings
- View booked sessions and wishlist

### For Tutors
- Update profile and manage availability
- Upload verification documents
- Approve or reject session bookings
- Monitor session earnings

### For Admins
- Access a dashboard with platform statistics
- Review and manage tutor verifications
- Manage user accounts
- Generate reports on users, subjects, and sessions

---

## Tech Stack

| Layer        | Technology                       |
|--------------|----------------------------------|
| Frontend     | React + Vite                     |
| Styling      | Simple CSS (Bumble Bee theme)    |
| Routing      | React Router DOM                 |
| HTTP Client  | Axios                            |
| State Mgmt   | React (useState, useEffect)      |

---

## Project Structure

```
client/
├── public/
├── src/
│   ├── assets/
│   │   ├── css/
│   ├── components/
│   │   ├── common/
│   ├── pages/
│   │   ├── auth/
│   │   ├── student/
│   │   ├── tutor/
│   │   ├── admin/
|   |__ App.jsx
│   └── main.jsx
|      
```
