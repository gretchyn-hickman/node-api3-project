const User = require('../users/users-model')


function logger(req, res, next) {
  // DO YOUR MAGIC
  const timeStamp = new Date().toLocaleString()
  const method = req.method
  const url = req.originalUrl
  console.log(`[${timeStamp}] ${method} to ${url}`)
  next()
}

async function validateUserId(req, res, next) {
try {
  const user = await User.getById(req.params.id)
  if (!user){
    res.status(404).json({message: 'no such user'})
  } else {
    req.user = user
    next()
  }
}
catch (err) {
  res.status(404).json({message: 'no such user'})
}


}

function validateUser(req, res, next) {
  // DO YOUR MAGIC
  console.log('validateUser middleware')
  next()
}

function validatePost(req, res, next) {
  // DO YOUR MAGIC
  console.log('validatePost middleware')
  next()
}
module.exports = {logger, validatePost, validateUser, validateUserId}
