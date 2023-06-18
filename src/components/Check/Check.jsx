import React, { useState } from 'react';
import s from './Check.module.sass';
import { IconBW } from '../IconBW/IconBW';


//Проекты
const icons = [
    { key: 'react', alt: 'React', active: false, text: 'React', projects: ['SaintCode-Portfolio', 'TicTacToe',]},
    { key: 'html', alt: 'HTML', active: false, text: 'HTML', projects: ['darkSlider', 'food', 'childhood', 'glopt', 'ikea', 'kinomonstrHtml', 'naturalForest', 'prengi', 'pulse', 'quizlanding', 'SaintCode-DoDo', 'SaintCode-Konstruct', 'SaintCode-Novik', 'sar', 'Smith', 'tattoo', 'freelance', 'uber', 'visit-card', 'wordpress', 'faces'] },
    { key: 'css', alt: 'CSS', active: false, text: 'CSS', projects: ['3dCard', 'darkSlider', 'gallery', 'beautifulWorld', 'food', 'architect', 'fairyForest', 'childhood', 'glopt', 'ikea', 'jewelery', 'naturalForest', 'prengi', 'pulse', 'quizlanding', 'result.school', 'SaintCode-DoDo', 'SaintCode-Emoji', 'SaintCode-Konstruct', 'SaintCode-Novik', 'sar', 'Smith', 'tattoo', 'freelance', 'uber', 'visit-card', 'wordpress', 'faces'] },
    { key: 'js', alt: 'Javascript', active: false, text: 'Javascript', projects: ['3dCard', 'gallery', 'beautifulWorld', 'food', 'fairyForest', 'capsule', 'result.school', 'SaintCode-Emoji', 'SaintCode-guessNumber', 'SaintCode-Hogwarts', 'SaintCode-shoppingList', 'SaintCode-toDoList', 'SaintCode-weather', 'threeJS_billiards', 'threeJS_plane', 'threeJS_shooter', ] },
    // { key: 'vue', alt: 'Vue', active: false, text: 'Vue' },
    // { key: 'angular', alt: 'Angular', active: false, text: 'Angular' },
    // { key: 'gatsby', alt: 'Gatsby', active: false, text: 'Gatsby' },
    // { key: 'flutter', alt: 'Flutter', active: false, text: 'Flutter' },
  ];

export const Check = ({ setCheckedProjects, setButtonXText, setButtonXVisible }) => {
  const [checkedIcons, setCheckedIcons] = useState(icons);
const handleCheckboxChange = (key, text) => {
  setCheckedIcons((prevIcons) =>
    prevIcons.map((icon) =>
      icon.key === key ? { ...icon, active: !icon.active } : icon
    )
  );

  const updatedCheckedIcons = checkedIcons.map((icon) =>
    icon.key === key ? { ...icon, active: !icon.active } : icon
  );

  const checkedProjects = updatedCheckedIcons
    .filter((icon) => icon.active)
    .flatMap((icon) => icon.projects || []);

  setCheckedProjects(checkedProjects);

  const selectedTexts = updatedCheckedIcons
    .filter((icon) => icon.active)
    .map((icon) => icon.text)
    .join('; ');

    setButtonXText(selectedTexts);

    const hasSelectedCheckboxes = updatedCheckedIcons.some((icon) => icon.active);
    setButtonXVisible(hasSelectedCheckboxes);
};
return (
    <div className={s.list}>
      <ul>
        {checkedIcons.map(({ key, alt, active, text }) => (
          <li key={key} className={s.checkItem}>
            <label className={s.checkbox}>
              <input
                className={s.check}
                type="checkbox"
                checked={active}
                onChange={() => handleCheckboxChange(key, text)}
              />
              <span className={s.checkmark}></span>
              <IconBW {...{ [key]: true, active }} alt={alt} />
            </label>
            <span className={`${s.text} ${active ? s.activeText : ''}`}>{text}</span>
          </li>
        ))}
      </ul>
    </div>
  );
};