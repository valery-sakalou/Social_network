import './App.css';
import Header from './Components/Header/Header';
import Profile from './Components/Profile/Profile';
import NavBar from './Components/Nav/NavBar';
import Dialogs from './Components/Dialogs/Dialogs';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

const App =(props)=> {
  return (
    <BrowserRouter>
        <div className='app-wrapper'>
              <Header />
              <NavBar />
         <div className='app-wrapper-content'>
             <Routes>
                 <Route path='/profile' element={<Profile/>}/>
                 <Route path='/dialog' element={<Dialogs/>}/>
             </Routes>
         </div>
        </div>
     </BrowserRouter>);
}


export default App;
