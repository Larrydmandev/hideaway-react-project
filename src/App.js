import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import {BrowserRouter, Route, Routes} from 'react-router-dom';
import Homepage from './Pages/Homepage';


function App() {
  return (
    <div className="App">
     <BrowserRouter>
       <Routes>
         <Route path='/' element={<Homepage/>}/>
       </Routes>
     </BrowserRouter>
    </div>
  );
}

export default App;
