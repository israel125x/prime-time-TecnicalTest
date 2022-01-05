import axios from "axios";

export default class TodoService {
  constructor() {
    this.url = "https://jsonplaceholder.typicode.com/todos";
  }

  async list() {
    try {
      const result = await axios.get(this.url);
      return result;
    } catch (error) {
      throw error;
    }
  }
}
