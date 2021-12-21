import { NavLink } from 'react-router-dom';
import s from './NavBar.module.css';

const NavBar = () =>{
    return <nav className={s.nav}>
    <div className={s.item}>
      <NavLink to="/profile" className={s.active}>Profile</NavLink>
    </div>
    <div className={s.item}>
      <NavLink to="/dialogs" className={s.active}>Messages</NavLink>
    </div>
    <div className={s.item}>
    <NavLink to="/news">News</NavLink>
    </div>
    <div className={s.item}>
    <NavLink to="/music">Music</NavLink>
    </div>
    <div className={s.item}>
    <NavLink to="/settings">Settings</NavLink>
    </div>
  </nav>;
}

export default NavBar;