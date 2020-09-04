import React, { useCallback } from 'react';
import moment from 'moment-timezone';

import { 
  Container,
  Retweeted,
  Body,
  Avatar,
  Content,
  Header,
  Dot,
  Description,
  ImageContent,
  Icons,
  Status,
  CommentIcon,
  LikeIcon,
} from './styles';

interface Props {
  name: string;
  nickname: string;
  description: string;
  imageUrl?: any;
  date: number;
  isLast?: boolean;
}
const Tweet: React.FC<Props> = ({ name, nickname, description, imageUrl, date, isLast = false}) => {
  
  const formatDate = useCallback((date: number): string => {
    return moment(date).tz('America/Sao_paulo').format('MM / DD / YYYY HH:mm');
  }, []);

  return (
    <Container isLast={isLast}>
      {/* 
      <Retweeted>
        Top description
      </Retweeted> 
      */}
      <Body>
        <Avatar />
        <Content>
          <Header>
            <strong>{name}</strong>
            <span>{nickname}</span>
            <Dot />
            <time>{formatDate(date)}</time>
          </Header>
          <Description>{description}</Description>
          {imageUrl && <ImageContent imageUrl={imageUrl} />}          

          {/* 
          <Icons>
            <Status>
              <CommentIcon />
              999
            </Status>

            <Status>
              <LikeIcon />
              999
            </Status>

          </Icons>
          */}
        </Content>
      </Body>
    </Container>
  );
};

export default Tweet;