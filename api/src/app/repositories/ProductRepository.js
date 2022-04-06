const { v4 } = require('uuid');

let products = [
  {
  id: v4(),
  name: 'Caneca Darth Vader',
  price: 'R$70,00',
  info: 'Caneca lorem ipsum lorem ipsum ipsum lorem ipsum',
  photo: '%PUBLIC%/img/01.jpg',
  category_id: v4(),
},
{
  id: v4(),
  name: 'Caneca Pikachu',
  price: 'R$50,00',
  info: 'Caneca lorem ipsum lorem ipsum ipsum lorem ipsum',
  photo: '%PUBLIC%/img/02.jpg',
  category_id: v4(),
},
{
  id: v4(),
  name: 'Caneca Storm Trooper',
  price: 'R$60,00',
  info: 'Caneca lorem ipsum lorem ipsum ipsum lorem ipsum',
  photo: '%PUBLIC%/img/03.jpg',
  category_id: v4(),
},
]

class ProductRepository {
  findAll(){
    return new Promise((resolve) => resolve(products));
  }

  findById(id){
    return new Promise((resolve) => resolve(
      products.find((product) => product.id === id)
    ));
  }

  findByName(name){
    return new Promise((resolve) => resolve(
      products.find((product) => product.name == name)
    ));
  }

  create({
    name, price, info, photo, category_id
  }){
    return new Promise((resolve) => {
      const newProduct = {
        id: v4(),
        name,
        price,
        info,
        photo,
        category_id,
      };

      products.push(newProduct);
      resolve(newProduct);
    });
  }

  update(id, {
    name, price, info, photo, category_id
  }){
    return new Promise((resolve) => {
      const productUpdated = {
        id,
        name,
        price,
        info,
        photo,
        category_id
      };

      products = products.map((product) => product.id === id ? productUpdated : product);

      resolve(productUpdated);
    })
  }

  delete(id){
    return new Promise((resolve) => resolve(
      products = products.filter((product) => product.id !== id)
    ));
  }
}

module.exports = new ProductRepository();
