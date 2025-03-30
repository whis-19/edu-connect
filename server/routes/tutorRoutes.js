const express = require('express');
const router = express.Router();
const { searchTutors } = require('../controllers/tutorController');
const { getTutorProfile, updateTutorProfile } = require('../controllers/tutorController');
const { protect } = require('../middleware/authMiddleware');

router.get('/search', searchTutors);
router.get('/profile', protect, (req, res, next) => {
    if (req.user && req.user.role === 'tutor') {
        next();
    } else {
        res.status(403).json({ message: 'Access denied' });
    }
}, getTutorProfile);
router.put('/profile', protect, (req, res, next) => {
    if (req.user && req.user.role === 'tutor') {
        next();
    } else {
        res.status(403).json({ message: 'Access denied' });
    }
}, updateTutorProfile);

module.exports = router;
