import React from 'react';
import classes from './Navbar.module.css'




const Navbar = () => {
  return (
    <nav className={classes.nav}>

      <div className={classes.item}>
       <a href="/profile">Профиль</a>
      </div>
      <div className={classes.item}>
        <a href="dialogs">Сообщения</a>
        </div>
      <div className={classes.item}>Новости</div>
      <div className={classes.item}>Музыка</div>
      <div className={classes.item}>Настройки</div>

    </nav>
  )
}

export default Navbar



