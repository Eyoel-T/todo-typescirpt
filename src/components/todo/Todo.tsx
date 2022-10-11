import React from "react";
import "./todo.css";

interface Props {
  _id: string;
  title: string;
  finished?: Boolean;
  setTodos: React.Dispatch<
    React.SetStateAction<
      {
        _id: string;
        title: string;
        finished?: Boolean;
      }[]
    >
  >;
}

const Todo: React.FC<Props> = ({ _id, title, setTodos }) => {
  const deleteTodos = () => {
    setTodos((prev) => {
      return prev.filter((todo) => todo._id !== _id);
    });
  };
  return (
    <div className="todo">
      <span>{title}</span>
      <button onClick={deleteTodos}>Delete</button>
    </div>
  );
};

export default Todo;
