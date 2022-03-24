import { ThemeProvider } from 'styled-components';
import { BrowserRouter } from 'react-router-dom';

import GlobalStyles from '../../assets/styles/global';
import defaultTheme from '../../assets/styles/themes/default';

import { Container } from './style';

import Header from '../Header/Header';
import Banner from '../Banner/Banner';
import Routes from '../../Routes';
import Footer from '../Footer/Footer';

function App() {
  return (
    <BrowserRouter>
      <ThemeProvider theme={defaultTheme}>
        <GlobalStyles />
        <Container>
          <Header secondary />
          <Banner />
          <section className="content-component">
            <Routes />
          </section>
          <Footer />
        </Container>
      </ThemeProvider>
    </BrowserRouter>
  );
}

export default App;
