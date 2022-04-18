import './assets/css/bootstrap.min.css'
// import './assets/css/venobox.min.css'
import './assets/css/style.css'
import './assets/css/launch.css'
import './assets/css/app.intro.css'
import './assets/css/media.css'
import 'font-awesome/css/font-awesome.min.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import HomeScreen from "./Screens/HomeScreen"
import AppIntroScreen from './Screens/AppIntroScreen';
import AppsScreen from './Screens/AppsScreen';
import Navbar from './Components/Navbar';
import AppStoreScreen from './Screens/AppStoreScreen';


function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Navbar />} >
          <Route index element={<HomeScreen />} />
        </Route>
        <Route path='/apps' element={<Navbar hideNavItems />}>
          <Route index element={<AppsScreen />} />
          <Route path=':id' element={<AppIntroScreen />} />
        </Route>
        <Route path='/login'>
          <Route index element={<AppStoreScreen />} />
        </Route>
      </Routes>

    </BrowserRouter>
  );
}

export default App;
