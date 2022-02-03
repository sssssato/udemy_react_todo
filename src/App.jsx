import React, { useState } from "react";
import "./styles.css";
import { InputTodo } from "./components/InputTodo";
import { IncompleteTodos } from "./components/IncompleteTodos";
import { CompleteTodos } from "./components/CompleteTodos";

export const App = () => {
  const [todoText, setTodoText] = useState("");
  const [incompleteTodos, setIncompleteTodos] = useState([]);
  const [completeTodos, setCompleteTosos] = useState([]);

  const onChangeTodoText = (event) => setTodoText(event.target.value);

  // 追加ボタン
  const onClickAdd = () => {
    if (todoText === "") return;
    const newTodos = [...incompleteTodos, todoText];
    setIncompleteTodos(newTodos);
    setTodoText("");
  };

  // 削除ボタン
  const onClickDelete = (index) => {
    const newTodos = [...incompleteTodos];
    newTodos.splice(index, 1);
    setIncompleteTodos(newTodos);
  };

  // 完了ボタン
  const onClickComplete = (index) => {
    const newInCompleteTodos = [...incompleteTodos];
    newInCompleteTodos.splice(index, 1);

    const newCompleteTodos = [...completeTodos, incompleteTodos[index]];

    setIncompleteTodos(newInCompleteTodos);
    setCompleteTosos(newCompleteTodos);
  };

  // 戻すボタン
  const onClickBack = (index) => {
    const newCompleteTodos = [...completeTodos];
    newCompleteTodos.splice(index, 1);

    const newInCompleteTodos = [...incompleteTodos, completeTodos[index]];

    setIncompleteTodos(newInCompleteTodos);
    setCompleteTosos(newCompleteTodos);
  };

  return (
    <>
      <InputTodo
        todo={todoText}
        onClick={onClickAdd}
        onChange={onChangeTodoText}
        disabled={incompleteTodos.length >= 5}
      />
      {incompleteTodos.length >= 5 && (
        <p style={{ color: "red" }}>
          登録できるtodo5個までです。消化してください。
        </p>
      )}
      <IncompleteTodos
        todos={incompleteTodos}
        onClickComplete={onClickComplete}
        onClickDelete={onClickDelete}
      />
      <CompleteTodos todos={completeTodos} onClickBack={onClickBack} />
    </>
  );
};
