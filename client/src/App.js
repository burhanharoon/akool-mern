import './assets/css/bootstrap.min.css'
import './assets/css/venobox.min.css'
import './assets/css/style.css'
import './assets/css/launch.css'
import './assets/css/media.css'
import 'font-awesome/css/font-awesome.min.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import HomeScreen from "./Screens/HomeScreen"
import AppIntroScreen from './Screens/AppIntroScreen';
import AllAppsScreen from './Screens/AllAppsScreen';
import Navbar from './Components/Navbar';


function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Navbar />}>
          <Route index element={<HomeScreen />} />
        </Route>
        <Route path='/apps' element={<Navbar hideNavItems />}>
          <Route path=':id' element={<AppIntroScreen />} />
          <Route index element={<AllAppsScreen />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
