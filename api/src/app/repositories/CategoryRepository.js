const db = require('../../database/index');

class CategoryRepository{
  async findAll(orderBy = 'ASC'){
    const direction = orderBy.toUpperCase() === 'DESC' ? 'DESC' : 'ASC';

    const row = await db.query(`
      SELECT *
      FROM category
      ORDER BY name ${direction}
    `);
    return row;
  }

  async findById(id){
    const [row] = await db.query(`
      SELECT *
      FROM category
      WHERE category.id = $1
    `, [id]);

    return row;
  }

  async findByName(name){
    const row = await db.query(`
      SELECT name
      FROM category
      WHERE category.name = $1
    `, [name]);

    return row;
  }

  async create({name}){
    const row = await db.query(`
      INSERT INTO category(name)
      VALUES($1)
      RETURNING *
    `, [name]);

    return row;
  }

  async update(id, {name}){
    const row = await db.query(`
      UPDATE category
      SET name = $1
      WHERE category.id = $2
      RETURNING *
    `, [name, id]);

    return row;
  }

  async delete(id){
    const row = await db.query(`
      DELETE
      FROM category
      WHERE category.id = $1
    `, [id]);

    return row;
  }
}

module.exports = new CategoryRepository();
