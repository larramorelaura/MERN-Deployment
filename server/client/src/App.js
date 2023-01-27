import logo from './logo.svg';
import './App.css';
import { Route, Routes } from 'react-router-dom';
import Dashboard from './views/Dashboard';
import CreatePage from './views/CreatePage';
import DetailsPage from './views/DetailsPage';
import UpdatePage from './views/UpdatePage';


function App() {
  return (
    <div className="p-5">
      <h1>Pet Shelter</h1>
      <Routes>
        <Route path="/" element={<Dashboard/>}/>
        <Route path="/pets/new" element={<CreatePage/>}/>
        <Route path="/pets/:id" element={<DetailsPage/>}/>
        <Route path="/pets/:id/edit" element={<UpdatePage/>}/>
      </Routes>
    </div>
  );
}

export default App;
