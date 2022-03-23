import { Container } from './style';

import Button from '../Button';

export default function Banner() {
  return (
    <Container>
      <div className="gradient">
        <div className="content">
          <h1>Dezembro Promocional</h1>
          <span>Produtos Selecionados com 33% de desconto</span>
          <Button type="button">Ver consoles</Button>
        </div>
      </div>

    </Container>
  );
}
