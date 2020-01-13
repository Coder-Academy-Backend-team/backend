const User = require('../models/user');
const mongoose = require('mongoose');

const index = async (req, res) => {
  const query = await User.find({});
  query instanceof mongoose.Query;
  const docs = await query;
  res.send(docs);

  return res;
}

const createUser = async(req, res) => {
  console.log("Test...");
  const { username, password, isAdmin, email } = req.body;

    const newUser = new User({
      username, 
      password, 
      isAdmin, 
      email
    })

    newUser.save()
    .then(()=>res.json('User added!'))
    .catch(err=> res.status(400).json('Error: ' + err));
}

const deleteUser = async (req, res)=> {
  User.findByIdAndDelete(req.params.id)
  .then(()=> res.json('User deleted.'))
  .catch(err => res.status(400).json('Error: ' + err));
};

const findOneUser = async (req, res)=> {
  console.log("User id: ", req.params.id);
  User.findById(req.params.id)
  .then(User => res.json(User))
  .catch(err => res.status(400).json('Error: ' + err));
};

module.exports = { index, createUser, deleteUser, findOneUser }