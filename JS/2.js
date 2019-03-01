'use strict';

var questions = [
    {
        number: 1,
        text: 'Как правильно закончить пословицу: «Не откладывай на завтра то, что можно…»',
        answers: ['сделать сегодня', 'сделать послезавтра', 'сделать через месяц', 'никогда не делать'],
        correct: 1
    },
    {
        number: 2,
        text: 'Что говорит человек, когда замечает нечто необычное?',
        answers: ['попало в лоб', 'залетело в рот', 'накапало в уши', 'бросилось в глаза'],
        correct: 4
    },
    {
        number: 3,
        text: 'Что помогает туристу ориентироваться в незнакомом городе?',
        answers: ['путепровод', 'путеукладчик', 'путеводитель', 'путеводная звезда'],
        correct: 3
    },
    {
        number: 4,
        text: 'Какой наряд прославил баснописец Крылов?',
        answers: ['тришкин кафтан', 'ивашкин армяк', 'прошкин зипун', 'машкин сарафан'],
        correct: 1
    },
    {
        number: 5,
        text: 'Что не бывает морским?',
        answers: ['рельс', 'огурец', 'гребешок', 'узел'],
        correct: 1
    },
    {
        number: 6,
        text: 'В какой стране появилась мандолина?',
        answers: ['Испания', 'Италия', 'Венгрия', 'Греция'],
        correct: 2
    },
    {
        number: 7,
        text: 'Где в Древней Греции можно было увидеть надпись: «Здесь живут мертвые и говорят немые»?',
        answers: ['на кладбищах', 'в больницах', 'в библиотеках', 'в тюрьмах'],
        correct: 3
    },
    {
        number: 8,
        text: 'Откуда обычно достает подарки Дед Мороз?',
        answers: ['из шкатулки', 'из мешка', 'из-за пазухи', 'из интернет-магазина'],
        correct: 2
    },
    {
        number: 9,
        text: 'Какой элемент есть в конструкции башенного крана?',
        answers: ['стрела', 'копьё', 'дротик', 'бумеранг'],
        correct: 1
    },
    {
        number: 10,
        text: 'Кто стал героиней песни Максима Леонидова?',
        answers: ['девочка — мираж', 'девочка — видение', 'девочка — приведение', 'девочка — галлюцинация'],
        correct: 2
    },
];

var game = function (mas) {
    let play = true;
    let round = 0;

    while (play == true && round < mas.length) {
        let question = generateQuestion(mas, round);
        let answer = prompt(question.questionText);
        play = check(answer, round);
        round++;
    }
};

var generateQuestion = function (mas, round) {
    let answers = '';

    for (let i = 0; i < 4; i++) {
        answers = answers + (i + 1) + ' - ' + mas[round].answers[i] + '\n';
    }

    let text = mas[round].text + '\n';

    let correctAnswer = mas[round].correct;

    return {
        questionText: text + answers + 'Введите правильный ответ',
        rightAnswer: correctAnswer
    }
};

var check = function (answer, round) {
if (answer == questions[round].correct) {
    alert('Верно !');
    return true;
} else if ((answer == null) || (answer == '')) {
    alert('Вы закончили игру, т.к. не дали ответа \nПравильных ответов за игру: ' + round + ' из 10');
    return false;
} else {
    alert('Неверный ответ!\nПравильных ответов за игру: ' + round + ' из 10');
    return false;
}
};

game(questions);