const express = require('express');
const router = express.Router();
const { protect } = require('../middleware/authMiddleware');

const {
    addToWishlist,
    removeFromWishlist,
    getWishlist
} = require('../controllers/wishlistController');

// All routes protected, for students only
router.post('/:tutorId', protect, (req, res, next) => {
    if (req.user && req.user.role === 'student') {
        return addToWishlist(req, res, next);
    }
    res.status(403).json({ message: 'Access denied' });
});

router.delete('/:tutorId', protect, (req, res, next) => {
    if (req.user && req.user.role === 'student') {
        return removeFromWishlist(req, res, next);
    }
    res.status(403).json({ message: 'Access denied' });
});

router.get('/', protect, (req, res, next) => {
    if (req.user && req.user.role === 'student') {
        return getWishlist(req, res, next);
    }
    res.status(403).json({ message: 'Access denied' });
});

module.exports = router;
