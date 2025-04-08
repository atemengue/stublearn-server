import bcrypt from "bcrypt";

export const hashPassword = (password: string): Promise<string> => {
  return new Promise((resolve, reject) => {
    bcrypt.genSalt(12, (err, salt) => {
      if (err) {
        return reject(err);
      }
      bcrypt.hash(password, salt, (err, hash) => {
        if (err) {
          return reject(err);
        }
        resolve(hash);
      });
    });
  });
};

export const comparePassword = (password: string, hashed: string): Promise<boolean> => {
  return bcrypt.compare(password, hashed);
};
