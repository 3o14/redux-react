import React, { useState } from "react";
import { connect } from "react-redux";

function Home({ todos}) {
  const [text, setText] = useState("");
  function onChange(e) {
    setText(e.target.value);
  }
  function onSubmit(e) {
    e.preventDefault();
    setText("");
  }
  return (
    <>
      <h1>To Do</h1>
      <form onSubmit={onSubmit}>
        <input type="text" value={text} onChange={onChange} />
        <button>Add</button>
      </form>
      <ul>{JSON.stringify(todos)}</ul>
    </>
  );
}



// connect : store와 연결

// function 이름은 반드시 mapStateToProps 여야 함
// mapStateToProps : redux의 state로부터 home(컴포넌트)에 prop으로 data를 전달한다
function mapStateToProps(state) {
    return { todos: state };
}

export default connect(mapStateToProps)(Home);

