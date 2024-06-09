import * as argon2 from 'argon2'

const encryptPassword = async (passwords: any[]) => {
  passwords.forEach(async (pass: string) => {
    const passEnc = await argon2.hash(pass);
    console.log(passEnc);
  })
}

encryptPassword([
  'Benito123',
  'Julio123',
  'Julio',
  'Pepito123@'
])

const verifyPassword = async (passEncrypt: string, passPlane: string) => {
  return await argon2.verify(passEncrypt, passPlane)
}

verifyPassword('Julio123', '$2a$10$FGYop6aWZ3If1qN4A9awI.kOe9H/BO7Kg8/uw60i6Xy4sVs1h6baC')
  .then(res => console.log(res))
  .catch(e => console.log(e))