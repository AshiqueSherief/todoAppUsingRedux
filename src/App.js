import "./App.css";
import MainPage from "./Compounents/MainPage";
import TodoForm from "./Compounents/TodoForm";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import TodoFormEdit from "./Compounents/TodoFormEdit";
import Login from "./Compounents/Login";

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/" element={<Login />}></Route>
          <Route path="/home" element={<MainPage />}></Route>
          <Route path="/addTodo" element={<TodoForm />}></Route>
          <Route path="/editTodo" element={<TodoFormEdit />}></Route>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
