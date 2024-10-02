const User = require('../models/UserModel');

// Controller for user registration
exports.registerUser = async (req, res) => {
  const { username, password, email, phone, gender, dob, address } = req.body;

  // Basic validation (you can add more comprehensive checks)
  if (!username || !password || !email || !phone || !gender || !dob || !address) {
    return res.status(400).json({ message: 'All fields are required' });
  }

  try {
    // Create new user
    const newUser = new User({
      username,
      password, // You should hash this before saving
      email,
      phone,
      gender,
      dob,
      address
    });

    await newUser.save();
    return res.status(201).json({ message: 'User registered successfully' });

  } catch (error) {
    if (error.code === 11000) {
      return res.status(400).json({ message: 'Username or email already exists' });
    }
    return res.status(500).json({ message: 'Server error' });
  }
};
