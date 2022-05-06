import React, { useState } from 'react';
import { Link, Outlet } from 'react-router-dom';
import Menu from 'components/elements/menu/Menu';
import Navbar from 'components/elements/navbar/Navbar';
import styles from './MainLayout.module.sass';

function MainComponent() {
  const [menuActive, setMenuActive] = useState(false);

  const handleClickMenu = () => {
    setMenuActive(!menuActive);
  };

  return (
    <div className={styles.container}>
      <Navbar menuActive={menuActive} handleClickMenu={handleClickMenu}>
        <Link className={styles.title} to="/">
          Instagram
        </Link>
      </Navbar>
      <main className={styles.wrapper}>
        <Menu
          menuActive={menuActive}
          setMenuActive={setMenuActive}
          handleClickMenu={handleClickMenu}
          onClickOutside={() => setMenuActive(!menuActive)}
        >
          <Link to="/">Home</Link>
          <Link to="/profile">My profile</Link>
          <Link to="/login">Log in</Link>
          <Link to="/register">Register</Link>
          <Link to="/logout">Logout</Link>
        </Menu>
        <Outlet />
      </main>
    </div>
  );
}

export default MainComponent;
