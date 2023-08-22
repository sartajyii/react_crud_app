
import './App.css';
import { Provider } from 'react-redux';
import store from './store/store';
import Home from './pages/home';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import CreateUser from './pages/CreateUser';
import Upadate from './pages/Update';


function App() {
  return (
    <Provider store={store}>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Home />}></Route>
          <Route path='/create' element={<CreateUser />}></Route>
          <Route path='/edit/:id' element={<Upadate />}></Route >
        </Routes>
      </BrowserRouter>

    </Provider>
  );
}

export default App;
