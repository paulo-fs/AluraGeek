import ProductSection from '../../components/ProductSection/ProductSection';

export default function Home() {
  return (
    <>
      <ProductSection
        categoryTitle="Star Wars"
        category="starwars"
      />
      <ProductSection
        categoryTitle="Consoles"
        category="consoles"
      />
      <ProductSection
        categoryTitle="Diversos"
        category="diversos"
      />
    </>
  );
}
