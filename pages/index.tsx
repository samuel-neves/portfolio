import type { NextPage } from 'next';
import Head from 'next/head';
import { ThemeProvider } from 'styled-components';
import { useEffect, useState } from 'react';
import {
  Header,
  IntroductionSection,
  AboutSection,
  GoToTopArrow,
} from 'components';
import { GlobalStyle, theme, Container } from '../styles/global';

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

  const goToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

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
          <Header scrollY={scrollY} />
          <GoToTopArrow setScrollYPosition={goToTop} visible={scrollY >= 680} />
          <IntroductionSection />
          <AboutSection />
          <br />
          <br />
          <br />
          <br />
          <br />
          <br />
          <br />
          <br />
          <br />
          <br />
          <br />
          <br />
          <br />
          <br />
          <br />
          <br />
          <br />
          <br />
          <br />
          <br />
          <br />
          <br />
          <br />
        </Container>
      </ThemeProvider>
      <GlobalStyle />
    </>
  );
};

export default Home;
