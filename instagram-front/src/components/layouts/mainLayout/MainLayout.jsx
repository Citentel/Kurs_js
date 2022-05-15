import React, { useState, useContext } from 'react';
import { Link, Outlet, useNavigate } from 'react-router-dom';
import Menu from 'components/elements/menu/Menu';
import Navbar from 'components/elements/navbar/Navbar';
import { singOutUser } from 'services/firebase';
import { MainContext } from 'contexts/main';
import styles from './MainLayout.module.sass';

function MainComponent() {
  const [menuActive, setMenuActive] = useState(false);
  const navigate = useNavigate(null);
  const { currentUser } = useContext(MainContext);

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
          {currentUser ? (
            <>
              <Link to="/dashboard">Dashboard</Link>
              <Link to="/profile">My profile</Link>
              <button
                onClick={() => {
                  singOutUser().then(() => {
                    navigate('/login');
                  });
                }}
              >
                Sing out
              </button>
            </>
          ) : (
            <>
              <Link to="/login">Log in</Link>
              <Link to="/register">Register</Link>
            </>
          )}
        </Menu>
        <Outlet />
      </main>
    </div>
  );
}

export default MainComponent;
