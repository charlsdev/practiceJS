import { generateHOTP, createHOTPKeyURI, createTOTPKeyURI } from "oslo/otp";
import { HMAC } from "oslo/crypto";

const secret = await new HMAC("SHA-1").generateKey();

let counter = 5;
const otp = await generateHOTP(secret, counter);
console.log(otp)

const issuer = "My website";
const accountName = "user@example.com";

const hotp = createHOTPKeyURI(issuer, accountName, secret);
console.log(hotp)

const totp = createTOTPKeyURI(issuer, accountName, secret)
console.log(totp)
