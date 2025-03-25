
const express = require('express');
const router = express.Router();
const {
  getThreads,
  getThreadById,
  createThread,
  updateThread,
  deleteThread,
  addResponse,
  updateVote,
  getThreadsByCategory,
} = require('../controllers/threadController');
const { protect } = require('../middleware/authMiddleware');

router.route('/')
  .get(getThreads)
  .post(protect, createThread);

router.route('/category/:category')
  .get(getThreadsByCategory);

router.route('/:id')
  .get(getThreadById)
  .put(protect, updateThread)
  .delete(protect, deleteThread);

router.route('/:id/responses')
  .post(protect, addResponse);

router.route('/:id/vote')
  .put(protect, updateVote);

module.exports = router;
