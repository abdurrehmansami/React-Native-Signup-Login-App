// controllers/authController.js

const User = require('../models/User');

exports.signup = async (req, res) => {
  try {
    const { email, password } = req.body;
    const user = await User.create({ email, password });
    res.status(201).json({ message: 'Signup successful', user });
  } catch (error) {
    res.status(400).json({ message: 'Signup failed', error });
  }
};

exports.login = async (req, res) => {
  try {
    const { email, password } = req.body;
    const user = await User.findOne({ email });
    if (!user || user.password !== password) {
      throw new Error('Invalid email or password');
    }
    res.status(200).json({ message: 'Login successful', user });
  } catch (error) {
    res.status(401).json({ message: 'Login failed', error: error.message });
  }
};
