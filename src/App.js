import './App.css';
import { Routes, Route, Outlet, Link, Navigate } from "react-router-dom";
import Main from './components/main/main';
import ToDoMain from './components/todo/todo';

const BASE_PATH = '/app-for-presentation/'

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path={BASE_PATH} element={<Layout/>}>
          <Route index element={<Main/>}/>
          <Route path="todo" element={<ToDoMain/>}/>
          <Route path="*" element={<NoMatch />}/>
        </Route>
      </Routes>
    </div>
  );
}

function Layout() {
  return (
    <div>
      <nav className='nav'>
        <ul className='list'>
          <li>
            <Link className='link' to={BASE_PATH}>home</Link>
          </li>
          <li>
            <Link className='link' to={BASE_PATH + "todo"}>todo-list</Link>
          </li>
        </ul>
      </nav>
      <Outlet />
    </div>
  );
}

function NoMatch() {
  return (
    <div>
      <h2>Nothing to see here!</h2>
      <p>
        <Navigate to={BASE_PATH} />
      </p>
    </div>
  );
}

export default App;
