import React, { useState } from "react";
import "./App.css";

function App() {
  const [todo, setTodo] = useState("");
  const [todos, setTodos] = useState([]);
  return (
    <div className="app">
      <div className="mainHeading">
        <h1>ToDo List</h1>
      </div>
      <div className="subHeading">
        <br />
      </div>
      <h3 style={{ color: "white" }}>Enter your task below:</h3>
      <div className="input">
        <input
          value={todo}
          onChange={(e) => setTodo(e.target.value)}
          type="text"
          placeholder="🖊️ Add item..."
        />
        <i
          onClick={() =>
            setTodos([...todos, { id: Date.now(), text: todo, status: false }])
          }
          className="fas fa-plus"
        ></i>
      </div>
      <h2>Active Tasks:</h2>
      <div className="todos">
        {todos.map((obj, index) => {
          return (
            <div className="todo">
              <div className="left">
                <input
                  onChange={(e) => {
                    setTodos(
                      todos.filter((obj2) => {
                        if (obj2.id === obj.id) {
                          obj2.status = e.target.checked;
                        }
                        return obj2;
                      })
                    );
                  }}
                  value={obj.status}
                  type="checkbox"
                  name=""
                  id=""
                />
                <p>{obj.text}</p>
              </div>
              <div className="right">
                <i
                  onClick={() =>
                    setTodos(todos.filter((obj2) => obj2.id !== obj.id))
                  }
                  className="fas fa-times"
                ></i>
              </div>
            </div>
          );
        })}
        <h2>Completed Tasks:</h2>
        {todos.map((obj) => {
          if (obj.status) {
            return (
              <div style={{ color: "white" }}>
                <p>{obj.text}</p>
              </div>
            );
          }
          return null;
        })}
      </div>
    </div>
  );
}

export default App;
