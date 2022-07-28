import './PageNotFound.css';

const PageNotFound = () => {
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
      </div>
    </div>
  );
};

export default PageNotFound;
