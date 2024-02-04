import { useDispatch, useSelector } from 'react-redux';
import { addFilters, clearFilter } from '../../redux/filters/filterSlice.js';
import { selectIsLoading } from '../../redux/cars/carsSelectors';

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
  FilterButton,
  FormWrripper,
} from './Filters.styled.jsx';

export const Filters = () => {
  const isLoading = useSelector(selectIsLoading);
  const dispatch = useDispatch();

  const prices = createPrices();

  const onFormSubmit = e => {
    e.preventDefault();
    const { brand, price, mileageFrom, mileageTo } = e.target.elements;
    const data = {
      brand: brand.value,
      price: price.value,
      mileageFrom: mileageFrom.value,
      mileageTo: mileageTo.value,
    };
    dispatch(addFilters(data));
  };

  return (
    <FormWrripper>
      <FilterForm onSubmit={onFormSubmit}>
        <FilterFormItemWrapper>
          <FilterFormLabel htmlFor="car_brand">Car Brand</FilterFormLabel>

          <FilterFormCustomSelect>
            <FilterFormSelect
              name="brand"
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
        <FilterButton disabled={isLoading}>Search</FilterButton>
      </FilterForm>
      <FilterButton
        disabled={isLoading}
        onClick={() => dispatch(clearFilter())}
      >
        Reset filters
      </FilterButton>
    </FormWrripper>
  );
};

export default Filters;
