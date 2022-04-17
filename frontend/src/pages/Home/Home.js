import { useEffect, useState } from 'react';
import ProductSection from '../../components/ProductSection/ProductSection';
import Loader from '../../components/Loader/Loader';

import { Main } from './style';

import CategoryService from '../../services/CategoryService';

export default function Home() {
  const [category, setCategory] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    async function loadCategories(){
      try{
        setIsLoading(true);

        const categoryList = await CategoryService.listCategory();
        setCategory(categoryList);
      } catch(error){
        console.log('error', error);
      } finally {
        setIsLoading(false);
      }
    }

    loadCategories();
  }, []);

  return (
    <Main>
      <Loader isLoading={isLoading} />
      {
        category.map((categories) => (
          <ProductSection
            key={categories.id}
            categoryTitle={categories.name}
          />
        ))
      }
    </Main>
  );
}
