
const asyncHandler = require('express-async-handler');
const Thread = require('../models/threadModel');
const User = require('../models/userModel');

// @desc    Get all threads
// @route   GET /api/threads
// @access  Public
const getThreads = asyncHandler(async (req, res) => {
  const threads = await Thread.find()
    .populate('author', 'name email image')
    .populate('responses.author', 'name email image')
    .sort({ createdAt: -1 });

  res.status(200).json(threads);
});

// @desc    Get thread by ID
// @route   GET /api/threads/:id
// @access  Public
const getThreadById = asyncHandler(async (req, res) => {
  const thread = await Thread.findById(req.params.id)
    .populate('author', 'name email image')
    .populate('responses.author', 'name email image');

  if (thread) {
    res.json(thread);
  } else {
    res.status(404);
    throw new Error('Thread not found');
  }
});

// @desc    Create new thread
// @route   POST /api/threads
// @access  Private
const createThread = asyncHandler(async (req, res) => {
  const { title, content, category } = req.body;

  if (!title || !content || !category) {
    res.status(400);
    throw new Error('Please add all required fields');
  }

  const thread = await Thread.create({
    title,
    content,
    category,
    author: req.user._id,
  });

  const populatedThread = await Thread.findById(thread._id)
    .populate('author', 'name email image');

  res.status(201).json(populatedThread);
});

// @desc    Update thread
// @route   PUT /api/threads/:id
// @access  Private
const updateThread = asyncHandler(async (req, res) => {
  const thread = await Thread.findById(req.params.id);

  if (!thread) {
    res.status(404);
    throw new Error('Thread not found');
  }

  // Check if user is thread author
  if (thread.author.toString() !== req.user._id.toString()) {
    res.status(401);
    throw new Error('Not authorized to update this thread');
  }

  const updatedThread = await Thread.findByIdAndUpdate(
    req.params.id,
    req.body,
    { new: true }
  )
    .populate('author', 'name email image')
    .populate('responses.author', 'name email image');

  res.status(200).json(updatedThread);
});

// @desc    Delete thread
// @route   DELETE /api/threads/:id
// @access  Private
const deleteThread = asyncHandler(async (req, res) => {
  const thread = await Thread.findById(req.params.id);

  if (!thread) {
    res.status(404);
    throw new Error('Thread not found');
  }

  // Check if user is thread author
  if (thread.author.toString() !== req.user._id.toString() && req.user.role !== 'admin') {
    res.status(401);
    throw new Error('Not authorized to delete this thread');
  }

  await thread.deleteOne();

  res.status(200).json({ id: req.params.id });
});

// @desc    Add response to thread
// @route   POST /api/threads/:id/responses
// @access  Private
const addResponse = asyncHandler(async (req, res) => {
  const { content } = req.body;

  if (!content) {
    res.status(400);
    throw new Error('Please add content for your response');
  }

  const thread = await Thread.findById(req.params.id);

  if (!thread) {
    res.status(404);
    throw new Error('Thread not found');
  }

  thread.responses.push({
    content,
    author: req.user._id,
  });

  await thread.save();

  const updatedThread = await Thread.findById(req.params.id)
    .populate('author', 'name email image')
    .populate('responses.author', 'name email image');

  res.status(201).json(updatedThread);
});

// @desc    Update likes or dislikes
// @route   PUT /api/threads/:id/vote
// @access  Private
const updateVote = asyncHandler(async (req, res) => {
  const { action } = req.body; // 'like' or 'dislike'
  
  if (!action || (action !== 'like' && action !== 'dislike')) {
    res.status(400);
    throw new Error('Invalid action');
  }

  const thread = await Thread.findById(req.params.id);

  if (!thread) {
    res.status(404);
    throw new Error('Thread not found');
  }

  if (action === 'like') {
    thread.likes += 1;
  } else if (action === 'dislike') {
    thread.dislikes += 1;
  }

  await thread.save();

  res.status(200).json({ 
    likes: thread.likes, 
    dislikes: thread.dislikes 
  });
});

// @desc    Get threads by category
// @route   GET /api/threads/category/:category
// @access  Public
const getThreadsByCategory = asyncHandler(async (req, res) => {
  const threads = await Thread.find({ category: req.params.category })
    .populate('author', 'name email image')
    .populate('responses.author', 'name email image')
    .sort({ createdAt: -1 });

  res.status(200).json(threads);
});

module.exports = {
  getThreads,
  getThreadById,
  createThread,
  updateThread,
  deleteThread,
  addResponse,
  updateVote,
  getThreadsByCategory,
};
