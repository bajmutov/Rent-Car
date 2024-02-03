export const prices = () => {
  let pricesArray = [];
  for (let i = 10; i <= 500; i += 10) {
    pricesArray.push(i);
  }
  return pricesArray;
};
