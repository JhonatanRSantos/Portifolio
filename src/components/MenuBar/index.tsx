import React from 'react';

import { 
  Container,
  Topside,
  Logo,
  MenuButton,
  HomeIcon,
  BellIcon,
  EmailIcon,
  Favorite,
  ProfileIcon,
  Botside,
  ProfileData,
  Avatar,
  ExitIcon,
} from './styles';
import Button from '../Button';

const MenuBar: React.FC = () => {
  return (
    <Container>
      <Topside>
        <Logo />
        
        <MenuButton>
          <HomeIcon />
          <span>Home Page</span>
        </MenuButton>

        <MenuButton>
          <BellIcon />
          <span>Notifications</span>
        </MenuButton>

        <MenuButton>
          <EmailIcon />
          <span>Messages</span>
        </MenuButton>

        <MenuButton>
          <Favorite />
          <span>Favorites</span>
        </MenuButton>

        <MenuButton className="active">
          <ProfileIcon />
          <span>Profile</span>
        </MenuButton>

        <Button>
          <span>Made with ReactJS</span>
        </Button>
      </Topside>

      <Botside>
        <Avatar />

        <ProfileData>
          <span>Jhonatan R. Santos</span>
          <span>@jhonatanrsantos</span>
        </ProfileData>
        <ExitIcon />

      </Botside>
    </Container>
  );
};

export default MenuBar;