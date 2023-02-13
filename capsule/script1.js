function init(){

    let nextBtn = document.querySelector('#next');
    let firstQuestion = document.querySelector('#firstQuestion');
    let questionStart = [
        'Как вас зовут?',
        'Какое сейчас число?',
        'Сколько вам лет?',
        'Где вы сейчас?',
        'Кем вы работаете?',
        'У вас есть парень/девушка/муж/жена?',
        'Первая вещь, которую вы сделали, когда проснулась сегодня?',
        'Самые громкие новости этого года',
        'Технология, которая взорвала вам мозг'
    ];
    let numb = 1;
    //отображаем первый вопрос из массива
    firstQuestion.innerHTML = questionStart[0];

    //при клике на кнопку отображаем следующий вопрос из массива
    nextBtn.addEventListener('click', ()=> {
        firstQuestion.innerHTML = questionStart[numb++];

        //если счетчик больше кол-ва вопросов, то...
        if (numb>=questionStart.length){
            //скрываем кнопку "следующие вопрос"
            nextBtn.classList.add('d-none');
            //отображаем кнопку "рандомные вопросы"
            document.querySelector('.button').classList.remove('d-none');
        }
    });
}

window.onload = init;
