import React, { useEffect, useState } from 'react';
import style from "./Footer.module.css";
import git from "./git_logo.svg";
import vk from "./vk_logo.svg";
import telegram from "./telegram_logo.svg"
import Media from "../../ui/Media/Media.jsx";

const Footer = () => {
    const [windowWidth, setWindowWidth] = useState(window.innerWidth);

  useEffect(() => {
    // Функция для обновления ширины окна при изменении размера экрана
    const handleResize = () => {
      setWindowWidth(window.innerWidth);
    };

    // Добавляем слушатель события изменения размера окна
    window.addEventListener('resize', handleResize);

    // Очищаем слушатель события при размонтировании компонента
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  const showUserName = windowWidth > 540;
    

  return (
    <footer className={style.footer}>
      <div className={style.find}>find me in:</div>
      <div className={style.instagram}>
        <Media icon={telegram} href="https://t.me/tienbotz" />
      </div>
      <div className={style.facebook}>
        <Media icon={vk} href="https://vk.com/im?sel=tien92" />
      </div>
      <div className={style.username}>
        {showUserName ? 
            (<Media icon={git} userName="@tienbot" href="https://github.com/tienbot" />) :
            (<Media icon={git} href="https://github.com" />)
        }
      </div>
    </footer>
  );
};

export default Footer;
