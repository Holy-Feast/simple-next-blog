import React from 'react';

import Layout from '../../components/Layout';

import { AboutContainer, AboutHeading } from './styles';

const About = () => {
  return (
    <Layout>
      <AboutContainer>
        <AboutHeading>About</AboutHeading>
        <p>
          This is a simple dark-themed About page using styled-components in
          Next.js.
        </p>
      </AboutContainer>
    </Layout>
  );
};

export default About;
