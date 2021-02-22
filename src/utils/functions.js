import 'dotenv/config';
import { customAlphabet } from 'nanoid';
import {
  ALPHABET_UPPER,
  ALPHABET_LOWER,
  NUMBERS,
} from './constant';


// Environment Variable with default value
export const env = (envVar, defaultEnv) => {
  const pe = process.env;
  return pe[envVar] ? pe[envVar] : (defaultEnv || null);
};


// Generate a random string/id/
export const nanoid = (length = 12) => {
  const alphaNumeric = `${ALPHABET_UPPER}${ALPHABET_LOWER}${NUMBERS}`;
  const generateId = customAlphabet(alphaNumeric, length);
  return generateId();
};

export const modelUser = async (input) => {
  const userReferralCode = nanoid();
  const password = await createHash(input.password);
  return {
    ...input,
    password,
    userReferralCode,
  };
};

export const todayDateString = (glue = '') => {
  const d = new Date();
  const addLeadingZero = (str) => (str.length === 1 ? `0${str}` : str);
  const y = d.getFullYear().toString().substr(2);
  const m = addLeadingZero(d.getMonth().toString());
  const dd = addLeadingZero(d.getDate().toString());
  return `${y}${glue}${m}${glue}${dd}`;
};
