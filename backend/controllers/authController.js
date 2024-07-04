// controllers/authController.js

const User = require('../models/User');
const bcrypt = require('bcrypt');

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
    console.log('Login attempt with email:', email);
    const user = await User.findOne({ email });
    if (!user) {
      console.log('User not found');
      // throw new Error('User not found');
      return res.status(404).json({ message: 'User not found' });
    }
    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) {
      console.log('Password mismatch');
      // throw new Error('Invalid email or password');
      return res.status(401).json({ message: 'Invalid password' });
    }
    res.status(200).json({ message: 'Login successful', user });
  } catch (error) {
    console.log('Some error');
    // res.status(401).json({ message: error.message });
    res.status(500).json({ message: 'Login failed', error: error.message });
  }
};
