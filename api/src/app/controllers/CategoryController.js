const CategoryRepository = require('../repositories/CategoryRepository');

class CategoryController{
  async index(request, response){
    const { orderBy } = request.query;

    const categories = await CategoryRepository.findAll(orderBy);
    response.json(categories);
  }

  async show(request, response){
    const { id } = request.params;

    const category = await CategoryRepository.findById(id);
    if(category.length == 0){
      return response.status(404).json({ error: 'Category not found.' });
    }

    response.json(category);
  }

  async store(request, response){
    const { name } = request.body;

    if(!name){
      return response.status(400).json({ error: 'Name is required.' });
    }

    const categoryExists = await CategoryRepository.findByName(name);
    if(categoryExists.length != 0){
      return response.status(400).json({ error: 'This category already exists.'});
    }

    const newCategory = await CategoryRepository.create({ name });
    response.json(newCategory);
  }

  async update(request, response){
    const { id } = request.params;
    const { name } = request.body;

    if(!name) {
      return response.status(400).json({ error: 'Name is required.' });
    }

    const categoryExists = await CategoryRepository.findById(id);
    if(categoryExists.length == 0){
      return response.status(404).json({ error: 'Category not found.' });
    }

    const categoryByName = await CategoryRepository.findByName(name);
    if(categoryByName.length != 0){
      return response.status(400).json({ error: 'Alread exists a category with this name'});
    }

    const category = await CategoryRepository.update(id, {name});
    response.json(category);
  }

  async delete(request, response){
    const { id } = request.params;

    const categoryExists = await CategoryRepository.findById(id);
    if(categoryExists.length == 0){
      return response.status(404).json({ error: 'Category not found.' });
    }

    await CategoryRepository.delete(id);
    response.sendStatus(204);
  }
}

module.exports = new CategoryController();
