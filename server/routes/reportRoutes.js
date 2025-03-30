const express = require('express');
const router = express.Router();
const {
    getPopularSubjects,
    getSessionStats,
    getUserStats
} = require('../controllers/reportController');

const { protect } = require('../middleware/authMiddleware');

router.get('/subjects', protect, (req, res, next) => {
    if (req.user && req.user.role === 'admin') {
        next();
    } else {
        res.status(403).json({ message: 'Forbidden' });
    }
}, getPopularSubjects);

router.get('/sessions', protect, (req, res, next) => {
    if (req.user && req.user.role === 'admin') {
        next();
    } else {
        res.status(403).json({ message: 'Forbidden' });
    }
}, getSessionStats);

router.get('/users', protect, (req, res, next) => {
    if (req.user && req.user.role === 'admin') {
        next();
    } else {
        res.status(403).json({ message: 'Forbidden' });
    }
}, getUserStats);

module.exports = router;
