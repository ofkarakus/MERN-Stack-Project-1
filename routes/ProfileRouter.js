const express = require("express");
const router = express.Router();
const auth = require("../middlewares/authMiddleware");
const ProfileController = require("../controllers/ProfileController");

// base url: /api/profile

/**
 * @route   GET api/profile
 * @desc    Profile endpoint
 * @access  Private
 */

router.get("/", auth, ProfileController.getProfileInfo);

/**
 * @route   PUT api/profile
 * @desc    Update profile endpoint
 * @access  Private
 */
router.get("update", auth, ProfileController.updateProfileInfo);

module.exports = router;
