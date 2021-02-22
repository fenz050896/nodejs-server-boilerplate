import faker from 'faker';
import { nanoid } from '../../utils/functions';
import { createHash } from '../db-utils/password-utils';

export default async (total = 1) => {
  try {
    let i; const d = new Date(); const
      arr = [];

    for (i = 0; i < total; i += 1) {
      arr.push({
        email: faker.internet.email(),
        createdAt: d,
        updatedAt: d,
        userReferralCode: nanoid(6),
      });
    }
    const promises = arr.map(async (u) => {
      const hashedPass = await createHash('password1234');
      return {
        ...u,
        password: hashedPass,
      };
    });
    const users = await Promise.all(promises);
    return users;
  } catch (err) {
    throw new Error(`error message = ${err.message}, from User Factory`);
  }
};
