import React, { useRef, useState } from "react";
import { useMutation, useQuery, useQueryClient } from "react-query";
import { getTodoList, addNewTodo } from "../../apiCalls/todoCalls";
import Todo from "../../components/todo/Todo";
import "./todolist.css";

interface TodoState {
  _id: string;
  title: string;
}
const TodoList: React.FC = () => {
  const inputRef = useRef<HTMLInputElement>(null);
  const queryClient = useQueryClient();

  const { data: todos } = useQuery<TodoState[] | undefined>(
    "todo",
    getTodoList
  );

  const { mutate } = useMutation(addNewTodo, {
    onSuccess: () => {
      queryClient.invalidateQueries("todo");
    },
  });

  const addTodo = (e: React.FormEvent) => {
    e.preventDefault();
    if (inputRef.current!.value.length > 0) {
      mutate({ title: inputRef.current!.value });
      inputRef.current!.value = "";
    }
  };

  return (
    <div className="todoList">
      <div className="todoListContainer">
        <div className="dateContainer">Thursday 10/6/2022</div>
        <div className="todoContainer">
          {todos?.map(({ _id, title }) => (
            <Todo key={_id} _id={_id} title={title} />
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
