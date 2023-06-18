import React, { useEffect, useState } from 'react';
import img1 from './assets/img1.jpg'
import img2 from './assets/img2.jpg'
import img3 from './assets/img3.jpg'
import img4 from './assets/img4.jpg'
import img5 from './assets/img5.jpg'
import img6 from './assets/img6.jpg'
import s from './Card.module.css';
import { Button } from '../Button/Button';
import { IconColor } from '../IconColor/IconColor';

export const Card = ({ name, imageUrl, link, hasPage, linkPage, isVisible, index }) => {
  const [showCard, setShowCard] = useState(false);
  const [isValidImage, setIsValidImage] = useState(true);

  const getIconsByProjectName = (projectName) => {
    const iconsByProject = {
      '3dCard': ['css', 'js'],
      'architect': ['css'],
      'beautifulWorld': ['css', 'js'],
      'capsule': ['js'],
      'childhood': ['html', 'css'],
      'darkSlider': ['html', 'css'],
      'gallery': ['css', 'js'],
      'faces': ['html', 'css'],
      'food': ['html', 'css', 'js'],
      'freelance': ['html', 'css'],
      'fairyForest': ['css', 'js'],
      'glopt': ['html', 'css'],
      'ikea': ['html', 'css'],
      'jewelery': ['css'],
      'kinomonstrHtml': ['html'],
      'naturalForest': ['html', 'css'],
      'prengi': ['html', 'css'],
      'pulse': ['html', 'css'],
      'quizlanding': ['html', 'css'],
      'result.school': ['js', 'css'],
      'SaintCode-DoDo': ['html', 'css'],
      'SaintCode-Emoji': ['js', 'css'],
      'SaintCode-guessNumber': ['js'],
      'SaintCode-Hogwarts': ['js'],
      'SaintCode-Konstruct': ['html', 'css'],
      'SaintCode-Novik': ['html', 'css'],
      'SaintCode-Portfolio': ['react'],
      'SaintCode-shoppingList': ['js'],
      'SaintCode-toDoList': ['js'],
      'SaintCode-weather': ['js'],
      'sar': ['html', 'css'],
      'Smith': ['html', 'css'],
      'tattoo': ['html', 'css'],
      'threeJS_billiards': ['js'],
      'threeJS_plane': ['js'],
      'threeJS_shooter': ['js'],
      'TicTacToe': ['react'],
      'tienbot.github.io': ['html', 'css'],
      'uber': ['html', 'css'],
      'visit-card': ['html', 'css'],
      'wordpress': ['html', 'css'],
    };

    return iconsByProject[projectName] || [];
  };

  const projectIcons = getIconsByProjectName(name);

  useEffect(() => {
    if (isVisible) {
      setShowCard(true);
    }
  }, [isVisible]);

  const handleImageError = () => {
    setIsValidImage(false);
  };

  function getRandomImage() {
    const images = [img6, img5, img4, img3, img2, img1];
    const randomIndex = Math.floor(Math.random() * images.length);
    return images[randomIndex];
  }

  return (
    <div className="">
      <div className="">
        <h2 className={s.h2}>
          Projects {index} <span className={s.span}>&#47;&#47; _{name}</span>
        </h2>
      </div>
      <div className={`${s.card} ${showCard ? s.show : ''}`}>
        <div className={s.card__top}>
          {isValidImage && isValidImage ? (
            <img className={s.card__img} src={imageUrl} alt="изображение проекта" onError={handleImageError} />
          ) : (
            <img className={s.card__img} src={getRandomImage()} alt="изображение-заглушка" />
          )}
          <div className={s.iconsContainer}>
            {projectIcons.map((icon) => (
              <IconColor key={icon} language={icon} alt="icon" />
            ))}
          </div>
        </div>
        <div className={s.card__bottom}>
          <p>{name}</p>
          <div className={s.buttons}>
            <a href={link} target="_blank" rel="noopener noreferrer">
              <Button textBtn="view-project" />
            </a>
            {hasPage && (
              <a href={linkPage} target="_blank" rel="noopener noreferrer">
                <Button textBtn="view-site" ghost />
              </a>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};
