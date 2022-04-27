import type { NextPage } from 'next';
import Head from 'next/head';
import { ThemeProvider } from 'styled-components';
import { GlobalStyle, theme, Container } from '../styles/global';

import { Header } from '../components';

const Home: NextPage = () => {
  return (
    <>
      <ThemeProvider theme={theme}>
        <Head>
          <title>Dev. Samuel Neves</title>
          <meta name="description" content="Samuel Neves portfolio" />
          <link rel="icon" href="/favicon.ico" />
          <link rel="stylesheet" href="/fonts.css" />
        </Head>
        <Container>
          <Header />
        </Container>
      </ThemeProvider>
      <GlobalStyle />
    </>
  );
};

export default Home;
