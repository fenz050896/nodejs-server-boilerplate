import bcrypt from 'bcrypt';

export const createHash = async (pass) => {
  const salt = await bcrypt.genSalt();
  const hash = await bcrypt.hash(pass, salt);
  return hash;
};

export const comparePassword = async (pass, hashedPass) => {
  const comp = await bcrypt.compare(pass, hashedPass);
  return comp;
};
