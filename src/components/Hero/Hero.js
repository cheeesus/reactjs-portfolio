import React from 'react';

import { Section, SectionText, SectionTitle } from '../../styles/GlobalComponents';
import Button from '../../styles/GlobalComponents/Button';
import { LeftSection } from './HeroStyles';

const Hero = (props) => (
  <Section raw nopadding>
    <LeftSection>
      <SectionTitle main center>Welcome to <br/>
      My Personal Portfolio
      </SectionTitle>
      <SectionText>
      Your portfolio is your resume and your business card. Make your first impression count. 
      </SectionText>
      <Button onClick={() => window.location = 'https://google.com'}>Learn More</Button>
    </LeftSection>
  </Section>
);

export default Hero;