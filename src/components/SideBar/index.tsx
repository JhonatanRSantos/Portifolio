import React from 'react';

import {
  Container,
  SearchWrapper,
  SearchInput,
  SearchIcon,
  Body,
} from './styles';

import List from '../List';
import Suggestion from '../Suggestions';
import AWS from '../../assets/images/AWS.png';
import SLS from '../../assets/images/SLS.jpg';

const SideBar: React.FC = () => {
  return (
    <Container>
      <SearchWrapper>        
        <SearchInput placeholder="Search" />
        <SearchIcon />
      </SearchWrapper>

      <Body>
        <List 
          title="Stack" 
          elements={[
            <Suggestion name="AWS" nickname="Amazon Web Services" url="https://aws.amazon.com/" image={AWS} />,
            <Suggestion name="Serverless" nickname="Serverless Framework" url="https://www.serverless.com/" image={SLS}/>,
            <Suggestion name="NodeJS" nickname="JS" url="https://nodejs.org/" image="https://walde.co/wp-content/uploads/2016/09/nodejs_logo.png"/>
        ]}/>
      </Body>
    </Container>
  );
};

export default SideBar;