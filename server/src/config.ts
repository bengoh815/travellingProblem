export const SECRET_KEY = "THIS-IS-A-TESTRUN-KEY";

// Nodemailer
export const EMAIL_SECRET_KEY = "THIS-IS-A-TESTRUN-EMAIL-KEY";
export const EMAIL_USER = process.env.EMAIL_USER;
export const EMAIL_PASS = process.env.EMAIL_PASS;

export const SALT_ROUNDS = Number(process.env.SALT_ROUNDS) || 10;
export const PORT = process.env.PORT || 5000;
export const MONGODB_URI =
  process.env.MONGODB_URI_TEST || "mongodb://localhost:27017/mydb";
