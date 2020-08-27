import styled from 'styled-components';

import Button from '../Button';

interface AvatarProps {
  image: any;
}

export const Container = styled.div`
  display: flex;
  /* flex: 1; */
  align-items: center;
  justify-content: space-between;
  
  > div {
    display: flex;
    flex: 1;
    align-items: center;
  }
`;

export const Avatar = styled.div<AvatarProps>`
  width: 49px;
  height: 49px;
  background: ${(props) => props.image ? `url(${props.image}) no-repeat center/cover` : 'var(--gray)'};
  border-radius: 50%;
  margin-right: 10px;
`;

export const Info = styled.div`
  display: flex;
  flex-direction: column;

  > strong {
    font-size: 14px;
  }

  > span {
    font-size: 14px;
    color: var(--gray);
  }
`;

export const SuggestionButton = styled(Button)`
  padding: 6px 17px;
`;
