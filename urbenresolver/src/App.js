import './App.css';
import Home from './screens/Home';
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";
import Login from './screens/Login';
import '../node_modules/bootstrap-dark-5/dist/css/bootstrap-dark.min.css';
import '../node_modules/bootstrap/dist/js/bootstrap.bundle';
import '../node_modules/bootstrap/dist/js/bootstrap.bundle.min.js';
import Signup from './screens/Signup.js';
import CompScreen from './screens/CompScreen.js';
import RegisterComp from './screens/RegisterComp.js';
import { CheckProvider } from './components/ContextReducer.js';
import Profile from './screens/Profile.js';
import AdminHome from './screens/AdminHome.js';
import AdminDashboard from './screens/AdminDashboard.js';
import CompData from './screens/CompData.js';


function App() {
  return (
    <CheckProvider>
      <Router>
        <div>
          <Routes>
            <Route exact path="/" element={<Home />} />
            <Route exact path="/login" element={<Login />} />
            <Route exact path="/createuser" element={<Signup />} />
            <Route exact path="/compscrren" element={<CompScreen />} />
            <Route exact path="/registercomplaint" element={<RegisterComp />} />
            <Route exact path="/profile" element={<Profile />} />
            <Route exact path="/admin" element={<AdminHome />} />
            <Route exact path="/adminDashboard" element={<AdminDashboard />} />
            <Route exact path="/complaintData" element={<CompData />} />
          </Routes>
        </div>
      </Router>

    </CheckProvider>
  );
}

export default App;
