import React from 'react';
import s from "./AboutInfoContent.module.sass"

const AboutInfoContent = ({ activeToggle }) => {
  let leftContent = <div className={s.content}>
    <p>&nbsp;&nbsp;Hello, my name is Aleksandr. I am a novice web developer eager to expand my skills and reach new heights in this exciting field.<br/><br/>

    &nbsp;&nbsp;My professional career began at DarkStudio, a web studio, where I started working as a technical support specialist. Over time, I developed an interest and talent in web development, and I was given the opportunity to transition into the role of a web developer. In this position, I gained valuable experience and learned how to create high-quality websites and applications.<br/><br/>

    &nbsp;&nbsp;To further my professional growth, I made the decision to enhance my qualifications. I joined SaintCode bootcamp, where I continued to refine my skills in web design, mastered Git, and delved into the study of JavaScript. Particularly, I found the study of the React framework to be exhilarating.<br/><br/>

    &nbsp;&nbsp;I strive to dedicate each day to programming. If I don't have an active web project, I engage in self-learning, take online courses, and solve practical tasks. I enjoy constantly expanding my knowledge and seeking new opportunities to apply my skills in real projects.</p>
    </div>;

  switch (activeToggle) {
    case 'Experiance':
      leftContent = <div className={s.content}>
        
        <p>2023 - Saint Code bootcamp (Frontend-developer student)</p><br/>
        <ul>
            <li>Passed training in the bootcamp format (3 months for 8 hours without days off)</li>
            <li>The most challenging project of the course was the team work on this portfolio website
                <ul>
                    <br/><p>Distinctive features of the site:</p>
                    <li>The "Snake" game</li>
                    <li>implementing projects from GitHub repositories</li>
                    <li>linking gists from git (GitHab API, useEffect, imported CSS)</li>
                    <li>dropdowns (useState)</li>
                    <li>IDE style (each line has a number with useRef, useEffect, and custom hook)</li>
                    <li>additionally performed the tasks of the team leader</li>
                </ul>
            </li>
        </ul>
            
        <br/><br/><p>2022 - Dark Studio (Website Developer/Technical Support Specialist)</p><br/>
        <ul>
            <li>Developed and supported the work of web products in the field of e-commerce</li>
            <li>Implemented adaptive cross-browser layout of Internet sites</li>
            <li>Advised designers on issues related to layout specifics</li>
            <ul>
                <br/><p>Websites developed:</p>
                <li><a target="_blank" rel="noreferrer" href="https://xn--80ajjhfpgiv6b.xn--p1ai/">The Face Project</a></li>
                <li><a target="_blank" rel="noreferrer" href="https://sarao.ru/">Union of Armenians of Russia</a></li>
            </ul>
        </ul>

        <br/><br/><p>2021 - Freelance (Freelance website developer)</p><br/>
        <ul>
            <li>Created turnkey websites according to individual customer requirements</li>
            <li>Designed websites from scratch</li>
            <li>Implemented a quiz survey to "warm up" customers</li>
            <ul>
                <br/><p>Completed projects:</p>
                <li><a target="_blank" rel="noreferrer" href="https://tienbot.github.io/jewelery/">Jewelery site</a></li>
                <li><a target="_blank" rel="noreferrer" href="https://tienbot.github.io/quizlanding/">Website development studio</a></li>
            </ul>
        </ul>
        
    </div>
      break;
    case 'Skills':
      leftContent = <div className={s.content}>
        <p>Technologies:</p>
        <ul>
            <li>Git</li>
            <li>HTML</li>
            <li>CSS</li>
            <li>JavaScript</li>
            <li>React</li>
            <li>nodeJS</li>
            <li>SASS</li>
            <li>webpack</li>
            <li>threeJS</li>
            <li>Gulp</li>
            <li>Bootstrap</li>
        </ul>
        <br/><p>Tools:</p>
        <ul>
            <li>VSCode</li>
            <li>WordPress</li>
            <li>Photoshop</li>
            <li>Figma</li>
            <li>Notion</li>
            <li>GitHub</li>
            <li>CodePen</li>
        </ul>
        <br/><p>Other:</p>
        <ul>
            <li>English language</li>
            <li>Touch typin</li>
        </ul>
      </div>;
      break;
    case 'Certificates':
      leftContent = <div className={s.content}>
        {/* <img src="https://xn----7sbbatcvjrscddclqofaivf1a1pxa.xn--p1ai/images/sertif.jpg" alt="Сертификат" /> */}
        <ul>
            <p>2023</p>
            <li><a target="_blank" rel="noreferrer" href="https://disk.yandex.ru/i/DHZ78aFH6rEoyQ">SaintCode - Frontend-developer</a></li>
            <br/><p>2022</p>
            <li><a target="_blank" rel="noreferrer" href="https://www.efset.org/cert/bFMCMT">EF SET stands for English Language</a></li>
            <li><a target="_blank" rel="noreferrer" href="https://www.coursera.org/account/accomplishments/certificate/6ZS8RDGA22CN">University of California - JavaScript Basics</a></li>
            <li><a target="_blank" rel="noreferrer" href="https://lk.result.school/pl/274615230">Marathon: 5 days - 5 projects in JavaScript</a></li>
            <li><a target="_blank" rel="noreferrer" href="https://www.ratatype.ua/ru/u5022041/certificate/en/">Touch typing (English layout)</a></li>
            <li><a target="_blank" rel="noreferrer" href="https://www.ratatype.ua/ru/u5022041/certificate/ru/">Touch typing (Russian layout)</a></li>
            <li><a target="_blank" rel="noreferrer" href="https://www.coursera.org/account/accomplishments/certificate/TFQQYJMTV4BU">Yandex - Fundamentals of HTML and CSS</a></li>
            <li><a target="_blank" rel="noreferrer" href="https://www.coursera.org/account/accomplishments/certificate/GXZTSTJVAS75">Yandex - Web Design Tips and Tricks</a></li>
            <br/><p>2021</p>
            <li><a target="_blank" rel="noreferrer" href="https://dev.1c-bitrix.ru/certificates/learning.php?course=34">1C-Bitrix. Content Manager</a></li>
            <li><a target="_blank" rel="noreferrer" href="https://dev.1c-bitrix.ru/certificates/learning.php?course=135">1C-Bitrix. Installation and Configuration</a></li>
            <li><a target="_blank" rel="noreferrer" href="https://beonmax.com/certificates/7eb62115f01e2c5ceb78a2d2a19feb90/ru/">JavaScript - Complete Course from Zero to Results!</a></li>
            <li><a target="_blank" rel="noreferrer" href="https://beonmax.com/certificates/35e4a440ae908015fa58a0843bf61010/ru/">Photoshop for Beginner Web Designers</a></li>
            <li><a target="_blank" rel="noreferrer" href="https://beonmax.com/certificates/96ecd9429cc33825f45deaf3e71f5ab0/ru/">WordPress - From Zero to Pro!</a></li>
            <li><a target="_blank" rel="noreferrer" href="https://beonmax.com/certificates/b60a3ea421526c44c42907bdc344b6b3/ru/">WordPress Theme Development and Front-end Implementation</a></li>
            <br/><p>2020</p>
            <li><a target="_blank" rel="noreferrer" href="https://beonmax.com/certificates/33cd33460194d8ae2159a0cebcd8d51a/ru/">BOOTSTRAP</a></li>
            <li><a target="_blank" rel="noreferrer" href="https://www.sololearn.com/Certificate/1023-9058200/pdf">CSS Fundamentals course</a></li>
            <li><a target="_blank" rel="noreferrer" href="https://beonmax.com/certificates/9a4253ed29822cf89145f27a11b3876a/ru/">CodeIgniter</a></li>
            <li><a target="_blank" rel="noreferrer" href="https://www.sololearn.com/Certificate/1014-9058200/pdf/">HTML Fundamentals course</a></li>
            <li><a target="_blank" rel="noreferrer" href="https://beonmax.com/certificates/82244c9ed58c0e0675b95661275f5189/ru/">JavaScript / jQuery</a></li>
            <li><a target="_blank" rel="noreferrer" href="https://www.sololearn.com/Certificate/1024-9058200/pdf">JavaScript Tutorial course</a></li>
            <li><a target="_blank" rel="noreferrer" href="https://beonmax.com/certificates/c8f193a5f03bb5789ca1be193eb3f43f/ru/">Linux / GIT</a></li>
            <li><a target="_blank" rel="noreferrer" href="https://beonmax.com/certificates/f17fb6a9907d72e603376e67dff6eb80/ru/">PHP / MySQL</a></li>
            <li><a target="_blank" rel="noreferrer" href="https://www.sololearn.com/Certificate/1059-9058200/pdf/">PHP Tutorial course</a></li>
            <li><a target="_blank" rel="noreferrer" href="https://www.sololearn.com/Certificate/1082-9058200/pdf">jQuery Tutorial course</a></li>
            <li><a target="_blank" rel="noreferrer" href="https://beonmax.com/certificates/26d73162d97439ec706bb6c036172732/ru/">Web Developer 2020: From Zero to Results!</a></li>
            <li><a target="_blank" rel="noreferrer" href="https://geekbrains.ru/go/sne8_6">Programming Fundamentals Intensive</a></li>
            <li><a target="_blank" rel="noreferrer" href="https://geekbrains.ru/go/zltXCB">How to Become a Programmer Course</a></li>
            <li><a target="_blank" rel="noreferrer" href="https://u.netology.ngcdn.ru/backend/uploads/legacy/shared_diplomas/pdf_certificate/38457/certificate.pdf">Fundamentals of HTML and CSS</a></li>
            <li><a target="_blank" rel="noreferrer" href="https://beonmax.com/certificates/eca7b703691b6a84a7e3efd55237388b/ru/">HTML/CSS Course</a></li>
            <li><a target="_blank" rel="noreferrer" href="https://geekbrains.ru/go/mFwlim">Fundamentals of Object-Oriented Programming Course</a></li>
            <li><a target="_blank" rel="noreferrer" href="https://geekbrains.ru/go/ZtzVdQ">"HTML&CSS. Beginner Level" test</a></li>
            <li><a target="_blank" rel="noreferrer" href="https://geekbrains.ru/go/DCeUpY">"JavaScript. Intermediate Level" test</a></li>
            <li><a target="_blank" rel="noreferrer" href="https://geekbrains.ru/certificates/865653"></a>"English Language. Intermediate" test</li>
            <li><a target="_blank" rel="noreferrer" href="https://geekbrains.ru/certificates/816650">"Fundamentals of Programming. Beginner Level" test</a></li>
            <li><a target="_blank" rel="noreferrer" href="https://geekbrains.ru/go/eULuVk">Test 'PHP. Level 1'</a></li>
        </ul>
      </div>;
      break;
    case 'bio':
      leftContent = <div className={s.content}>Bio content</div>;
      break;
    case 'interests':
      leftContent = <div className={s.content}>Interests content</div>;
      break;
    case 'education':
      leftContent = <div className={s.content}>Education content</div>;
      break;
    case 'Music':
      leftContent = <div className={s.content}>
        <p>Rock Experience. Best Tracks</p><br/>
        <p>The Rock Experience: Year by Year" is an author's project that consists of a series of programs in which A.K. Troitsky discusses musical genres, iconic bands and artists, and curates his own chart of albums from 1955 to 1995.</p><br/>
        <ul>
            <li><a target="_blank" rel="noreferrer" href="https://music.yandex.ru/users/alexanderplygun/playlists/1053">Best Tracks - 1987</a></li>
            <li><a target="_blank" rel="noreferrer" href="https://music.yandex.ru/users/alexanderplygun/playlists/1052">Best Tracks - 1986</a></li>
            <li><a target="_blank" rel="noreferrer" href="https://music.yandex.ru/users/alexanderplygun/playlists/1051">Best Tracks - 1985</a></li>
            <li><a target="_blank" rel="noreferrer" href="https://music.yandex.ru/users/alexanderplygun/playlists/1050">Best Tracks - 1984</a></li>
            <li><a target="_blank" rel="noreferrer" href="https://music.yandex.ru/users/alexanderplygun/playlists/1013">Best Tracks - 1983</a></li>
            <li><a target="_blank" rel="noreferrer" href="https://music.yandex.ru/users/alexanderplygun/playlists/1012">Best Tracks - 1982</a></li>
            <li><a target="_blank" rel="noreferrer" href="https://music.yandex.ru/users/alexanderplygun/playlists/1010">Best Tracks - 1981</a></li>
            <li><a target="_blank" rel="noreferrer" href="https://music.yandex.ru/users/alexanderplygun/playlists/1040">Best Tracks - 1980</a></li>
            <li><a target="_blank" rel="noreferrer" href="https://music.yandex.ru/users/alexanderplygun/playlists/1039">Best Tracks - 1979</a></li>
            <li><a target="_blank" rel="noreferrer" href="https://music.yandex.ru/users/alexanderplygun/playlists/1038">Best Tracks - 1978</a></li>
            <li><a target="_blank" rel="noreferrer" href="https://music.yandex.ru/users/alexanderplygun/playlists/1037">Best Tracks - 1977</a></li>
            <li><a target="_blank" rel="noreferrer" href="https://music.yandex.ru/users/alexanderplygun/playlists/1036">Best Tracks - 1976</a></li>
            <li><a target="_blank" rel="noreferrer" href="https://music.yandex.ru/users/alexanderplygun/playlists/1035">Best Tracks - 1975</a></li>
            <li><a target="_blank" rel="noreferrer" href="https://music.yandex.ru/users/alexanderplygun/playlists/1034">Best Tracks - 1974</a></li>
            <li><a target="_blank" rel="noreferrer" href="https://music.yandex.ru/users/alexanderplygun/playlists/1033">Best Tracks - 1973</a></li>
            <li><a target="_blank" rel="noreferrer" href="https://music.yandex.ru/users/alexanderplygun/playlists/1032">Best Tracks - 1972</a></li>
            <li><a target="_blank" rel="noreferrer" href="https://music.yandex.ru/users/alexanderplygun/playlists/1031">Best Tracks - 1971</a></li>
            <li><a target="_blank" rel="noreferrer" href="https://music.yandex.ru/users/alexanderplygun/playlists/1030">Best Tracks - 1970</a></li>
            <li><a target="_blank" rel="noreferrer" href="https://music.yandex.ru/users/alexanderplygun/playlists/1029">Best Tracks - 1969</a></li>
            <li><a target="_blank" rel="noreferrer" href="https://music.yandex.ru/users/alexanderplygun/playlists/1028">Best Tracks - 1968</a></li>
            <li><a target="_blank" rel="noreferrer" href="https://music.yandex.ru/users/alexanderplygun/playlists/1027">Best Tracks - 1967</a></li>
            <li><a target="_blank" rel="noreferrer" href="https://music.yandex.ru/users/alexanderplygun/playlists/1026">Best Tracks - 1966</a></li>
            <li><a target="_blank" rel="noreferrer" href="https://music.yandex.ru/users/alexanderplygun/playlists/1025">Best Tracks - 1965</a></li>
            <li><a target="_blank" rel="noreferrer" href="https://music.yandex.ru/users/alexanderplygun/playlists/1024">Best Tracks - 1964</a></li>
            <li><a target="_blank" rel="noreferrer" href="https://music.yandex.ru/users/alexanderplygun/playlists/1023">Best Tracks - 1963</a></li>
            <li><a target="_blank" rel="noreferrer" href="https://music.yandex.ru/users/alexanderplygun/playlists/1022">Best Tracks - 1962</a></li>
            <li><a target="_blank" rel="noreferrer" href="https://music.yandex.ru/users/alexanderplygun/playlists/1021">Best Tracks - 1961</a></li>
            <li><a target="_blank" rel="noreferrer" href="https://music.yandex.ru/users/alexanderplygun/playlists/1020">Best Tracks - 1960</a></li>
            <li><a target="_blank" rel="noreferrer" href="https://music.yandex.ru/users/alexanderplygun/playlists/1019">Best Tracks - 1959</a></li>
            <li><a target="_blank" rel="noreferrer" href="https://music.yandex.ru/users/alexanderplygun/playlists/1018">Best Tracks - 1958</a></li>
            <li><a target="_blank" rel="noreferrer" href="https://music.yandex.ru/users/alexanderplygun/playlists/1017">Best Tracks - 1957</a></li>
            <li><a target="_blank" rel="noreferrer" href="https://music.yandex.ru/users/alexanderplygun/playlists/1016">Best Tracks - 1956</a></li>
            <li><a target="_blank" rel="noreferrer" href="https://music.yandex.ru/users/alexanderplygun/playlists/1015">Best Tracks - 1955</a></li>
        </ul>
      </div>;
      break;
    case 'Movies':
      leftContent = <div className={s.content}>
        <ul>
            <p>2023</p>
            <li><a target="_blank" rel="noreferrer" href="https://www.kinopoisk.ru/film/93377/">Hot Fuzz (2007)</a></li>
            <li><a target="_blank" rel="noreferrer" href="https://www.kinopoisk.ru/film/6034/">The Secret Life of Walter Mitty (2013)</a></li>
            <li><a target="_blank" rel="noreferrer" href="https://www.kinopoisk.ru/film/1044280/">Guardians of the Galaxy Vol. 3 (2023)</a></li>
            <li><a target="_blank" rel="noreferrer" href="https://www.kinopoisk.ru/film/902939/">Baby Driver (2017)</a></li>
            <li><a target="_blank" rel="noreferrer" href="https://www.kinopoisk.ru/film/105948/">Scott Pilgrim vs. the World (2010)</a></li>
            <li><a target="_blank" rel="noreferrer" href="https://www.kinopoisk.ru/film/420070/">Ку! Кин-дза-дза (2012)</a></li>
            <li><a target="_blank" rel="noreferrer" href="https://www.kinopoisk.ru/film/1170315/">Hors normes (2019)</a></li>
            <li><a target="_blank" rel="noreferrer" href="https://www.kinopoisk.ru/film/572458/">No One Lives (2012)</a></li>
            <li><a target="_blank" rel="noreferrer" href="https://www.kinopoisk.ru/film/20368/">The Hitcher (1986)</a></li>
            <li><a target="_blank" rel="noreferrer" href="https://www.kinopoisk.ru/film/1354524/">The Banshees of Inisherin (2022)</a></li>
            <li><a target="_blank" rel="noreferrer" href="https://www.kinopoisk.ru/film/571252/">The Collection (2012)</a></li>
            <li><a target="_blank" rel="noreferrer" href="https://www.kinopoisk.ru/film/317985/">The Collector (2009)</a></li>
            <li><a target="_blank" rel="noreferrer" href="https://www.kinopoisk.ru/film/4886/">I, Robot (2004)</a></li>
            <li><a target="_blank" rel="noreferrer" href="https://www.kinopoisk.ru/film/828242/">The Disaster Artist (2017)</a></li>
            <li><a target="_blank" rel="noreferrer" href="https://www.kinopoisk.ru/film/42571/">Иди и смотри (1985)</a></li>
            <li><a target="_blank" rel="noreferrer" href="https://www.kinopoisk.ru/film/1111005/">The Super Mario Bros. Movie (2023)</a></li>
            <li><a target="_blank" rel="noreferrer" href="https://www.kinopoisk.ru/film/507/">The Terminator (1984)</a></li>
            <li><a target="_blank" rel="noreferrer" href="https://www.kinopoisk.ru/film/840821/">Puss in Boots: The Last Wish (2022)</a></li>
            <li><a target="_blank" rel="noreferrer" href="https://www.kinopoisk.ru/film/1003431/">Toc Toc (2017)</a></li>
            <li><a target="_blank" rel="noreferrer" href="https://www.kinopoisk.ru/film/361/">Fight Club (1999)</a></li>
            <li><a target="_blank" rel="noreferrer" href="https://www.kinopoisk.ru/film/45770/">Последняя реликвия (1969)</a></li>
            <li><a target="_blank" rel="noreferrer" href="https://www.kinopoisk.ru/film/1144300/">Yesterday (2019)</a></li>
            <li><a target="_blank" rel="noreferrer" href="https://www.kinopoisk.ru/film/416824/">The Boat That Rocked (2009)</a></li>
            <li><a target="_blank" rel="noreferrer" href="https://www.kinopoisk.ru/film/725190/">Whiplash (2013)</a></li>
            <li><a target="_blank" rel="noreferrer" href="https://www.kinopoisk.ru/film/45146/">Любовь и голуби (1984)</a></li>
            <li><a target="_blank" rel="noreferrer" href="https://www.kinopoisk.ru/film/1348487/">Triangle of Sadness (2022)</a></li>
            <li><a target="_blank" rel="noreferrer" href="https://www.kinopoisk.ru/film/4771048/">Гром: Трудное детство (2023)</a></li>
            <br/><p>2022</p>
            <li><a target="_blank" rel="noreferrer" href="https://www.kinopoisk.ru/film/20368/">The Hitcher (1986)</a></li>
            <li><a target="_blank" rel="noreferrer" href="https://www.kinopoisk.ru/film/843480/">The Lego Batman Movie (2017)</a></li>
            <li><a target="_blank" rel="noreferrer" href="https://www.kinopoisk.ru/film/498822/">Batman: Under the Red Hood (2010)</a></li>
            <li><a target="_blank" rel="noreferrer" href="https://www.kinopoisk.ru/film/437410/">The Dark Knight Rises (2012)</a></li>
            <li><a target="_blank" rel="noreferrer" href="https://www.kinopoisk.ru/film/3563/">Interstate 60 (2001)</a></li>
            <li><a target="_blank" rel="noreferrer" href="https://www.kinopoisk.ru/film/111543/">The Dark Knight (2008)</a></li>
            <li><a target="_blank" rel="noreferrer" href="https://www.kinopoisk.ru/film/47237/">Batman Begins (2005)</a></li>
            <li><a target="_blank" rel="noreferrer" href="https://www.kinopoisk.ru/film/898/">Batman Returns (1992)</a></li>
            <li><a target="_blank" rel="noreferrer" href="https://www.kinopoisk.ru/film/4205/">Batman (1989)</a></li>
            <li><a target="_blank" rel="noreferrer" href="https://www.kinopoisk.ru/film/464130/">Up in the Air (2009)</a></li>
            <li><a target="_blank" rel="noreferrer" href="https://www.kinopoisk.ru/film/4871/">Scent of a Woman (1992)</a></li>
            <li><a target="_blank" rel="noreferrer" href="https://www.kinopoisk.ru/film/261127/">Gake no ue no Ponyo (2008)</a></li>
            <li><a target="_blank" rel="noreferrer" href="https://www.kinopoisk.ru/film/259351/">Gedo senki (2006)</a></li>
            <li><a target="_blank" rel="noreferrer" href="https://www.kinopoisk.ru/film/1047143/">Bad Times at the El Royale (2018)</a></li>
            <li><a target="_blank" rel="noreferrer" href="https://www.kinopoisk.ru/film/1447137/">Nope (2022)</a></li>
            <li><a target="_blank" rel="noreferrer" href="https://www.kinopoisk.ru/film/1392550/">Bullet Train (2022)</a></li>
            <li><a target="_blank" rel="noreferrer" href="https://www.kinopoisk.ru/film/1322324/">Everything Everywhere All at Once (2021)</a></li>
            <li><a target="_blank" rel="noreferrer" href="https://www.kinopoisk.ru/film/501333/">The Big Short (2015)</a></li>
            <li><a target="_blank" rel="noreferrer" href="https://www.kinopoisk.ru/film/63991/">Pirates of the Caribbean: Dead Man's Chest (2006)</a></li>
            <li><a target="_blank" rel="noreferrer" href="https://www.kinopoisk.ru/film/4374/">Pirates of the Caribbean: The Curse of the Black Pearl (2003)</a></li>
            <li><a target="_blank" rel="noreferrer" href="https://www.kinopoisk.ru/film/301/">The Matrix (1999)</a></li>
            <li><a target="_blank" rel="noreferrer" href="https://www.kinopoisk.ru/film/590286/">The Batman (2022)</a></li>
            <li><a target="_blank" rel="noreferrer" href="https://www.kinopoisk.ru/film/79834/">The Hitchhiker's Guide to the Galaxy (2005)</a></li>
            <li><a target="_blank" rel="noreferrer" href="https://www.kinopoisk.ru/film/79925/">Дневной дозор (2005)</a></li>
            <li><a target="_blank" rel="noreferrer" href="https://www.kinopoisk.ru/film/79850/">Ночной дозор (2004)</a></li>
            <li><a target="_blank" rel="noreferrer" href="https://www.kinopoisk.ru/film/32478/">The NeverEnding Story II: The Next Chapter (1990)</a></li>
            <li><a target="_blank" rel="noreferrer" href="https://www.kinopoisk.ru/film/12205/">Die unendliche Geschichte (1984)</a></li>
            <li><a target="_blank" rel="noreferrer" href="https://www.kinopoisk.ru/film/377/">Se7en (1995)</a></li>
            <li><a target="_blank" rel="noreferrer" href="https://www.kinopoisk.ru/film/44882/">Коммунист (1957)</a></li>
            <li><a target="_blank" rel="noreferrer" href="https://www.kinopoisk.ru/film/1077685/">LX 2048 (2020)</a></li>
            <li><a target="_blank" rel="noreferrer" href="https://www.kinopoisk.ru/film/45276/">Зеркало для героя (1987)</a></li>
            <li><a target="_blank" rel="noreferrer" href="https://www.kinopoisk.ru/film/4772436/">Старые шишки (2021)</a></li>
            <li><a target="_blank" rel="noreferrer" href="https://www.kinopoisk.ru/film/301/">The Matrix (1999)</a></li>
            <li><a target="_blank" rel="noreferrer" href="https://www.kinopoisk.ru/film/897725/">Ghostbusters: Afterlife (2021)</a></li>
            <li><a target="_blank" rel="noreferrer" href="https://www.kinopoisk.ru/film/1294123/">The Matrix Resurrections (2021)</a></li>
            <li><a target="_blank" rel="noreferrer" href="https://www.kinopoisk.ru/film/1199100/">Free Guy (2021)</a></li>
            <li><a target="_blank" rel="noreferrer" href="https://www.kinopoisk.ru/film/706019/">No Time to Die (2020)</a></li>
        </ul>
      </div>;
      break;
    case 'Books':
      leftContent = <div className={s.content}>
         <ul>
            <p>2022</p>
            <li>Сергей Лукьяненко - “Сумеречный дозор” (аудиокнига)</li>
            <li>Дуглас Адамс - “В основном безвредна” (аудиокнига)</li>
            <li>Дуглас Адамс - “Всего хорошего, и спасибо за рыбу!” (аудиокнига)</li>
            <li>Дуглас Адамс - “Жизнь, Вселенная и все остальное” (аудиокнига)</li>
            <li>Дуглас Адамс - “Ресторан на краю Вселенной” (аудиокнига)</li>
            <li>Сергей Лукьяненко, Владимир Васильев - “Дневной дозор” (аудиокнига)</li>
            <li>Сергей Лукьяненко - “Ночной дозор” (аудиокнига)</li>
            <li>Михаэль Энде - “Бесконечная история” (аудиокнига)</li>
            <li>Стивен Кинг - “Смиренные сестры Элурии” (аудиокнига)</li>
            <li>Стивен Кинг - “Темная башня” (аудиокнига)</li>
            <li>Стивен Кинг - “Песь Сюзанны” (аудиокнига)</li>
            <li>Стивен Кинг - “Волки Кальи” (аудиокнига)</li>
            <li>Уильям Бернстайн - Если сможете</li>
            <li>Тимоти Феррис - Как работать по 4 часа в неделю</li>
            <br/><p>2021</p>
            <li>Франсеск Миральес и Эктор Гарсиа (Кирай) - Станция «Предназначение». Как найти то, к чему лежит сердце, и наполнить смыслом каждый день</li>
            <li>Роберт Гловер - Хватит быть славным парнем! Как добиться желаемого в любви, работе и жизни (аудио)</li>
            <li>Содзи Симада - Дом кривых стен</li>
            <li>Высоцкий В. - Лукоморья больше нет...</li>
            <li>Толкин Дж. Р.Р. - Властелин колец. Содружество кольца</li>
            <li>Высоцкий В. - Любой из нас - ну чем не чародей?!</li>
            <li>Высоцкий В. - Больно мне за наш СССР...</li>
            <li>Толкин Дж. Р.Р. - Хоббит или Туда и обратно</li>
            <li>Высоцкий В. - Летела жизнь в плохом автомобиле...</li>
            <li>Высоцкий В. - Я был душой дурного общества...</li>
            <li>Высоцкий В. - Выйти живым из боя...</li>
            <li>Конникова М. - Выдающийся ум: мыслить как Шерлок Холмс</li>
            <li>Балазанова О.Е. - Загадки истории. Знаменитые мистификации</li>
            <li>Джанни Родари - Приключения Чиполлино</li>
            <li>Ронда Берн - Сила</li>
            <li>Ронда Берн - Тайна</li>
            <li>Майкл Финкель - Я ем тишину ложками</li>
            <li>Познер В.В. - Познер о "Познере"</li>
            <li>Искатели. 28 известных писателей о путешествиях, которые изменили их навсегда</li>
            <li>Валерий Шанин - Вокруг света за 280$</li>
            <li>Мечтатели. 34 известных писателя о путешествиях, которые изменили их навсегда</li>
            <li>Ян Веннер и Джо Леви - Великие интервью журнала Rolling Stone за 40 лет</li>
            <li>Чарли Хуперт - Искусство харизмы</li>
            <li>Ник Морган - Javascript для детей. Самоучитель по программированию</li>
            <li>Джон Харрис - Roch'n'Roll. Грязь и величие</li>
            <li>Роберт Родригес - Кино без бюджета</li>
            <li>Герои. 30 известных актеров и режиссеров рассказывают о своих путешествиях</li>
            <li>Фредрик Бакман - Вторая жизнь Уве</li>
            <li>Э. Фримен, Э. Робсон - Head First. Изучаем программирование на JavaScript</li>
            <li>Адитья Бхаргава - Грокаем алгоритмы</li>
            <li>Елена Бузина - Английский АНТИсамоучитель</li>
            <li>Хэл Элрод - Магия Утра. Как первый час дня определяет ваш успех</li>
            <li>Э. Фримен, Э. Робсон - Head First. Изучаем HTML, XHTML и CSS</li>
        </ul>
      </div>;
      break;
    default:
      break;
  }

  return <div>{leftContent}</div>;
};
export default AboutInfoContent;