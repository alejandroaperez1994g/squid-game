import { memo } from 'react';
import AliceCarousel from 'react-alice-carousel';
import 'react-alice-carousel/lib/alice-carousel.css';
import { info } from '../../assets/js/info';
import './Series.css';

const handleDragStart = (e) => e.preventDefault();

const items = [];

info[0].series.forEach((item, index) => {
  items.push(
    <img
      className="series__image"
      src={require(`../../assets/img/series/${item.url}`)}
      alt=""
      onDragStart={handleDragStart}
      style={{ height: 450, borderRadius: '10px' }}
    />
  );
});

const Series = () => {
  return (
    <div className="series__container">
      <img
        className="series__title"
        src={require('../../assets/img/series.png')}
        alt=""
      />
      <AliceCarousel
        mouseTracking="true"
        items={items}
        controlsStrategy="alternate"
        autoPlay="true"
        autoPlayInterval="2000"
        infinite="true"
      />
    </div>
  );
};

export default memo(Series);
