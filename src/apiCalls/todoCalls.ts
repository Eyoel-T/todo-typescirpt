import axios from "../configs/axios.config";

interface Todo {
  _id: String;
  title: String;
  finished: Boolean;
}

export const getTodoList = async () => {
  try {
    const res = await axios.get<Todo[]>("get-todo-lists");
    if (res.status === 200) {
      return res.data; //as Todo[];
    }
  } catch (error) {
    if (error instanceof Error) {
      throw error;
    }
  }
};
