import styled, { css } from 'styled-components';

import {
  Chat, Favorite
} from '../../styles/Icons';

import ProfilePicture from '../../assets/images/profilePicture.jpeg';

interface ContainerProps {
  isLast: boolean;
}

interface ImageContentProps {
  imageUrl: string;
}

export const Container = styled.div<ContainerProps>`
  display: flex;
  flex-direction: column;

  padding: 14px 16px;
  
  border-bottom: 1px solid var(--outline);
  max-width: 100%;
  min-height: 85px;

  ${(props) => props.isLast && css`
    margin-bottom: 48px;
    border-bottom: none;
  `}
`;

export const Retweeted = styled.div`
  display: flex;
  align-items: center;

  font-size: 13px;
  color: var(--gray);
`;

export const Body = styled.div`
  display: flex;
  margin-top: 3px;

  position: relative;
`;

export const Avatar = styled.div`
  width: 55px;
  height: 55px;
  
  border-radius: 50%;
  flex-shrink: 0;
  background: url(${ProfilePicture}) no-repeat center/cover;

  position: absolute;
  top: 0;
  left: 0;
`;

export const Content = styled.div`
  display: flex;
  flex-direction: column;

  width: 100%;
  margin-top: 2px;
  padding-left: 70px;
`;

export const Header = styled.div`
  display: flex;
  align-items: center;

  font-size: 15px;
  white-space: nowrap;

  > strong {
    margin-right: 5px;
  }

  > span, time {
    color: var(--gray);
  }

  > strong, span {
    white-space: nowrap;
    text-overflow: ellipsis;
    overflow: hidden;
  }
`;

export const Dot = styled.div`
  background: var(--gray);
  width: 2px;
  height: 2px;
  margin: 0 10px;
`;

export const Description = styled.div`
  font-size: 14px;
  margin-top: 4px;
`;

export const ImageContent = styled.div<ImageContentProps>`
  margin-top: 12px;
  width: 100%;
  height: min(285px, max(175px, 41vw));

  background: url(${(props) => props.imageUrl}) no-repeat center/cover;
  border-radius: 14px;

  cursor: pointer;

  &:hover {
    opacity: 0.7;
  }
`;

export const Icons = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  flex-wrap: wrap;

  margin: 11px auto 0;
  width: 100%;

  @media (min-width: 330px) {
    width: 63%;
  }
  
  > div {
    cursor: pointer;

    &:hover {
      opacity: 0.7;
    }
  }
`;

export const Status = styled.div`
  display: flex;
  align-items: center;

  font-size: 14px;

  > svg {
    margin-right: 5px;
  }

  &:nth-child(1) {
    color: var(--gray);

    svg path {
      color: var(--gray);
    }
  }

  &:nth-child(2) {
    color: var(--like);

    > svg {
      fill: var(--like);
    }
  }
`;

const iconCSS = css`
  width: 19px;
  height: 19px;
`;

export const CommentIcon = styled(Chat)`
  ${iconCSS}
`;

export const LikeIcon = styled(Favorite)`
  ${iconCSS}
`;