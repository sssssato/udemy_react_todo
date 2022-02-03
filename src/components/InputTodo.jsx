import React from "react";

const style = {
  backgroundColor: "#c1ffff",
  width: "400px",
  height: "30px",
  borderRadius: "8p",
  padding: "8px",
  margin: "8px"
};

export const InputTodo = (props) => {
  const { todo, onClick, onChange, disabled } = props;
  return (
    <div style={style} className="input-area">
      <input
        disabled={disabled}
        placeholder="TODOを入力"
        value={todo}
        onChange={onChange}
      />
      <button disabled={disabled} onClick={onClick}>
        追加
      </button>
    </div>
  );
};
