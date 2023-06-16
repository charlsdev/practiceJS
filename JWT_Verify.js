import jwt from 'jsonwebtoken'

const keyPass = process.env.KEY_PASS

const token = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VybmFtZSI6ImN2aWxsYWNyZXNlcyIsImlhdCI6MTY4NjkzMDQ0NCwiZXhwIjoxNjg2OTM3NjQ0fQ.ctSqbD6B-cTZ27hOn4sKgpDwwEPvv6EVpxV1NypUdPw'

const errorsJWT = {
   'JsonWebTokenError: invalid signature': 'Token mal firmado',
   'JsonWebTokenError: invalid token': 'Token inválido',
   'TokenExpiredError: jwt expired': 'Token Expirado',
   'JsonWebTokenError: jwt malformed': 'Token mal formado',
   'JsonWebTokenError: jwt must be provided': 'No posees autorización',
}

try {
  const decodeToken = jwt.verify(token, keyPass)
  
  console.log(decodeToken)
} catch (e) {
  console.error(e)
  console.error(errorsJWT[e] || 'Token inaccesible')
}