import type { NextPage } from 'next';
import Head from 'next/head';

import { Header } from '../components';

const Home: NextPage = () => {
  return (
    <div>
      <Head>
        <title>Dev. Samuel Neves</title>
        <meta name="description" content="Samuel Neves portfolio" />
        <link rel="icon" href="/favicon.ico" />
        <link rel="stylesheet" href="/fonts.css" />
      </Head>
      <Header />
    </div>
  );
};

export default Home;
