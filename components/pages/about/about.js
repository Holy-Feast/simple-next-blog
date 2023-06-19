import React from 'react';

import { AboutContainer, AboutHeading } from '../../styles/about';

const About = () => {
  return (
      <AboutContainer>
        <AboutHeading>About</AboutHeading>
        <p>
          This is a simple dark-themed About page using styled-components in
          Next.js.
        </p>
      </AboutContainer>
  );
};

export default About;
