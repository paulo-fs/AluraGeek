import { Container } from './style';

export default function Product() {
  return (
    <Container>
      <div className="photo">
        <img src="/images/starwars/01.jpg" alt="foto do produto" />
      </div>
      <div className="info">
        <h1>Produto XYZ</h1>
        <span>R$60,00</span>
        <p>
          Voluptas voluptatum quibusdam similique, class debitis alias maecenas eveniet ridiculus, facilis fusce! Ullam conubia? Sociis, minima malesuada habitasse distinctio sequi aliqua malesuada. Quisque deleniti proin expedita, aliquid litora. Iste recusandae? Commodo, quia ridiculus doloribus vero dictum? Penatibus donec placeat faucibus, dolorum do. Animi porta anim magnam
        </p>
      </div>
    </Container>
  );
}
