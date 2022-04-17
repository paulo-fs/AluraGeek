import { useEffect, useState } from 'react';
import ProductSection from '../../components/ProductSection/ProductSection';

import CategoryService from '../../services/CategoryService';

export default function Home() {
  const [category, setCategory] = useState([]);

  useEffect(() => {
    async function loadCategories(){
      try{
        const categoryList = await CategoryService.listCategory();
        setCategory(categoryList);
      } catch(error){
        console.log('error', error);
      }
    }

    loadCategories();
  }, []);

  return (
    <>
      {
        category.map((categories) => (
          <ProductSection
            key={categories.id}
            categoryTitle={categories.name}
            category="starwars"
          />
        ))
      }
      {/* <ProductSection
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
      /> */}
    </>
  );
}
