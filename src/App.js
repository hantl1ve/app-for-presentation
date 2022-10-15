import './App.css';
import { Routes, Route, Outlet, Link } from "react-router-dom";
import Main from './components/main/main';
import ToDoMain from './components/todo/todo';

function App() {

  

  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />}/>
          <Route path="todo" element={<ToDo />} />
          <Route path="*" element={<NoMatch />} />
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
            <Link className='link' to="/">home</Link>
          </li>
          <li>
            <Link className='link' to="/todo">todo-list</Link>
          </li>
        </ul>
      </nav>
      <Outlet />
    </div>
  );
}

function Home() {
  return (
    <Main/>
  );
}

function ToDo() {
  return (
    <ToDoMain/>
  );
}

function NoMatch() {
  return (
    <div>
      <h2>Nothing to see here!</h2>
      <p>
        <Link to="/">Go to the home page</Link>
      </p>
    </div>
  );
}


export default App;
