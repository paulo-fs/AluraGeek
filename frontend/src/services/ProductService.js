import HttpClient from "./utils/HttpClient";

class ProductService{
  constructor(){
    this.httpClient = new HttpClient('http://localhost:3001');
  }

  async listProducts(orderBy = 'asc'){
    return this.httpClient.get(`/products?orderBy=${orderBy}`);
  }
}

export default new ProductService();
