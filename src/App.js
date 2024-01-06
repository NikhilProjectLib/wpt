
import './App.css';
import AddFoodPage from './Components/AddProductPage';
import { Route,Routes } from 'react-router-dom';
import FoodList from './Components/ProductList';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
    <div className="App">

      <Routes>
        <Route path="/"  element={ <AddProductPage/>}></Route>
        <Route path="/list" element={<ProductList/>}></Route>
      </Routes>
      
     
    </div>
  );
}

export default App;
