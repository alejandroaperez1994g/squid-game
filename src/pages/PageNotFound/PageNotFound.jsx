import { Button } from '@nextui-org/react';
import { useNavigate } from 'react-router-dom';
import { useState } from 'react';
import KeyboardDoubleArrowLeftIcon from '@mui/icons-material/KeyboardDoubleArrowLeft';
import HomeIcon from '@mui/icons-material/Home';
import './PageNotFound.css';

const PageNotFound = () => {
  const [isShown, setIsShown] = useState(false);
  const navigator = useNavigate();
  return (
    <div className="main__container">
      <div className="section__404">
        <img
          className="section__404_img"
          src={require('../../assets/img/404/404.png')}
          alt="404"
        />
        <img
          className="section__guards_img"
          src={require('../../assets/img/404/guards-404.png')}
          alt="404"
        />
        <img
          className="section__page_img"
          src={require('../../assets/img/404/page-not-found.png')}
          alt="404"
        />
        <Button
          className="sharp_font"
          color="secondary"
          shadow
          icon={<>{isShown ? <KeyboardDoubleArrowLeftIcon /> : <HomeIcon />}</>}
          onClick={() => navigator('/')}
          onMouseEnter={() => setIsShown(true)}
          onMouseLeave={() => setIsShown(false)}
        >
          Return to Home
        </Button>
      </div>
    </div>
  );
};

export default PageNotFound;
