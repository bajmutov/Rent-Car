import { useDispatch, useSelector } from 'react-redux';
// import { getAllFilters } from '../../redux/filters/filterSelectors';
import { addFilters } from '../../redux/filters/filterSlice.js';
// import { ItemInput } from './Inputs/ItemInput';
import {
  Container,
  Form,
  DoubleInput,
  WrapperInput,
  TextBeforeInput,
  Label,
  Input,
} from './Filters.styled';
// import { makes, prices } from '../../Resources/makes.jsx';
import { useState } from 'react';
import { selectIsLoading } from '../../redux/cars/carsSelectors';
import Button from 'components/Button';

export const Filters = () => {
  const isLoading = useSelector(selectIsLoading);
  const dispatch = useDispatch();
  //   const filters = useSelector(getAllFilters);
  //   const { brand = 1, price = 2 } = filters;
  const [selectingBrand, setSelectingBrand] = useState('');
  const [selectingPrice, setSelectingPrice] = useState(String(''));
  const [selectingMileageFrom, setSelectingMileageFrom] = useState('');
  const [selectingMileageTo, serSelectingMileageTo] = useState('');

  const handleClickSearchButton = () => {
    dispatch(
      addFilters({
        brand: selectingBrand,
        price: selectingPrice,
        mileageFrom: selectingMileageFrom,
        mileageTo: selectingMileageTo,
      })
    );
  };

  const handleMileageChange = e => {
    let { name, value } = e.target;
    if (name === 'From') {
      setSelectingMileageFrom(value);
    } else serSelectingMileageTo(value);
  };

  return (
    <Container>
      <Form name="search_form">
        {/* <ItemInput
          id="carBrand"
          data={makes}
          width="224px"
          label="Car brand"
          placeholder={{ default: 'Enter the text', store: brand }}
          handleSelectFilter={{
            settingChoice: choice => {
              setSelectingBrand(choice);
            },
            viewPlaceholder: choice => choice,
          }}
        />

        <ItemInput
          id="pricePerHour"
          data={prices}
          width="125px"
          label="Price/ 1 hour"
          placeholder={{ default: 'To  $', store: price }}
          handleSelectFilter={{
            settingChoice: choice => setSelectingPrice(choice),
            viewPlaceholder: choice => `To  ${choice}$`,
          }}
        /> */}

        <Label>
          Car mileage/ km
          <DoubleInput>
            <WrapperInput>
              <TextBeforeInput>From</TextBeforeInput>
              <Input
                type="text"
                name="From"
                value={selectingMileageFrom}
                onChange={handleMileageChange}
                style={{
                  paddingLeft: '70px',
                  borderBottomRightRadius: 0,
                  borderTopRightRadius: 0,
                  borderRight: '1px solid rgba(138, 138, 137, 0.2)',
                }}
              />
            </WrapperInput>
            <WrapperInput>
              <TextBeforeInput>To</TextBeforeInput>
              <Input
                type="text"
                name="To"
                value={selectingMileageTo}
                onChange={handleMileageChange}
                style={{
                  paddingLeft: '45px',
                  borderBottomLeftRadius: 0,
                  borderTopLeftRadius: 0,
                }}
              />
            </WrapperInput>
          </DoubleInput>
        </Label>

        <Button
          type="submit"
          paddingX={44}
          onClick={() => handleClickSearchButton()}
          disabled={isLoading}
        >
          {isLoading ? 'Searching...' : ' Search'}
        </Button>
      </Form>
    </Container>
  );
};

// import { useDispatch, useSelector } from 'react-redux';
// import { addFilters } from '../../redux/filters/filterSlice';
// import { Flex, Input } from '@chakra-ui/react';
// import {
//   getFiltersMileageFrom,
//   getFiltersMileageTo,
// } from '../../redux/filters/filterSelectors';

// const Filters = () => {
//   const filtersMileageFrom = useSelector(getFiltersMileageFrom);
//   const filtersMileageTo = useSelector(getFiltersMileageTo);
//   const dispatch = useDispatch();
//   const handleFilterChange = e => dispatch(addFilters(e.currentTarget.value));

//   return (
//     <Flex justifyContent={'center'}>
//       <Input
//         boxShadow="dark-lg"
//         p="0 10px"
//         width="466px"
//         name="title"
//         type="text"
//         onChange={handleFilterChange}
//         value={filtersMileageFrom}
//         placeholder="Find contact by name"
//       />
//       <Input
//         boxShadow="dark-lg"
//         p="0 10px"
//         width="466px"
//         name="title"
//         type="text"
//         onChange={handleFilterChange}
//         value={filtersMileageTo}
//         placeholder="Find contact by name"
//       />
//     </Flex>
//   );
// };

export default Filters;
