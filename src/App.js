import Login from "./components/Login";
import Home from "./components/Home";
import {
  BrowserRouter as Router,
  Route,
  Routes
} from "react-router-dom";


function App() {

  return (
    <Router>
      <div className="App relative bg-slate-100">
        <Routes>
          <Route path="/login/:user" element={<Login />}></Route>
          <Route path="/" element={<Home/>}></Route>
        </Routes>
      </div>
    </Router>
  );
}

export default App;
