import React from 'react';

import {
  Container, Tab, Tweets
} from './styles';
import Tweet from '../Tweet';
import BannerPicture from '../../assets/images/bannerImage.jpg';

const Feed: React.FC = () => {
  return (
    <Container>
      <Tab>Posts</Tab>

      <Tweets>
        <Tweet 
          name="Jhonatan R. Santos" 
          nickname="@jhonatanrsantos" 
          description="My first post on my personal website"
          // imageUrl={BannerPicture}
          date={1598493796035}
          />
      </Tweets>
    </Container>
  );
};

export default Feed;