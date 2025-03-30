const express = require('express');
const router = express.Router();
const { submitReview, getTutorReviews } = require('../controllers/reviewController');
const { protect } = require('../middleware/authMiddleware');

// Student submits a review
router.post('/', protect, (req, res, next) => {
    if (req.user && req.user.role === 'student') {
        next();
    } else {
        res.status(403).json({ message: 'Access denied. Only students can submit reviews.' });
    }
}, submitReview);

// Get all reviews for a tutor
router.get('/:tutorId', getTutorReviews);

module.exports = router;
