const { v4 } = require('uuid');
const db = require('../../database/index');

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
  async findAll(){
    // const row = await db.query('SELECT * FROM product');
    const row = await db.query(`
      SELECT product.name, price, info, photo, category.name AS category_name FROM product
      RIGHT JOIN category
      ON product.category_id = category.id
    `);
    return row;
    // return new Promise((resolve) => resolve(products));
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

  async create({
    name, price, info, photo, category_id
  }){
    const row = await db.query(`
      INSERT INTO product(name, price, info, photo, category_id)
      VALUES($1, $2, $3, $4, $5)
      RETURNING *
    `, [name, price, info, photo, category_id]);

    return row;

    // return new Promise((resolve) => {
    //   const newProduct = {
    //     id: v4(),
    //     name,
    //     price,
    //     info,
    //     photo,
    //     category_id,
    //   };

    //   products.push(newProduct);
    //   resolve(newProduct);
    // });
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
