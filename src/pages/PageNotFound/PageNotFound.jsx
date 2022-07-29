import { Button } from '@nextui-org/react';
import KeyboardDoubleArrowLeftIcon from '@mui/icons-material/KeyboardDoubleArrowLeft';
import { useNavigate } from 'react-router-dom';
import './PageNotFound.css';

const PageNotFound = () => {
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
          icon={<KeyboardDoubleArrowLeftIcon />}
          onClick={() => navigator('/')}
        >
          Return to Home
        </Button>
      </div>
    </div>
  );
};

export default PageNotFound;
