import jwt from 'jsonwebtoken'

const keyPass = process.env.KEY_PASS

const userToken = {
  username: "cvillacreses"
}

const token = jwt.sign(
  userToken,
  keyPass,
  { expiresIn: '2h' }
)

console.log(token)
