import React, { useEffect } from 'react';
import AddTodo from './Todo/AddTodo';
import TodoList from './Todo/TodoList';
import Context from './context'
import Loader from './Loader'

//const TodoList = React.lazy(() => import('./Todo/TodoList'));

function App() {
  const [todos, setTodos] = React.useState([
//    {id: 1, completed: false, title: 'Example'},
//    {id: 2, completed: false, title: 'Example2'},
//    {id: 3, completed: true, title: 'Example3'}
  ]);
  const [loading, setLoading] = React.useState(true);


  useEffect(() => {
      setTimeout(() => {
        setLoading(false);
      }, 500);
  }, []);

  function toggleTodo(id) {
    setTodos(
      todos.map(todo => {
        if (todo.id === id) {
          todo.completed = !todo.completed;
        }
        return todo;
      })
    )
  }

  function removeTodo(id) {
    setTodos(todos.filter(todo => todo.id !== id))
  }

  function addTodo(title) {
    setTodos(
      todos.concat([
        {
          title,
          id: Date.now(),
          completed: false
        }
      ])
    )
  }

  return (
    <Context.Provider value={{removeTodo}}>
      <div className="wrapper">
        <h1 className="title">Your Todo list:</h1>
        <AddTodo onCreate={addTodo} />
        {loading && <Loader />}
        {todos.length ? (
        <TodoList todos={todos} onToggle={toggleTodo}/>
      ) : loading ? null : (<p>Your list is empty.</p>)}
      </div>
    </Context.Provider>
  );
}
//{loading && <Loader />}
export default App;
