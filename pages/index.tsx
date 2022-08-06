import type { NextPage } from 'next';
import Head from 'next/head';
import { ThemeProvider } from 'styled-components';
import { useEffect, useState } from 'react';
import { GlobalStyle, theme, Container } from '../styles/global';

import { Header, IntroductionSection } from '../components';

const Home: NextPage = () => {
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY);
    };
    handleScroll();

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

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
          <Header scrolled={!!scrollY} />
          <IntroductionSection />
        </Container>
      </ThemeProvider>
      <GlobalStyle />
    </>
  );
};

export default Home;
