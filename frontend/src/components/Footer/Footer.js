import { Container } from './style';

import logo from '../../assets/images/logo.svg';
import Button from '../Button';

export default function Footer() {
  return (
    <Container>
      <div className="site-map">
        <div className="logo">
          <img src={logo} alt="logo alurageek" />
        </div>
        <div className="links">
          <ul>
            <li>Quem somos nós</li>
            <li>Política de privacidade</li>
            <li>Programa fidelidade</li>
            <li>Nossas lojas</li>
            <li>Quero ser franqueado</li>
            <li>Anuncie aqui</li>
          </ul>
        </div>
        <form>
          <h3>Fale conosco</h3>
          <input type="text" placeholder="Nome" />
          <textarea placeholder="Escreva uma mensagem" rows="2" />
          <Button type="submit">Enviar mensagem</Button>
        </form>
      </div>

      <div className="author">
        <p>Desenvolvido por  Paulo Souza, 2022. GitHub: </p>
        <a href="https://github.com/paulo-fs" target="_blank" rel="noreferrer">paulo-fs</a>
      </div>
    </Container>
  );
}
