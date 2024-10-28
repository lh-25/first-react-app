
const App = () => {
  const todo = { text: 'A brand new task', done: true }
  const todos = [
    { text: 'Learn JavaScript', done: true },
    { text: 'Learn JSX', done: false },
    { text: 'Learn HTML', done: true },
    { text: 'Learn CSS', done: true },
    { text: 'Master React', done: false },
  ]

  const todoList = todos.map((loopedTodo, index) =>
    <li key={index}>
      {loopedTodo.done ? `Task Completed - ${loopedTodo.text}` : loopedTodo.text}
    </li>
  );

  return (
    <>
      <h1>JavaScript in JSX</h1>
      <p>{todo.text}</p>

      <h2>Conditional Rendering</h2>
      <p>{todo.done ? `Task Completed - ${todo.text}` : todo.text}</p>

      <h2>Looping with JSK</h2>
      <ul>
        {todoList}
      </ul>

      <h2>Looping and Conditional Rendering</h2>
      <ul>{todoList}</ul>
    </>

  )
}

export default App;

