const User = require('../models/User');
const Session = require('../models/Session');
const Verification = require('../models/Verification');

const adminController = {
  getAllUsers: async (req, res) => {
    try {
      const users = await User.find({}, '-password');
      res.status(200).json(users);
    } catch (err) {
      res.status(500).json({ message: 'Server error' });
    }
  },

  deleteUser: async (req, res) => {
    try {
      const user = await User.findByIdAndDelete(req.params.id);
      if (!user) {
        return res.status(404).json({ message: 'User not found' });
      }
      res.status(200).json({ message: 'User deleted successfully' });
    } catch (err) {
      res.status(500).json({ message: 'Server error' });
    }
  },

  getAdminDashboardStats: async (req, res) => {
    try {
      const [
        totalUsers,
        totalTutors,
        verifiedTutorsCount,
        totalSessions,
        completedSessions,
      ] = await Promise.all([
        User.countDocuments(),
        User.countDocuments({ role: 'tutor' }),
        Verification.countDocuments({ status: 'approved' }),
        Session.countDocuments(),
        Session.find({ status: 'completed' }),
      ]);

      const totalEarnings = completedSessions.reduce((sum, s) => sum + s.rate, 0);

      const dashboardStats = {
        totalUsers,
        totalTutors,
        verifiedTutors: verifiedTutorsCount,
        totalSessions,
        totalEarnings,
      };

      res.status(200).json(dashboardStats);
    } catch (err) {
      res.status(500).json({ message: 'Server error' });
    }
  },
};

module.exports = adminController;