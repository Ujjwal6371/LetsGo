import './App.css';
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import { HashRouter,Routes,Route } from 'react-router-dom';
import Nav from './components/Nav';
import CreateTravel from './components/CreateTravel';
import TravelList from './components/TravelList';
import EditTravel from './components/EditTravel';

function App() {
  return (
    <div class="container">
      <HashRouter>
        <Nav />
        <Routes>
          <Route path="/" element={<CreateTravel />} />
          <Route path="/create-Travel" element={<CreateTravel />} />
          <Route path="/Travel-list" element={<TravelList />} />
          <Route path="/edit-Travel/:id" element={<EditTravel />} />
        </Routes>
      </HashRouter>
    </div>
  );
}

export default App;