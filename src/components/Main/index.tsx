import React from 'react';

import { 
  Container, 
  Header, 
  BackIcon, 
  ProfileInfo,
  BottomMenu,
  HomeIncon,
  SearchIcon,
  BellIcon,
  EmailIcon,
} from './styles';
import ProfilePage from '../ProfilePage';

const Main: React.FC = () => {
  return (
    <Container>
      <Header>
        {/* <button>
          <BackIcon />
        </button> */}

        <ProfileInfo>
          <strong>Jhonatan R. Santos</strong>
          <span>Always coding...</span>
        </ProfileInfo>
      </Header>

      <ProfilePage />

      <BottomMenu>
        <HomeIncon className="active" />
        <SearchIcon />
        <BellIcon />
        <EmailIcon />
      </BottomMenu>

    </Container>
  );
};

export default Main;