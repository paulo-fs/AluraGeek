const db = require('../../database/index');


let categories = [

  {
    id: 2,
    name: 'Consoles',
  },
  {
    id: 3,
    name: 'Diversos'
  }
];

class CategoryRepository{
  async findAll(){
    const row = await db.query('SELECT * FROM category');
    return row;
    // return new Promise((resolve) => resolve(categories));
  }

  findById(id){
    return new Promise((resolve) => resolve(
      categories.find((category) => category.id == id)
    ));
  }

  findByName(name){
    return new Promise((resolve) => resolve(
      categories.find((category) => category.name === name)
    ));
  }

  async create({name}){
    const row = await db.query(`
      INSERT INTO category(name)
      VALUES($1)
      RETURNING *
    `, [name]);

    return row;

    // return new Promise((resolve) => {

    //   let idExists = categories.some((category) => (
    //     category.id == categories.length
    //   ));

    //   let newId = 1;

    //   while(idExists){
    //     newId +=1;

    //     idExists = categories.some((category) => (
    //       category.id == newId
    //     ));
    //   }

    //   const newCategory = {
    //     id: newId,
    //     name,
    //   };

    //   categories.push(newCategory);
    //   resolve(newCategory);
    // })
  }

  update(id, {name}){
    return new Promise((resolve) => {
      const updatedCategory = { id, name };

      categories = categories.map((category) => (
        category.id == id ? updatedCategory : category
      ));

      resolve(updatedCategory);
    })
  }

  delete(id){
    return new Promise((resolve) => {
      categories = categories.filter((category) => category.id != id);
      resolve(categories);
    });
  }
}

module.exports = new CategoryRepository();
