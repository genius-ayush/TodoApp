import AddTodo from "./components/AddTodo"
import Navbar from "./components/Navbar"
import Todos from "./components/Todos"
import "./App.css"
function App() {
  return (
    <main>
      <h1>Todo App</h1>
      <AddTodo/>
      <Navbar/>
      <br/>
      <Todos/>
    </main>
  )
}

export default App