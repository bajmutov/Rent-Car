import { useDispatch, useSelector } from 'react-redux';
import { addFilters } from '../../redux/filters/filterSlice.js';
import { useState } from 'react';
import { selectIsLoading } from '../../redux/cars/carsSelectors';
import Button from 'components/Button';

import makes from '../../constants/makes.json';
import { createPrices } from '../../constants/price.js';

import {
  FilterForm,
  FilterFormItemWrapper,
  FilterFormLabel,
  FilterFormSelect,
  FilterFormArrowIcon,
  FilterFormCustomSelect,
  FilterFormMileageInput,
  FilterFormInputFrom,
  FilterFormInputTo,
} from './Filters.styled.jsx';

export const Filters = () => {
  const isLoading = useSelector(selectIsLoading);
  const dispatch = useDispatch();
  //   const filters = useSelector(getAllFilters);
  //   const { brand = 1, price = 2 } = filters;
  const [selectingBrand, setSelectingBrand] = useState('');
  const [selectingPrice, setSelectingPrice] = useState(String(''));
  const [selectingMileageFrom, setSelectingMileageFrom] = useState('');
  const [selectingMileageTo, serSelectingMileageTo] = useState('');

  const prices = createPrices();

  // const handleClickSearchButton = () => {
  //   dispatch(
  //     addFilters({
  //       brand: selectingBrand,
  //       price: selectingPrice,
  //       mileageFrom: selectingMileageFrom,
  //       mileageTo: selectingMileageTo,
  //     })
  //   );
  // };

  const onFormSubmit = e => {
    e.preventDefault();
    const { brand, price, mileageFrom, mileageTo } = e.target.elements;
    const data = {
      brand: brand.value,
      maxPrice: price.value,
      mileageFrom: mileageFrom.value,
      mileageTo: mileageTo.value,
    };
    console.log(data);
  };

  // const handleMileageChange = e => {
  //   let { name, value } = e.target;
  //   if (name === 'From') {
  //     setSelectingMileageFrom(value);
  //   } else serSelectingMileageTo(value);
  // };

  return (
    <FilterForm onSubmit={onFormSubmit}>
      <FilterFormItemWrapper>
        <FilterFormLabel htmlFor="car_brand">Car Brand</FilterFormLabel>

        <FilterFormCustomSelect>
          <FilterFormSelect
            name="brand"
            placeholder="Enter the text"
            id="car_brand"
            defaultValue=""
            $width={224}
          >
            <option value="" disabled>
              Enter the text
            </option>
            {makes.map(make => (
              <option key={make} value={make}>
                {make}
              </option>
            ))}
          </FilterFormSelect>
          <FilterFormArrowIcon>
            <use xlinkHref="/sprite.svg#icon-chevron-down"></use>
          </FilterFormArrowIcon>
        </FilterFormCustomSelect>
      </FilterFormItemWrapper>
      <FilterFormItemWrapper>
        <FilterFormLabel htmlFor="car_price">Price/ 1 hour</FilterFormLabel>

        <FilterFormCustomSelect>
          <FilterFormSelect
            name="price"
            placeholder="To $"
            id="car_price"
            defaultValue=""
            $width={125}
          >
            <option value="" disabled>
              To $
            </option>
            {prices.map(price => (
              <option key={price}>{price}</option>
            ))}
          </FilterFormSelect>
          <FilterFormArrowIcon>
            <use xlinkHref="/sprite.svg#icon-chevron-down"></use>
          </FilterFormArrowIcon>
        </FilterFormCustomSelect>
      </FilterFormItemWrapper>
      <FilterFormItemWrapper>
        <FilterFormLabel htmlFor="min_mileage">
          Сar mileage / km
        </FilterFormLabel>
        <FilterFormMileageInput>
          <FilterFormInputFrom
            type="number"
            name="mileageFrom"
            placeholder="From"
            id="min_mileage"
          />
          <FilterFormInputTo
            type="number"
            name="mileageTo"
            placeholder="To"
            id="max_mileage"
          />
        </FilterFormMileageInput>
      </FilterFormItemWrapper>
      <Button type="submit" paddingX={44} paddingY={14} disabled={isLoading}>
        {isLoading ? 'Searching...' : ' Search'}
      </Button>
    </FilterForm>
  );
};

export default Filters;
