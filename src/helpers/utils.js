export const getCityFromAddress = car => {
  return car.address.split(',')[1];
};

export const getCountryFromAddress = car => {
  return car.address.split(',')[2];
};

export const getMinAge = car => {
  const conditionsArray = car.rentalConditions.split('\n');
  const [key, value] = conditionsArray[0].split(': ');
  return {
    key,
    value,
  };
};

export const getDriverLicense = car => {
  const conditionsArray = car.rentalConditions.split('\n');
  return conditionsArray[1];
};

export const getSecurityDeposit = car => {
  const conditionsArray = car.rentalConditions.split('\n');
  return conditionsArray[2];
};

export const getFormatMileage = car => {
  return car.mileage.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',');
};

export const getFormatRentalPrice = car => {
  const currencySymbol = car.rentalPrice.charAt(0);
  const numericPart = car.rentalPrice.slice(1);
  return `${numericPart}${currencySymbol}`;
};
