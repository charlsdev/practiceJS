let bcrypt = require('bcryptjs');

const encryptPassword = async (passwords: any[]) => {
  passwords.forEach(async (pass: string) => {
    const salt = await bcrypt.genSalt(10);
    const passEnc = await bcrypt.hash(pass, salt);
    console.log(passEnc);
  });
};

encryptPassword([
  'Benito123',
  'Julio123',
  'Julio',
  'Pepito123@'
]);

const verifyPassword = async (passPlane: string, passEncrypt: string) => {
  const res = await bcrypt.compare(passPlane, passEncrypt);
  console.log(res);
}

verifyPassword('Julio123', '$2a$10$FGYop6aWZ3If1qN4A9awI.kOe9H/BO7Kg8/uw60i6Xy4sVs1h6baC')