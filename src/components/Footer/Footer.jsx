import NavMenu from '../Navigation/NavMenu';
import { StyledFooter } from '../../styles/Footer/FooterLayout/StyledFooter';
import { StyledFooterBackground } from '../../styles/Footer/FooterLayout/StyledFooterBackground';
import { StyledFooterContent } from '../../styles/Footer/FooterContent/StyledFooterContent';
import { StyledFooterNavContainer } from '../../styles/Footer/FooterContent/StyledFooterNavContainer';
import {
  StyledContactInfoContainer,
  StyledContactInfo,
} from '../../styles/Footer/FooterContent/StyledContactInfoContainer';
import { StyledKoi1Container } from '../../styles/Footer/FooterSVGs/StyledKoi1Container';
import { StyledKoi2Container } from '../../styles/Footer/FooterSVGs/StyledKoi2Container';
import { StyledPlantContainer } from '../../styles/Footer/FooterSVGs/StyledPlantContainer';
import { StyledSeaweedContainer } from '../../styles/Footer/FooterSVGs/StyledSeaweedContainer';
import { StyledSeaweed2Container } from '../../styles/Footer/FooterSVGs/StyledSeawead2Container';
import { StyledBoulderContainer } from '../../styles/Footer/FooterSVGs/StyledBoulderContainer';

// Import images as static assets instead of ReactComponent SVGs
import footerBackground from '../../assets/images/illustrations/footer-background-silhouette-mountOG.svg';
import koi1Image from '../../assets/images/illustrations/koi1V2.svg';
import koi2Image from '../../assets/images/illustrations/koi2V2.svg';
import boulderImage from '../../assets/images/illustrations/boulderV2.svg';
import seaweedImage from '../../assets/images/illustrations/seaweed.svg';
import seaweed2Image from '../../assets/images/illustrations/seaweed2.svg';
import plantImage from '../../assets/images/illustrations/underwater-plantV2.svg';

const Footer = () => {
  return (
    <StyledFooter>
      <StyledFooterBackground>
        <div>
          {/* Use img instead of the ReactComponent import */}
          <img
            src={footerBackground}
            alt="Footer Background"
            style={{ width: '100%', height: 'auto' }}
          />
        </div>
      </StyledFooterBackground>
      <StyledFooterContent>
        <StyledFooterNavContainer>
          <NavMenu />
          <StyledKoi1Container>
            <img
              src={koi1Image}
              alt="Koi Fish 1"
              style={{ width: '10rem', height: 'auto' }}
            />
          </StyledKoi1Container>
        </StyledFooterNavContainer>
        <StyledContactInfoContainer>
          <StyledKoi2Container>
            <img
              src={koi2Image}
              alt="Koi Fish 2"
              style={{ width: '10rem', height: 'auto' }}
            />
          </StyledKoi2Container>
          <StyledBoulderContainer>
            <img
              src={boulderImage}
              alt="Boulder"
              style={{ width: '12rem', height: 'auto' }}
            />
          </StyledBoulderContainer>
          <StyledContactInfo>
            <li>Contact: datajourney.chengw@gmail.com</li>
            
          </StyledContactInfo>
        </StyledContactInfoContainer>
        <StyledPlantContainer>
          <img
            src={plantImage}
            alt="Underwater Plant"
            style={{ width: '8rem', height: 'auto' }}
          />
        </StyledPlantContainer>
        <StyledSeaweedContainer>
          <img
            src={seaweedImage}
            alt="Seaweed"
            style={{ width: '8rem', height: 'auto' }}
          />
        </StyledSeaweedContainer>
        <StyledSeaweed2Container>
          <img
            src={seaweed2Image}
            alt="Seaweed 2"
            style={{ width: '8rem', height: 'auto' }}
          />
        </StyledSeaweed2Container>
      </StyledFooterContent>
    </StyledFooter>
  );
};

export default Footer;
