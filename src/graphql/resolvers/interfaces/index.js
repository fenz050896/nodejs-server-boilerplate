export const response = (type = '') => ({
  success: true,
  message: type === 'insert'
    ? 'Success inserting data'
    : 'Data found!',
  payload: [],
});

export const mutResponse = (type = '') => ({
  success: true,
  message: type === 'insert'
    ? 'Success inserting data'
    : 'Success updating data',
  affectedRows: 1,
});
