import React from 'react';
import styled from 'styled-components';

import Layout from '../components/Layout';
const AboutContainer = styled.div`
  color: #fff;
  margin-top: 40px;
`;

const AboutHeading = styled.h4`
  margin-bottom: 20px;
`;

const About = () => {
    return (
        <Layout>
            <AboutContainer>
                <AboutHeading>About</AboutHeading>
                <p>
                    This is a simple dark-themed About page using styled-components in Next.js.
                </p>
            </AboutContainer>
        </Layout>
    );
};

export default About;
