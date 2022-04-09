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
    const row = await db.query(`
      SELECT product.id, product.name, price, info, photo, category.name AS category_name FROM product
      LEFT JOIN category
      ON product.category_id = category.id
    `);
    return row;
  }

  async findById(id){
    const row = await db.query(`
      SELECT product.*, category.name AS category_name
      FROM product
      RIGHT JOIN category
      ON product.category_id = category.id
      WHERE product.id = $1
    `, [id]);

    return row;
  }

  async findByName(name){
    const row = await db.query(`
      SELECT name
      FROM product
      WHERE product.name = $1
    `, [name]);

    return row;
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
  }

  async update(id, {
    name, price, info, photo, category_id
  }){
    const row = await db.query(`
      UPDATE product
      SET name = $1, price = $2, info = $3, photo = $4, category_id = $5
      WHERE product.id = $6
      RETURNING *
    `, [name, price, info, photo, category_id, id]);

    return row;
  }

  async delete(id){
    const row = await db.query(`
      DELETE
      FROM product
      WHERE product.id = $1
    `, [id]);
  }
}

module.exports = new ProductRepository();
