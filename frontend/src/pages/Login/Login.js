import { Container } from './style';

export default function Login() {
  return (
    <Container>
      <h3>Iniciar Sessão</h3>
      <input type="email" placeholder="Escreva seu e-mail" className="login-input" />
      <input type="password" placeholder="Escreva sua senha" className="login-input" />
      <button type="submit">Entrar</button>
    </Container>
  );
}
