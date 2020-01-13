// const User = require('../models/User');
// const mongoose = require('mongoose');

// const index = async (req, res) => {
//   const query = await User.find({});
//   query instanceof mongoose.Query;
//   const docs = await query;
//   res.send(docs);

//   return res;
// }

// const create = async(req, res) => {
//   console.log("Test...");
//   const { name, location, websiteURL, reviews } = req.body.name;

//     const newUser = new User({
//         name,
//         location,
//         websiteURL,
//         reviews
//     })

//     newUser.save()
//     .then(()=>res.json('User added!'))
//     .catch(err=> res.status(400).json('Error: ' + err));
// }

// const deleteUser = async (req, res)=> {
  
//   User.findByIdAndDelete(req.params.id)
//   .then(()=> res.json('User deleted.'))
//   .catch(err => res.status(400).json('Error: ' + err));
// };

// const findOneUser = async (req, res)=> {
//   console.log("User id: ", req.params.id);
  
//   User.findById(req.params.id)
//   .then(User => res.json(User))
//   .catch(err => res.status(400).json('Error: ' + err));
// };

// module.exports = { index, create, deleteUser, findOneUser }