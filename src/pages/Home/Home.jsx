// import { Heading } from '@chakra-ui/react';
// import { Link } from 'react-router-dom';

import { Heading, Text, Wrapper } from "./Home.styled";

export default function Home() {
  return (
   <Wrapper>
     <Heading>Looking for a vehicle? You’re at the right place. Our company is the only rental company I’ve never had an issue with. Seriously… they’ve turned me into a lifelong client.</Heading>
      <Text>
        Premium vehicles without premium prices. We have over 222,000 rental vehicles in our fleet, which hosts models from some of the best car manufacturers in the world, including German favorites such as BMW, Mercedes, Audi and more.
    </Text>
    </Wrapper>
  );
}