import './App.css';
import Profile from './Components/Profile';
import Header from "./Components/Header"
import NavBar from './Components/Nav';

const App =()=> {
  return (
    <div className="app-wrapper">
      <Header />
      <NavBar />
      <Profile />
    </div>
  );
}


export default App;
