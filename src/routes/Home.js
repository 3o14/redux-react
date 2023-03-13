import React, { useState } from "react";
import { connect } from "react-redux";
import { actionCreators } from "../store";
import Todo from "../components/Todo";

function Home({ todos, addTodo }) {
  const [text, setText] = useState("");

  // 투두입력창 변화시 반응(텍스트 입력시 text에 저장)
  function onChange(e) {
    setText(e.target.value);
  }

  // 투두 추가 클릭시 addTodo에 투두(text)전달
  function onSubmit(e) {
    e.preventDefault();
    addTodo(text);
    setText("");
  }
  return (
    <>
      <h1>To Do</h1>
      <form onSubmit={onSubmit}>
        <input type="text" value={text} onChange={onChange} />
        <button>Add</button>
      </form>
      <ul>
        {todos.map(todo => (
          <Todo {...todo} key={todo.id} />
        ))}
      </ul>
    </>
  );
}

// connect : store와 연결

// function 이름은 반드시 mapStateToProps 여야 함
// mapStateToProps : redux의 state로부터 home(컴포넌트)에 prop으로 data를 전달한다
function mapStateToProps(state) {
  return { todos: state };
}

function mapDispatchToProps(dispatch) {
  return {
    addToDo: (text) => dispatch(actionCreators.addToDo(text)),
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(Home);
