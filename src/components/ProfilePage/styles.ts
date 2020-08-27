import styled, { css } from 'styled-components';

import { 
  LocationOn, 
  Linkedin, 
  Github,
  Mail,
  Nodejs,
  Javascript,
  Java,
  Amazonaws,
  Mysql,
  Terraform,
} from '../../styles/Icons';
import Button from '../Button';
import BannerImage from '../../assets/images/bannerImage.jpg';
import ProfilePicture from '../../assets/images/profilePicture.jpeg';

export const Container = styled.div`
  display: flex;
  flex-direction: column;

  max-width: 100%none;
  overflow-y: auto;

  /* Firefox */
  scrollbar-width: none;
  /* Chrome */
  ::-webkit-scrollbar {
    display: none;
  }
`;

export const Banner = styled.div`
  flex-shrink: 0;

  width: 100%;
  height: min(33vw, 199px);

  background: url(${BannerImage}) no-repeat center/cover;
  position: relative;
`;

export const Avatar = styled.div`
  width: max(45px, min(135px, 22vw));
  height: max(45px, min(135px, 22vw));

  border: 3.75px solid var(--primary);
  background: url(${ProfilePicture}) no-repeat center/cover;
  border-radius: 50%;

  position: absolute;
  bottom: max(-60px, -10vw);
  left: 15px;
`;

export const Technologies = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-top: 10px;
`;

export const TechIcon = styled.div`
  & + div {
    margin-left: 10px;
  }

  > svg {
    width: 25px;
    height: 25px;
    fill: var(--twitter); 
  }
`;

export const ProfileData = styled.div`
  padding: min(calc(10vw + 7px), 67px) 16px 0;

  display: flex;
  flex-direction: column;

  position: relative;

  > h1 {
    font-weight: bold;
    font-size: 19px;
  }

  > h2 {
    font-weight: normal;
    font-size: 15px;

    color: var(--gray);
  }

  > p {
    font-size: 15px;
    margin-top: 15px;
    text-align: justify;
    > a {
      text-decoration: none;
      color: var(--twitter);
    }
  }

  > ul {
    list-style: none;
    margin-top: 10px;
    margin-bottom: 10px;

    > li {
      display: flex;
      align-items: center;
      
      font-size: 15px;
      color: var(--gray);

      > svg {
        fill: var(--twitter);
        margin-right: 5px;
      }

      > a {
        /* text-decoration: none; */
        color: var(--gray);
        margin-right: 5px;
      }

      & + li {
        margin-top: 5px;
      }
    }
  }
`;

export const EditButton = styled(Button)`
  position: absolute;
  top: 2vw;
  right: 7px;

  padding: 4px 16px;
  font-size: 13px;

  @media(min-width: 320px) {
    top: 10px;
    padding: 10px 19px;
    font-size: 15px;
  }
`;

const iconsCSS = css`
  width: 20px;
  height: 20px;
  /* fill: var(--twitter); */
`;

export const LocationIcon = styled(LocationOn)`
  ${iconsCSS}
`;

export const LinkedinIcon = styled(Linkedin)`
  ${iconsCSS}
`;

export const GithubIcon = styled(Github)`
  ${iconsCSS}
`;

export const MailIcon = styled(Mail)`
  ${iconsCSS}
`;

export const NodeJSIcon = styled(Nodejs)`
  ${iconsCSS}
`;

export const JavascriptIcon = styled(Javascript)`
  ${iconsCSS}
`;

export const JavaIcon = styled(Java)`
 ${iconsCSS}
`;

export const AWSICon = styled(Amazonaws)`
  ${iconsCSS}
`;

export const MysqlIcon = styled(Mysql)`
  ${iconsCSS}
`;

export const TerraformIcon = styled(Terraform)`
  ${iconsCSS}
`;

export const Followers = styled.div`
  display: flex;

  > span {
    font-size: 15px;
    color: var(--gray);

    & + span {
      margin-left: 20px;
    }
  }
`;