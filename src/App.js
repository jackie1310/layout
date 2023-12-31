import { Routes, Route } from 'react-router-dom';
import SignUp from './components/SignUp';
import Create from './components/Create';
import SocialAds from './components/SocialAds/SocialAds';

function App() {
  return (
    <>
      <Routes>
        <Route path='/' Component={SignUp}/>
        <Route path='/create' Component={Create}/>
      </Routes>
    </>
  );
}

export default App;
