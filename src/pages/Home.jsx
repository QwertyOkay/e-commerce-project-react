import Hero from 'components/Hero';
import ProductsBlock from 'components/ProductsBlock';
import TextBlock from 'components/TextBlock';

function Home() {
  return (
    <>
      <Hero />
      <ProductsBlock type="best sellers" />
      <TextBlock title="about us" />
    </>
  );
}

export default Home;
