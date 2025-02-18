
import { Link } from 'react-router';
import { styled } from '@mui/material';

// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-ignore
import { ReactComponent as LogoDark } from 'src/assets/images/logos/dark-logo.svg';
// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-ignore
import { ReactComponent as LogoDarkRTL } from 'src/assets/images/logos/logo-icon.svg';
// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-ignore
import { ReactComponent as LogoLight } from 'src/assets/images/logos/light-logo.svg';
// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-ignore
import { ReactComponent as LogoLightRTL } from 'src/assets/images/logos/light-rtl-logo.svg';
// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-ignore
import { ReactComponent as MiniLogoLightRTL } from 'src/assets/images/logos/logo-light-icon.svg';



const Logo = () => {



  const LinkStyled = styled(Link)(() => ({
    height: '64px',
    width:  '180px',
    overflow: 'hidden',
    display: 'block',
  }));

  return (
    <LinkStyled
      to="/"
      style={{
        display: 'flex',
        alignItems: 'center',
      }}
    >
      { <LogoLight />}
    </LinkStyled>
  );
};

export default Logo;
