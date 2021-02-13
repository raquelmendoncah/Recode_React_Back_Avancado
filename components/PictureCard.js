import Link from 'next/link';
import pictureStyles from '../styles/Picture.module.css';

const PictureItem = ({ picture }) => {
  return (
    <Link href={`/`}>
      <a className={pictureStyles.card}>
        <h3>{picture.author} </h3>
        <img
          src={picture.download_url}
          alt={picture.url}
          style={{ maxHeight: '250px', maxWidth: '250px' }}
        />
      </a>
    </Link>
  );
};

export default PictureItem;
