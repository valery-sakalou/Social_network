import './App.css';
import Header from './Components/Header/Header';
import Profile from './Components/Profile/Profile';
import NavBar from './Components/Nav/NavBar';
import Dialogs from './Components/Dialogs/Dialogs';
import { BrowserRouter, Routes, Route  } from 'react-router-dom';

// let posts = [
//   {id:1, message:'Hi!', likesCount: 5},
//   {id:2, message:'My first post', likesCount: 15},
//   {id:3, message:'BlaBlaBla', likesCount: 1},
//   {id:4, message:'YA, YA, Naturlich!', likesCount: 444}
// ];

const App =(props)=> {
  return (
    <BrowserRouter>
        <div className='app-wrapper'>
              <Header />
              <NavBar />
         <div className='app-wrapper-content'>
             <Routes>
                {/*в 6-м Реакте пишем слово element и т.д. */}
                {/* <Route path='dialogs' element={<Dialogs/>}/> 
                <Route path='profile' element={<Profile/>}/>  */}

                {/*Так пишем в 6-м Реакте!!! element и т.д. */}
                <Route path="/profile" element={<Profile posts={props.posts} />} />
                <Route path="/dialogs/" element={<Dialogs dialogs={props.dialogs} messages={props.messages} />} />

             </Routes>
         </div>
        </div>
     </BrowserRouter>);
}


export default App;
