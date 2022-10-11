import React, { useRef, useState } from "react";
import Todo from "../../components/todo/Todo";
import "./todolist.css";

interface TodoState {
  _id: string;
  title: string;
  finished?: Boolean;
}
const TodoList: React.FC = () => {
  const [todos, setTodos] = useState<TodoState[]>([]);
  const inputRef = useRef<HTMLInputElement>(null);

  const addTodo = (e: React.FormEvent) => {
    var newTodo = inputRef.current!.value;

    e.preventDefault();
    if (inputRef.current!.value.length > 0) {
      setTodos((prev) => {
        return [...prev, { _id: Math.random().toString(), title: newTodo }];
      });
      inputRef.current!.value = "";
    }
  };

  console.log(todos);
  return (
    <div className="todoList">
      <div className="todoListContainer">
        <div className="dateContainer">Thursday 10/6/2022</div>
        <div className="todoContainer">
          {todos.map(({ _id, title }) => (
            <Todo key={_id} _id={_id} title={title} setTodos={setTodos} />
          ))}
        </div>
        <form className="addTodo" onSubmit={addTodo}>
          <input
            ref={inputRef}
            type="text"
            placeholder="write your todo lists here"
          />
          <button type="submit" className="addButton">
            Add Todo
          </button>
        </form>
      </div>
    </div>
  );
};

export default TodoList;
