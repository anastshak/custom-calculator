export const isValidNumber = (num) => {
  return typeof num === 'number' && !isNaN(num) && isFinite(num);
};
