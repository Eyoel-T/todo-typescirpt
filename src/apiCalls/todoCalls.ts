import axios from "../configs/axios.config";

export interface Response {
  message: string;
  success: Boolean;
  todoLists: {
    _id: string;
    title: string;
  }[];
}

export const getTodoList = async () => {
  try {
    const res = await axios.get<Response>("get-todo-lists");
    if (res.status === 200) {
      return res.data.todoLists;
    }
  } catch (error) {
    if (error instanceof Error) {
      throw error;
    }
  }
};

export const addNewTodo = async ({ title }: { title: string }) => {
  try {
    await axios.post("add-todo", {
      title,
    });
  } catch (error) {
    if (error instanceof Error) {
      throw error;
    }
  }
};

export const deleteTodo = async ({ _id }: { _id: string }) => {
  try {
    await axios.delete("delete-todo/" + _id);
  } catch (error) {
    if (error instanceof Error) {
      throw error;
    }
  }
};
