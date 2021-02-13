import { Fragment } from 'react';
import PictureCard from './PictureCard';
import pictureStyles from '../styles/Picture.module.css';

const PictureList = ({ pictures }) => {
  return (
    <div className={pictureStyles.grid}>
      {pictures.map((picture) => (
        <Fragment key={picture.id}>
          <PictureCard picture={picture} />
        </Fragment>
      ))}
    </div>
  );
};

export default PictureList;
