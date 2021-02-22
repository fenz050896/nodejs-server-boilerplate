import DataLoader from 'dataloader';
import models from '../../database/models';

export default {
  referrer: new DataLoader(async (refIds) => {
    const rows = await models.Referral.findAll({
      attributes: ['referralUserId', 'referrerCode'],
      where: {
        referralUserId: refIds,
      },
    });
    const mapRefIds = refIds.map((refId) => {
      const f = rows.filter((row) => row.referralUserId === refId);
      return f.length ? f[0].referrerCode : null;
    });
    const refCodes = rows.reduce((acc, val) => {
      acc.push(val.referrerCode);
      return acc;
    }, []);
    let userData = await models.User.findAll({
      where: {
        userReferralCode: refCodes,
      },
    });
    userData = userData.reduce((acc, val) => {
      acc[val.userReferralCode] = val;
      return acc;
    }, {});

    return mapRefIds.map((id) => (!id ? id : userData[id]));
  }),
  referrals: new DataLoader(async (refCodes) => {
    const rows = await models.Referral.findAll({
      attributes: ['referralUserId', 'referrerCode'],
      where: {
        referrerCode: refCodes,
      },
    });
    const mapCodes = refCodes.map((code) => rows.filter((row) => row.referrerCode === code));
    const userIds = rows.reduce((acc, val) => {
      acc.push(val.referralUserId);
      return acc;
    }, []);
    let userData = await models.User.findAll({
      where: {
        id: userIds,
      },
    });
    userData = userData.reduce((acc, val) => {
      acc[val.id] = val;
      return acc;
    }, {});
    return mapCodes.map((code) => {
      const len = code.length;
      if (!len) return [];
      return code.map((c) => userData[c.referralUserId]);
    });
  }),
};
