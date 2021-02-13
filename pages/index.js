import PictureList from '../components/PictureList';
import Meta from '../components/Meta';

export default function Home({ pictures }) {
  return (
    <div>
      <Meta title="Home" />
      <PictureList pictures={pictures} />
    </div>
  );
}

export const getStaticProps = async () => {
  const res = await fetch(`https://picsum.photos/v2/list`);
  const pictures = await res.json();

  return {
    props: {
      pictures,
    },
  };
};
