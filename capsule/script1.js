function init(){

    let nextBtn = document.querySelector('#next');
    let firstQuestion = document.querySelector('#firstQuestion');
    let questionStart = [
        'Как тебя зовут?',
        'Какое сейчас число?',
        'Сколько тебе лет?',
        'Где ты?',
        'Кем ты работаешь?',
        'У тебя есть парень/девушка/муж/жена?',
        'Первая вещь, которую ты сделала, когда проснулась сегодня?',
        'Самые громкие новости этого года',
        'Технология, которая взорвала тебе мозг'
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