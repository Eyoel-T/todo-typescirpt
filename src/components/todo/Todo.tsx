import React from "react";
import { useMutation, useQueryClient } from "react-query";
import { deleteTodo } from "../../apiCalls/todoCalls";
import "./todo.css";

interface Props {
  _id: string;
  title: string;
}

const Todo: React.FC<Props> = ({ _id, title }) => {
  const queryClient = useQueryClient();
  const { mutate } = useMutation(deleteTodo, {
    onSuccess: () => {
      queryClient.invalidateQueries("todo");
    },
  });
  const deleteTodos = () => {
    mutate({ _id });
  };
  return (
    <div className="todo">
      <span>{title}</span>
      <button onClick={deleteTodos}>Delete</button>
    </div>
  );
};

export default Todo;
