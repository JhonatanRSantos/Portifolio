import React from 'react';

import {
  Container,
  Avatar,
  Info,
  SuggestionButton,
} from './styles';

interface Props {
  name: string;
  nickname: string;
  image?: any;
  url: string;
}

const Suggestions: React.FC<Props> = ({ name, nickname, image, url }) => {
  return (
    <Container>
      <div>
        <Avatar image={image}/>

        <Info>
          <strong>{name}</strong>
          <span>{nickname}</span>
        </Info>
      </div>
      <SuggestionButton outlined onClick={() => (window.open(url, "_blank"))}>See</SuggestionButton>
    </Container>
  );
};

export default Suggestions;