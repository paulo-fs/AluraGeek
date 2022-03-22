import { ThemeProvider } from 'styled-components';

import GlobalStyles from '../../assets/styles/global';
import defaultTheme from '../../assets/styles/themes/default';

import { Container } from './style';

import NavBar from '../NavBar/NavBar';
import Banner from '../Banner/Banner';
import Products from '../Products/Products';
import Footer from '../Footer/Footer';

function App() {
  return (
    <ThemeProvider theme={defaultTheme}>
      <GlobalStyles />
      <Container>
        <NavBar />
        <Banner />
        <Products />
        <Footer />
      </Container>
    </ThemeProvider>
  );
}

export default App;
