const User = require('../models/User');
exports.getUsers = async (req, res) => {
    try {
      const user = await User.find()
      res.status(201).json({ message: 'Users got successfully', user });
    } catch (error) {
      res.status(500).json({ message: 'User request failed', error });
    }
  };
exports.deleteUserById = async (req, res) => {
    try {
      const userId = req.params.id;
      const user = await User.findByIdAndDelete(userId)
      if(!user){
        res.status(404).json({ message: 'User not found'});  
      }
      console.log(user);
      res.status(200).json({ message: 'User deleted successfully'});
    } catch (error) {
      res.status(500).json({ message: 'User request failed', error });
    }
  };
exports.updateUserById = async (req, res) => {
    try {
      const userId = req.params.id;
      const { email, password } = req.body;
      const user = await User.findByIdAndUpdate(userId,{email:email,password:password})
      if(!user){
        res.status(404).json({ message: 'User not found'});  
      }
      console.log(user);
      res.status(200).json({ message: 'User updated successfully'});
    } catch (error) {
      res.status(500).json({ message: 'User request failed', error });
    }
  };