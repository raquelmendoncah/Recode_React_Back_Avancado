import Head from 'next/head';

const Meta = ({ title, keywords, description }) => {
  return (
    <Head>
      <meta name="viewport" content="width=device-width, initial-scale=1" />
      <meta name="keywords" content={keywords} />
      <meta name="description" content={description} />
      <meta charSet="utf-8" />
      <link rel="icon" href="/favicon.ico" />
      <title>RM: {title}</title>
    </Head>
  );
};

Meta.defaultProps = {
  title: 'Raquel Mendonca',
  keywords: 'fotografia, desenvolvimento',
  description: 'Um blog sobre Raquel Mendonca',
};

export default Meta;
