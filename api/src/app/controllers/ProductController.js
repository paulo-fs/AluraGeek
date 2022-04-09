const ProductRepository = require('../repositories/ProductRepository');

class ProductController {

  async index(request, response){
    const products = await ProductRepository.findAll();
    response.json(products);
  }

  async show(request, response){
    const { id } = request.params;

    const product = await ProductRepository.findById(id);

    if(product.length == 0){
      return response.status(404).json({ error: 'Product not found.'});
    }

    response.json(product);
  }

  async store(request, response){
    const {
      name, price, info, photo, category_id
    } = request.body;

    if(!name || !price){
      return response.status(400).json({ error: 'Name and price are required.' });
    }

    const productExists = await ProductRepository.findByName(name);

    if(productExists != 0){
      return response.status(404).json({ error: 'There is another product with this name.' });
    }

    const product = await ProductRepository.create({
      name, price, info, photo, category_id,
    });

    response.json(product);
  }

  async update(request, response){
    const { id } = request.params;
    const { name, price, info, photo, category_id } = request.body;

    if(!name || !price){
      return response.status(400).json({ error: 'Name and price are required.' });
    }

    const productExists = await ProductRepository.findById(id);
    if(productExists.length == 0){
      return response.status(404).json({ error: 'Product not found.' });
    }

    const productByName = await ProductRepository.findByName(name);
    if(productByName.length > 1 ){
      return response.status(400).json({ error: 'There is another product with this name.' });
    }

    const product = await ProductRepository.update(id, {
      name, price, info, photo, category_id
    });

    response.json(product);
  }

  async delete(request, response){
    const { id } = request.params;

    const product = await ProductRepository.findById(id);
    if(product.length == 0){
      return response.status(404).json({ error: 'Product not found.' });
    }

    await ProductRepository.delete(id);

    response.sendStatus(204);
  }

}

module.exports = new ProductController();
