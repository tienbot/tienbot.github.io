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
    firstQuestion.innerHTML = questionStart[0];

    nextBtn.addEventListener('click', ()=> {
            firstQuestion.innerHTML = questionStart[numb++];
            if (numb>questionStart.length-1){
                nextBtn.classList.add('d-none');
                document.querySelector('.button').classList.remove('d-none');
            } else if (numb>questionStart.length){
                firstQuestion.classList.add('d-none');
            }
    });
}

window.onload = init;