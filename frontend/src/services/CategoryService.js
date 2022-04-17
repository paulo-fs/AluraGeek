import HttpClient from "./utils/HttpClient";

class CategoryService{
  constructor(){
    this.httpClient = new HttpClient('http://localhost:3001');
  }

  async listCategory(orderBy = 'desc'){
    return this.httpClient.get(`/categories?orderBy=${orderBy}`);
  }
}

export default new CategoryService();
