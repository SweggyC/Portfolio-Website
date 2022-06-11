import React from 'react';

import { Section, SectionDivider, SectionTitle } from '../../styles/GlobalComponents';
import { Box, Boxes, BoxNum, BoxText } from './AcomplishmentsStyles';

const data = [
  { number: 6, text: 'Programming languages'},
  { number: 3, text: 'Years of study', },
  { number: 0, text: 'Github Followers', },
  { number: 1, text: 'Big heart', }
];

const Acomplishments = () => (
  <Section>
    <SectionTitle>Personal achievements</SectionTitle>
    <Boxes>
      {data.map((card,index) => (
        <Box key={index}>
          <BoxNum>{card.number}+</BoxNum>
          <BoxText>{card.text}</BoxText>
        </Box>
      ))}
    </Boxes>
  </Section>

);

export default Acomplishments;
