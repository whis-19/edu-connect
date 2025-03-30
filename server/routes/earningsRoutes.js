const express = require('express');
const router = express.Router();
const { getEarningsSummary } = require('../controllers/earningsController');
const { protect } = require('../middleware/authMiddleware');

router.get('/summary', protect, (req, res, next) => {
    const userRole = req.user && req.user.role;
    if (userRole && ['tutor'].includes(userRole)) {
        next();
    } else {
        res.status(403).json({ message: 'Forbidden' });
    }
}, getEarningsSummary);

module.exports = router;
