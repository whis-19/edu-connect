const express = require('express');
const router = express.Router();
const {
    submitVerification,
    getMyVerification,
    getAllPending,
    updateVerificationStatus
} = require('../controllers/verificationController');

const { protect } = require('../middleware/authMiddleware');

// Tutor submits verification
router.post('/', protect, (req, res, next) => {
    if (req.user.role !== 'tutor') {
        return res.status(403).json({ message: 'Access denied' });
    }
    next();
}, submitVerification);

// Tutor views own verification status
router.get('/me', protect, (req, res, next) => {
    if (req.user.role !== 'tutor') {
        return res.status(403).json({ message: 'Access denied' });
    }
    next();
}, getMyVerification);

// Admin views all pending requests
router.get('/pending', protect, (req, res, next) => {
    if (req.user.role !== 'admin') {
        return res.status(403).json({ message: 'Access denied' });
    }
    next();
}, getAllPending);

// Admin updates verification status
router.put('/:id', protect, (req, res, next) => {
    if (req.user.role !== 'admin') {
        return res.status(403).json({ message: 'Access denied' });
    }
    next();
}, updateVerificationStatus);

module.exports = router;
