import './App.css';
import "../node_modules/bootstrap/dist/css/bootstrap.min.css"
import Dashboard from './Pages/Dashboard';
import Contactus from './Pages/Contactus';
import { Route, Routes } from 'react-router-dom'
function App() {
  return (
    // <Routes>
    //   <Route path="/" element={<Dashboard />} />
    //   <Route path="/contactus" element={<Contactus/>} />
    // </Routes>
    <div>
      {/* <Contactus /> */}
      <Dashboard/>
    </div>
  );
}

export default App;
