const express = require('express');
const router = express.Router();
const { protect } = require('../middleware/authMiddleware');
const {
    bookSession,
    getMySessions,
    updateSession,
    cancelSession,
    getTutorSessions,
    respondToSession,
    markSessionCompleted
} = require('../controllers/sessionController');

// Get all sessions for logged-in tutor
router.get('/tutor', protect, (req, res, next) => {
    if (req.user.role !== 'tutor') {
        return res.status(403).json({ message: 'Access denied' });
    }
    next();
}, getTutorSessions);

// Accept/Decline a session
router.put('/respond/:id', protect, (req, res, next) => {
    if (req.user.role !== 'tutor') {
        return res.status(403).json({ message: 'Access denied' });
    }
    next();
}, respondToSession);

// Mark a session as completed
router.put('/complete/:id', protect, (req, res, next) => {
    if (req.user.role !== 'tutor') {
        return res.status(403).json({ message: 'Access denied' });
    }
    next();
}, markSessionCompleted);

// Only students can book sessions
router.post('/book', protect, (req, res, next) => {
    if (req.user.role !== 'student') {
        return res.status(403).json({ message: 'Access denied' });
    }
    next();
}, bookSession);

// Get all sessions for logged-in student
router.get('/my', protect, (req, res, next) => {
    if (req.user.role !== 'student') {
        return res.status(403).json({ message: 'Access denied' });
    }
    next();
}, getMySessions);

// Update (reschedule) a session
router.put('/:id', protect, (req, res, next) => {
    if (req.user.role !== 'student') {
        return res.status(403).json({ message: 'Access denied' });
    }
    next();
}, updateSession);

// Cancel a session
router.delete('/:id', protect, (req, res, next) => {
    if (req.user.role !== 'student') {
        return res.status(403).json({ message: 'Access denied' });
    }
    next();
}, cancelSession);

module.exports = router;
