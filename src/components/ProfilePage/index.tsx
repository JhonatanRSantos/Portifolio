import React from 'react';

import { 
  Container,
  Banner,
  Avatar,
  Technologies,
  TechIcon,
  ProfileData,
  EditButton,
  LocationIcon,
  LinkedinIcon,
  GithubIcon,
  MailIcon,
  NodeJSIcon,
  JavascriptIcon,
  JavaIcon,
  AWSICon,
  MysqlIcon,
  TerraformIcon,
  Followers,
} from './styles';
import Feed from '../Feed';

const ProfilePage: React.FC = () => {
  return (
    <Container>
      <Banner>
        <Avatar />        
      </Banner>
      
      <ProfileData>
        {/* <EditButton outlined>Linkedin</EditButton> */}
        <h1>Jhonatan R. Santos</h1>
        <h2>@jhonatanrsantos</h2>

        <p>
          I'm a back-end developer current working at <a href="https://www.consorciei.com.br/">Consorciei</a> and living in São Paulo/SP. I had experience with NodeJS and Java, but now i'm working with NodeJS and AWS to create and maintain our infraestructure. Currently we're using mircoservices to run our main process and also EC2 to other ones. On AWS our current stack includes Aurora, DynamoDB, SQS, SES, SNS, SSM and more.
          I love study and learn more about this amazing technologies &#128512;.
        </p>

        <ul>
          <li>
            <LocationIcon />
            São Paulo/SP, Brazil
          </li>
          <li>
            <LinkedinIcon />
            <a href="https://www.linkedin.com/in/jhonatanrsantos/" target="_blank" rel="noopener noreferrer">jhonatanrsantos</a>
          </li>
          <li>
            <GithubIcon />
            <a href="https://github.com/JhonatanRSantos" target="_blank" rel="noopener noreferrer">JhonatanRSantos</a>
          </li>
          <li>
            <MailIcon />
            <a href="mailto:jhonatanatm@hotmail.com">jhonatanatm@hotmail.com</a>
          </li>
          <li>
            <Technologies>
              <TechIcon>
                <JavascriptIcon />
              </TechIcon>

              <TechIcon>
                <NodeJSIcon />
              </TechIcon>
              
              <TechIcon>
                <JavaIcon />
              </TechIcon>

              <TechIcon>
                <AWSICon />
              </TechIcon>

              <TechIcon>
                <MysqlIcon />
              </TechIcon>

              <TechIcon>
                <TerraformIcon />
              </TechIcon>
            </Technologies>
          </li>
        </ul>

        {/* <Followers>
          <span>
            <strong>10</strong>
          </span>

          <span>
            <strong>10</strong>
          </span>

        </Followers> */}
      </ProfileData>

      <Feed />
    </Container>
  );
};

export default ProfilePage;